import './msgbox.css'

(function() {
    window.msgbox = window.msgbox || {};

    var maskId = 'btMsgboxMaskDiv';
    var boxId = 'myMsgBoxId';

    var defaultOpts = {
        type: 'success',
        title: '操作成功！',
        timeout: 1500,
        callback: function() {}
    }

    window.msgbox._timer = null;

    window.msgbox.show = function(opts) {

        //设置参数值
        if (typeof(opts) != 'object') {
            opts = defaultOpts;
        }
        opts.type = opts.type ? opts.type : defaultOpts.type;
        opts.title = opts.title ? opts.title : defaultOpts.title;
        opts.timeout = opts.timeout ? opts.timeout : defaultOpts.timeout;
        opts.callback = opts.callback ? opts.callback : defaultOpts.callback;

        //别名
        var _s = window.msgbox;

        //dom的最大宽度和高度
        var _scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
        var _scrollHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

        //遮罩div
        var newMask = document.getElementById(maskId);
        if (newMask) {
            newMask.style.width = _scrollWidth + "px";
            newMask.style.height = _scrollHeight + "px";
            newMask.style.display = "block";
        } else {
            newMask = document.createElement("div");
            newMask.id = maskId;
            newMask.style.position = "absolute";
            newMask.style.zIndex = "9999";
            newMask.style.top = "0px";
            newMask.style.left = "0px";
            newMask.style.width = _scrollWidth + "px";
            newMask.style.height = _scrollHeight + "px";
            newMask.style.background = "#33393C";
            newMask.style.filter = "alpha(opacity=20)";
            newMask.style.opacity = "0.20";
            document.body.appendChild(newMask);
        }


        //消息主框
        var box = document.getElementById(boxId);
        if (!box) {
            box = document.createElement('div');
            box.className = 'msgbox_layer_wrap';
            box.id = boxId;
            document.body.appendChild(box);
        }
        box.style.display = "";

        //生成消息主框html
        var loading = '<span class="gtl_ico_loading"></span>';
        var typeClass = { success: 'succ', fail: 'fail', warn: 'warn', loading: 'clear' };
        var innerHtml = '<span class="msgbox_layer" style="z-index:10000;" id="mode_tips_v2">' +
            '<span class="gtl_ico_' + typeClass[opts.type] + '"></span>' + ((opts.type == 'loading' ? loading : '') + opts.title) + '<span class="gtl_end"></span>' +
            '</span>';
        box.innerHTML = innerHtml;

        //设置定时器自动关闭消息框
        _s._timer = setTimeout(function() {
            _s.hide(opts.callback)
        }, opts.timeout);

    };

    window.msgbox.hide = function(callback) {
        var _s = window.msgbox;
        clearTimeout(_s._timer);
        if (typeof callback == 'function') {
            callback();
        }
        var maskDom = document.getElementById(maskId);
        var boxDom = document.getElementById(boxId);
        if (maskDom) {
            maskDom.style.display = 'none';
        }
        if (boxDom) {
            boxDom.style.display = 'none';
        }
    };

})()