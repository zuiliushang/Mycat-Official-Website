/*
create by xusihan
封装 http 请求
 */
(function (global,$) {
    'use strict';
    var statusCode = {
        401: function() {
            // TODO: 错误状态处理
        },
        403: function(){
            // TODO: 错误状态处理
        },
        404: function() {
            // TODO: 错误状态处理
        },
        500: function(){
            // TODO: 错误状态处理
        }
    };
    var request = function (options) {
        return $.ajax({
            url: options.url,
            data: options.data,
            headers: {

            },
            type: options.type || 'get',
            contentType: options.contentType || 'application/x-www-form-urlencoded',
            statusCode: statusCode,
            async: options.async || true,
            beforeSend: function() {
                // 显示加载的loading...
            },
            complete:function(){
                // 关闭loading...
            },
            success:function(data, textStatus, jqXHR){
                // 2xx~3xx
                options.successCallBack(data);
            },
            error: function(xhr,statusText,err){
                // 4xx~5xx
            }
        });
    };
    var $_ajax = {
        get: function(url,data,callback,extra){
            extra = {};
            extra.url = url;
            extra.data = data;
            extra.type='get';
            extra.successCallBack = callback;
            return request(extra);
        },
        post: function(url,data,callback,extra){
            extra = {};
            extra.url = url;
            extra.data = data;
            extra.type='post';
            extra.successCallBack = callback;
            return request(extra);
        },
        put: function(url,data,callback,extra){
            extra = {};
            extra.url = url;
            extra.data = data;
            extra.type='put';
            extra.successCallBack = callback;
            return request(extra);
        },
        delete: function(url,data,extra,callback){
            extra = {};
            extra.url = url;
            extra.data = data;
            extra.type='delete';
            extra.successCallBack = callback;
            return request(extra);
        }
    };
    global.$_ajax = $_ajax;
})(window,jQuery);
