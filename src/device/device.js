//识别设备
function _discernDevice() {
    var agent = navigator.userAgent.toLowerCase();
    var device = {};
    if (agent.match(/MicroMessenger/i) == "micromessenger") {
        device.app = 'weixin'; //在微信中打开
    } else if (agent.match(/QQ\//i) == "qq/") {
        device.app = 'qq'; //在QQ打开
    } else if (agent.match(/WeiBo/i) == "weibo") {
        device.app = 'weibo'; //在新浪微博客户端打开
    } else if(agent.match(/x10/i)=='x10'){
        device.app = 'x10';  //特定的平板
    }

    if (agent.indexOf('android') != -1) {
        device.platform = 'Android';
    } else if (agent.indexOf('iphone') != -1) {
        device.platform = 'iOS';
    } else if(agent.indexOf('x10') != -1){
        device.platform ='x10';
    }

    return device;
}
function _funsetTime(start,end){
    
    var start = new Date(Number(start));
    var end = new Date(Number(end));
    var year = start.getFullYear();
    var month =_checkNum(start.getMonth()+1);
    var endMonth =_checkNum(end.getMonth()+1);
    var day = _checkNum(start.getDate());
    var endDay = end.getDate();
    var startHour = start.getHours();
    var startMinutes = _checkNum(start.getMinutes());
    var endHour = end.getHours();
    var endMinutes = _checkNum(end.getMinutes());
    return month + '.' + day + ' ' +startHour +':'+startMinutes+' -'+endMonth+ '.' + endDay + ' ' +endHour+':'+endMinutes;
}
function _funAllTime(start,end){
    var start = new Date(Number(start));
    var end = new Date(Number(end));
    var startyear = start.getFullYear();
    var startmonth =start.getMonth()+1;
    var startday = start.getDate();
    var startHour = start.getHours();
    var endyear = end.getFullYear();
    var endmonth = end.getMonth()+1;
    var endday = end.getDate();
    var startMinutes = _checkNum(start.getMinutes());
    var endHour = end.getHours();
    var endMinutes = _checkNum(end.getMinutes());
    return startyear + '.' + startmonth + '.' + startday + ' ' +startHour +':'+startMinutes+' - '+endyear+'.'+endmonth+'.'+endday+' '+endHour+':'+endMinutes;
}
function _funsetStartTime(start){
    var start = new Date(Number(start));
   
    var startyear = start.getFullYear();
    var startmonth =start.getMonth()+1;
    var startday = start.getDate();
    var startHour = start.getHours();
    var startMinutes = _checkNum(start.getMinutes());
    return startyear + '.' + startmonth + '.' + startday + ' ' +startHour +':'+startMinutes;
}
function _maxTimeorminTime(start,end){
    var t,s = (Number(end) - Number(start))/1000;
    if(s > -1){
        hour = Math.floor(s/3600);
        min = Math.floor(s/60) % 60;
        sec = s % 60;
        day = parseInt(hour / 24);
        if (day > 0) {
            hour = hour - 24 * day;
            t = day + "day " + hour + ":";
            }
        else t = hour + ":";   
        if(min < 10){t += "0";}
            t += min + ":";
        if(sec < 10){t += "0";}
            t += sec;
    }
    return t;
}
function _Transformation(_str){
    var re = /\n/ig;
    if(_str){
        return _str.replace(re,'<br>')
    }
    
}
function _getVersion(){
    var mete = document.getElementsByTagName('meta'),text='';
    for(var i =0 ; i<=mete.length;i++){
        if(mete[i].getAttribute('name')=='dachen-version'){
            return text= mete[i].getAttribute('content')
        }
    }
}
function _checkNum(i){
    if(i < 10){
        i= '0'+i;
    }
    return i;
}
function _getStorage(_str){
    if (!_str) return;

    var _storage = localStorage.getItem(_str);
    if (_storage) {
        _storage = JSON.parse(_storage);
    } else {
        _storage = null;
    }
    return _storage;
}

function _setStrorage(_key,_str){
    if(!_str) return;
   
    localStorage.setItem(_key,_str);
}

function _trim(_str){
    let result;
    result = _str.replace(/\s/g,'');
    return result;
}




module.exports = {
    clientHeight: document.body.clientHeight,
    clientWidth: document.body.clientWidth,
    discernDevice: _discernDevice,
    setTime:_funsetTime,
    funsetStartTime:_funsetStartTime,
    setHour:_maxTimeorminTime,
    setAllTime:_funAllTime,
    transformation:_Transformation,
    getVersion:_getVersion,
    getStorage:_getStorage,
    setStorage:_setStrorage,
    trim:_trim
}
  