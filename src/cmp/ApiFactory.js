'use strict';

var ServerRoot = require('./ServerRoot.js');
const MemberApi = ServerRoot.serverApiRoot;
module.exports = {
    storage: {
        get: function(key) {

            if (!key) return;

            var _storage = localStorage.getItem(key);
            if (_storage) {
                _storage = JSON.parse(_storage);
            } else {
                _storage = null;
            }
            return _storage;
        },
        set: function(key, storage) {
            if (!key) return;
            localStorage.setItem(key, JSON.stringify(storage));
            return this.get(key);
        },
        token: function(_token) {
            if (_token) {
                localStorage.setItem('materialToken', _token);
            }
            return localStorage.getItem('materialToken') || null;
        },
       
       
        
    },
    rich:{
        getRichPowerInfoRecord:MemberApi+'richAccount/getRichPowerInfoRecord', // 获取动力值TOP10
        getRichInfo:MemberApi + 'richAccount/getRichInfo', // 获取首页信息
        getPersonalRichAccountInfo:MemberApi+'richAccount/getPersonalRichAccountInfo',  //获取首页E转
        receiveDiamonds:MemberApi+'richAccount/receiveDiamonds', //领取E 
        getMyRichDiamondRecordInfo:MemberApi+'richAccount/getMyRichDiamondRecordInfo', //获取E转
        getPowerTasks:MemberApi +'richPowerTaskRecord/getPowerTasks', //获取任务列表
        getIdentityInfo:MemberApi +'richAccount/getIdentityInfo' //获取任务列表

    }
}
 