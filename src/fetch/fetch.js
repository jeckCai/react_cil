'use strict';
// hack 华为荣耀6 fetch Promise is not defined
require('es6-promise');
require('whatwg-fetch');
import {Toast} from 'antd-mobile';

function _objToParamUrl(obj) {
    // obj 转成 参数url
    var bodyStr = '';
    for (var key in obj) {
        if (bodyStr != '') {
            bodyStr += '&';
        }
        bodyStr += key + '=' + encodeURIComponent(obj[key]);
    }

    return bodyStr;
};

function _fetch(config, loading) {

    if (!config.url) {
        return console.warn('缺少请求地址url');
    }
    var bodyStr = _objToParamUrl(config.data);
    var headers = config.header || {};
    headers['platform'] =4;
    headers['platformVersion']=window.navigator.userAgent;
    headers['channel'] ='H5';
    headers['appVersion']=1.0;
    headers['authorization'] ='';
    if(localStorage.getItem('token')){
        headers['authorization'] = localStorage.getItem('token')
    }
    if(config.isJson){

        headers['Content-Type']= 'application/json;charset=utf-8';
        bodyStr = JSON.stringify(config.data)

    }else{
       
        headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    }
    
    var data = {
        method: config.type || 'POST',
        headers: headers,
        mode: "cors",
        body:bodyStr
    }
    //判断config.data是否有值
    var flag = false;
    for (var key in config.data) {
        flag = true;
        break;
    }
    if (!flag&&(config.type+'').toUpperCase()!='POST') {
        delete data.body;
    }
    
    Toast.loading('',10);
    var _fetch = fetch(config.url, data)
        .then(function(_response) {

            return _response.json();

        }).then(function(_rps) {
            Toast.hide();
            if (_rps && _rps.ret === 1000) {
               
                return _rps.model || true
            }
            
            if (_rps && _rps.msg) {
                Toast.fail(_rps.msg);
                return null;
            }

        }).catch(function(ex) {
            Toast.hide();
            console.log('接口出错', ex)
        });

    return _fetch;

};

module.exports = _fetch;
