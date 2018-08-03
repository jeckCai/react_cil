'use strict';

var serverApiRoot = '/ehop/';
var request_url_image = "";

var hostname = window.location.hostname,
    port = window.location.port,
    protocol = window.location.protocol + '//';

switch (hostname) {
    case 'localhost':
    case '127.0.0.1':
    case '192.168.1.111':
    case '192.168.1.187':
        //serverApiRoot = protocol + hostname + ':' + (port || '80') + '/dev/';
        serverApiRoot = 'http://test.lovelawu.com:12680/member-api/';
        request_url_image = 'http://test.lovelawu.com:12680/images/';
        break;
    case 'test.lovelawu.com':
        serverApiRoot = 'http://test.lovelawu.com:12680/member-api/';
        request_url_image = 'http://test.lovelawu.com:12680/images/';
        break;
    case 'pre.lovelawu.com':
        serverApiRoot = 'http://pre.lovelawu.com/member-api/';
        request_url_image = 'http://file.edian.shop/files/';
        break;
    case 'member.edian.shop':
        serverApiRoot = 'https://api.edian.shop/member-api/';
        request_url_image = 'http://file.edian.shop/files/';
        break;
    default:
        serverApiRoot = protocol + hostname + '/';

}


module.exports = {
    serverApiRoot: serverApiRoot,
    request_url_image: request_url_image,
}