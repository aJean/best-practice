/**
 * @file zepto 扩展方法
 */

;(function ($) {
    $.support.windowOrientation = (typeof window.orientation == 'number' && typeof window.onorientationchange == 'function');

    $.support.screenOrientation = !!screen.orientation;

    var throttle = function (delay, fn, debounce_mode) {
        var last = 0,
            timeId;

        if (typeof fn !== 'function') {
            debounce_mode = fn;
            fn = delay;
            delay = 250;
        }

        function wrapper() {
            var that = this,
                period = Date.now() - last,
                args = arguments;

            function exec() {
                last = Date.now();
                fn.apply(that, args);
            };

            function clear() {
                timeId = undefined;
            };

            if (debounce_mode && !timeId) {
                // debounce模式 && 第一次调用
                exec();
            }

            timeId && clearTimeout(timeId);
            if (debounce_mode === undefined && period > delay) {
                // throttle, 执行到了delay时间
                exec();
            } else {
                // debounce, 如果是start就clearTimeout
                timeId = setTimeout(debounce_mode ? clear : exec, debounce_mode === undefined ? delay - period : delay);
            }
        };
        // for event bind | unbind
        wrapper._zid = fn._zid = fn._zid || $.proxy(fn)._zid;
        return wrapper;
    };

    /** detect orientation change */
    var getOrt = function () {
        return window.innerWidth / window.innerHeight;
    };
    var lastOrt = getOrt();
    var timer, maxTry;

    $(window).on($.support.windowOrientation ? 'orientationchange' : 'resize', throttle(function (e) {
        if (e.type == 'orientationchange') {
            return $(window).trigger('ortchange');
        }

        maxTry = 20;
        clearInterval(timer);
        timer = setInterval(function () {
            var curOrt = getOrt();
            if (lastOrt !== curOrt) {
                lastOrt = curOrt;
                clearInterval(timer);
                $(window).trigger('ortchange');
            } else if (--maxTry) { //最多尝试20次
                clearInterval(timer);
            }
        }, 50);
    }));

    $.extend($, {
        /**
         * 从 url 中获取参数
         * @param {String} key 需要的参数名
         */
        getUrlParams: function (key) {
            var reg = new RegExp('(\\?|#|&)' + key + '([^&#]*)(&|#&)');
            var match = location.href.match(reg);
            return !match ? '' : match[2];
        },

        /**
         * 加载图片
         * @param {String} url 图片地址
         * @param {Function} callback
         */
        loadImg: function (url, callback) {
            var img = new Image();

            img.onload = function () {
                callback && callback({
                    width: img.width,
                    height: img.height
                }, url);
            };
            img.src = url;
        },

        nextStep: function (fn, timeout, context) {
            return setTimeout(function () {
                fn.call(context);
            }, timeout);
        },

        /**
         * 滚动 pv 统计
         * @param {object} target
         * @param {object} opts 统计参数
         */
        scrollPv: function (target, opts) {
            var pageNum = target.pageNum || 0;
            var currentPage = Math.ceil(window.pageYOffset / window.innerHeight);

            if (currentPage > pageNum) {
                target.pageNum = currentPage;
                NsLog.sendLog({
                    etype: opts.etype,
                    pageno: 1,
                    mod: opts.mod,
                    page: opts.page
                });
            }
        }

    });

})(Zepto)
