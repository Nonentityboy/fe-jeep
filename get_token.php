<?php

    $appId = 'wxf8f6a3e7019ec8ec';
    $appSecret = '2362c4d4ab3ac324c46d83fd4ba4374e';//根据公众号实际参数进行设置


//第一步：取得缓存的access_token，如果已经过期，则通过接口获得，没有过期则直接使用
$f1=json_decode(file_get_contents("access_token.txt"));
$t1= $f1->time;

if(time()-$t1 > 0){
    
    //echo 'token已过期';

    $url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appId."&secret=".$appSecret;
    $ch = curl_init();//初始化curl
    curl_setopt($ch, CURLOPT_URL,$url); //要访问的地址 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
    $res = json_decode(curl_exec($ch));
    
    if(curl_errno($ch)){
      //var_dump(curl_error($ch)); //若错误打印错误信息 
    }
    
    $access_token = $res->access_token; //实时获得access_token

    //写入缓存文件
    if(isset($access_token)){

        $data['access_token']  = $access_token;

        $data['time'] = time() + 7200;

        //$this->setFile($this->accessTokenFile,json_encode($data));

    }
        
    $fp = fopen("access_token.txt","w+");
    fwrite($fp,json_encode($data));
    fclose($fp);
    
    curl_close($ch);//关闭curl
    

}else{
    
    $access_token = $f1->access_token; //获得缓存的access_token

}


//第二步：取得缓存的jsapi_ticket
$f2=json_decode(file_get_contents("jsapi_ticket.txt"));
$t2= $f2->expire_time;

if(time()-$t2 > 0){
    
    //echo 'ticket已过期';

    $url = "https://api.weixin.qq.com/cgi-bin/ticket/getticket?access_token=".$access_token."&type=jsapi";
    $ch = curl_init();//初始化curl
    curl_setopt($ch, CURLOPT_URL,$url); //要访问的地址 
    curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);//跳过证书验证
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false); // 从证书中检查SSL加密算法是否存在
    $res = json_decode(curl_exec($ch));
    if(curl_errno($ch)){
      var_dump(curl_error($ch)); //若错误打印错误信息 
    }
    
    //var_dump($data); //打印信息
     
    curl_close($ch);//关闭curl 


    $jsapi_ticket = $res->ticket;    // 实时获得ticket

    //写入缓存文件
    $data =[];
    if(isset($jsapi_ticket)){

        $data['jsapi_ticket']  = $jsapi_ticket;

        $data['expire_time'] = time() + 7200;

        //$this->setFile($this->accessTokenFile,json_encode($data));

    }
        
    $fp = fopen("jsapi_ticket.txt","w+");
    fwrite($fp,json_encode($data));
    fclose($fp);
    

}else{
    
    $jsapi_ticket = $f2->jsapi_ticket; //获得缓存的access_token

}


//第三步：完成验签拼接

    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";

    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    $str = "";

    for ($i = 0; $i < 10; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }

    $noncestr = $str;

    $timestamp = time();

    $string1 = "jsapi_ticket={$jsapi_ticket}&noncestr={$noncestr}&timestamp={$timestamp}&url={$url}";

    $signature = sha1($string1);   

    $signPackage = array(       

        'appId'     => $appId,       

        'nonceStr'  => $noncestr,       

        'timestamp' => $timestamp,       

        'signature' => $signature,
        
        'url' => $url,
        
        'ticket' => $jsapi_ticket

    );   

    //var_dump($signPackage);



?>