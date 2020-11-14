void
function($) {
    /**
     *
     * @author: 一只柯楠
     *
     * @param    {Object}    options;
     * @config   {zepto}     options.$el            //外围容器 选择器或者element
     * @config     {array}     options.pages            //填充每一页的内容 Element || string || function
     * @config     {Number}    options.animTime        //动画时间，默认为500
     * @config     {Function}  options.beforechange    //动画完成之前回调函数
     * @config     {Function}  options.afterchange    //动画完成之后回调函数
     * @isFollow {Boolean}    obtions.isFollow        //是否跟随,默认false
     * @isFollow {Boolean}    obtions.loop            //自动循环的时间/ms
     *
     *
     */
    "use strict"

    var initializing = false,
        superTest = /conan/.test(function() {
            conan;
        }) ? /\b_super\b/ : /.*/;
    var Class = function() {};

    Class.extend = function(prop) {
        //_super和prototype:new建立一个新的对象，作为新类的prototype，不能直接在上面添加方法，会影响其他使用extend方法返回的类
        var _super = this.prototype;
        //设为true就不再执行init方法
        initializing = true;
        var prototype = new this();
        initializing = false;
        //将传进来的prop对象里的方法拷贝到prototype上面去
        for (var name in prop) {
            prototype[name] = (typeof prop[name] === 'function' && typeof _super[name] === 'function' && superTest.test(prop[name])) ? (function(name, fn) {
                //这一步为了实现，prop里面的某个方法（如prop.init）和原型prototype方法中的方法冲突时，可以在方法中调用【this._super()】，这里将this._super方法替换成原型中的这个方法(prototype.init).
                return function() {
                    var temp = this._super;
                    this._super = _super[name];
                    var ret = fn.apply(this, arguments);
                    this._super = temp;
                    return ret;
                }
            })(name, prop[name]) : prop[name];
        }

        function Class() {
            //构造函数中默认调用this.init方法
            if (!initializing && this.init) {
                this.init.apply(this, arguments);
            }
        }

        //让将要返回的类继承prototype
        Class.prototype = prototype;
        //将类的构造函数设为Class
        Class.constructor = Class;
        //将类添加extend方法，方便继续继承
        Class.extend = Class.extend;
        //返回构造函数
        return Class;
    }
    //默认参数
    var defaultData = {
        isFollow: false,
        animTime: 500,
        curIndex: 0, //当前索引
        _wrapLeftIndex: 0, //是外围动画节点的移动单位距离
        loop: 0,
        loopDir: 1,
        pages: [],
        scaleX: 1,
        overlap: 0,
        lazyLoad: false,
        scale: 1,
        opacity: 1,
        rotateY: 0,
        beforechange: function() {},
        afterchange: function() {}
    },
        $doc = $(document),
        TouchScroll = Class.extend({
            //顾名思义
            init: function(options) {
                this.$el = $(options.$el);
                this.options = $.extend({}, defaultData, options);
                this.options._lazyLoad = !this.options.loop && this.options.lazyLoad;
                this._wrapLeftIndex = this.options._wrapLeftIndex;
                this.curIndex = this.options.curIndex;
                this._beforechange(this.curIndex);
                this._initNodes();
                this._afterchange(this.curIndex);
                var self = this,
                    loop = self.options.loop;
                self.touchEnabled = true;
                this.options.isFollow ? this.initTouchFollow() : this.initTouch();
                var /*t=0,tm,*/ _resizeListener, _bodyEventListener;
                this.$container[0].addEventListener('webkitTransitionEnd', self, false);
                this._resizeListener = _resizeListener = this.delay(function(e) {
                    //当隐藏时，不执行;
                    if (!self.$el[0].offsetHeight) return;
                    setTimeout(function() {
                        self.refreshPos();
                    }, 600)
                    if (loop)
                        self.startAutoLoop()
                }, 300);
                addEventListener('onorientationchange' in window ?
                    'orientationchange' : 'resize', _resizeListener);

                if (this.options.loop) {
                    var dirfoo = self.options.loopDir < 0 ? 'toLeft' : 'toRight',
                        timeoutid, touchEv = this.touchEv;
                    this._bodyEventListener = _bodyEventListener = function(e) {
                        self[(touchEv.START_EV === e.type ? 'stop' : 'start') + 'AutoLoop']();
                    }
                    //$doc.on(touchEv.START_EV + ' ' + touchEv.END_EV, _bodyEventListener)
                   // self.$el.on(touchEv.START_EV + ' ' + touchEv.END_EV, _bodyEventListener)
                    self.stopAutoLoop = function() {
                       
                        if (timeoutid) {
                            clearTimeout(timeoutid);
                            timeoutid = null;
                        }
                        return this;
                    };
                    self.startAutoLoop = function(time) {
                        self.stopAutoLoop();
                        timeoutid = setTimeout(function() {
                            timeoutid = null;
                            // //当隐藏时，不执行;
                            // if (self.$el[0].offsetHeight)
                                self[dirfoo]();
                        }, time || self.options.loop)
                        return this;
                    };
                    self.startAutoLoop(self.options.loop + 2000);
                }
                return this;
            },

            _afterchange: function() {
                this.options.afterchange.apply(this, arguments);
            },
            _beforechange: function() {
                this.options.beforechange.apply(this, arguments);
            },

            _initNodes: function() {
                var i = 0,
                    nodes,
                    length, left,
                    contentWidth = this._contentWidth = this.options.width || this.$el[0].clientWidth || window.innerWidth,
                    self = this,
                    reg = /\{content\}/g,
                    lazyLoad = self.options._lazyLoad,
                    curIndex = self.curIndex,
                    html = this.$el.html();
                if (!html.trim()) {
                    for (var num = 0; num < this.options.pages.length; num++) {
                        html += '<div><div>{content}</div></div>';
                    }
                }
                html = html.replace(reg, function($a) {
                    return (!lazyLoad || i === curIndex ? self.getPage(i++) : '');
                });
                this.$el.html('<div  style="display: -webkit-box;-webkit-transform: translate3d(' + curIndex + 'px, 0px, 0px);-webkit-user-select: none;-webkit-transition: -webkit-transform ' + this.options.animTime + 'ms cubic-bezier(0, 0, 0.25, 1)">' +
                    html + '</div>');
                this.$container = this.$el.children();
                nodes = this.nodes = this.$container.children();
                this.maxIndex = (length = this.nodesLength = nodes.length) - 1;

                var bestDest = Math.ceil(length / 2);
                var nodesAry = self._nodes = [];
                var unitWidth = this.unitWidth = contentWidth - contentWidth * self.options.overlap;

                nodes.forEach(function(node, index) {
                    left = index < bestDest ? index : -(length - index);
                    nodesAry.push({
                        node: node,
                        left: left,
                        index: index
                    });
                    var zindex = index === curIndex ? '3' : '0';
                    var rotate = index === curIndex ? '0' : index < bestDest ? -self.options.rotateY : self.options.rotateY;
                    var scale = index === curIndex ? '1' : self.options.scale;
                    var opacity = index === curIndex ? '1' : self.options.opacity;

                    //;;
                    //node.style.cssText += '-webkit-transform:  translate3d(' + transformX + 'px, 0px, 0px);position:relative;z-index:'+zindex;
                    // node.style.cssText += '-webkit-transform: rotateY(' + rotate + 'deg);left:' + transformX + 'px;position:relative;z-index:' + zindex;
                    node.style.cssText += '-webkit-perspective: 200px;-webkit-transform: translate(-' + (index) + '00%, 0) translate3d(' + left * unitWidth + 'px, 0px, 0px);position: relative;z-index:' + zindex;
                    node.firstElementChild.style.webkitTransform = 'rotateY(' + rotate + 'deg) scale(' + scale + ')';
                    node.firstElementChild.style.webkitTransition = '-webkit-transform ' + self.options.animTime + 'ms cubic-bezier(0, 0, 0.25, 1)';
                    node.firstElementChild.style.opacity = opacity;
                });

                nodesAry.sort(function(a, b) {
                    return a.left - b.left;
                });
                //转到对应页
                //           this.move(curIndex, 0);
                return this;
            },

            //设置cotainer和nodes的位置,无动画
            refreshPos: function() {
                var contentWidth = this._contentWidth = this.$el[0].clientWidth,
                    self = this;
                var unitWidth = this.unitWidth = contentWidth - contentWidth * this.options.overlap;
                this.setTransleft(this.$container[0], this._wrapLeftIndex * unitWidth)
                this._nodes.forEach(function(val, index) {
                    self.setNodeLeft(val.node, val.left * unitWidth);
                });
                return this;

            },
            setTransleft: function(ele, left) {
                var style = ele.style;
                style.webkitTransform = "translate3d(" + left + "px,0px,0px)";
            },
            setNodeLeft: function(ele, left) {
                var style = ele.style;
                //style.webkitTransform = 'translate3d('+left+'px; 0,0)';
                //style.webkitTransform = "translate3d("+left+"px,0px,0px)";
                // style.left = left + "px";
                style.webkitTransform = style.webkitTransform.replace(/translate3d\(([-\.\d]+)px/g, 'translate3d\(' +
                    left + 'px');
                return this;
            },
            /*
             * 重新排列数组，重新设置nodes位置
             */
            _setNodesTranslate: function(dir) {
                var into,
                    out,
                    bestLeft,
                    nodes = this._nodes,
                    node,
                    contentWidth = this._contentWidth,
                    maxIndex = this.nodesLength - 1,
                    curIndex = this.curIndex,
                    rotate,
                    curpage;
                if (dir == 0)
                    return;
                if (dir < 0) {
                    into = 'unshift';
                    out = 'pop';
                    bestLeft = nodes[0].left - 1;
                    rotate = this.options.rotateY
                } else {
                    into = 'push';
                    out = 'shift';
                    bestLeft = nodes[maxIndex].left + 1;
                    rotate = -this.options.rotateY
                }
                node = nodes[out]();
                node.left = bestLeft;
                nodes[into](node);
                this.setNodeLeft(node.node, bestLeft * this.unitWidth);
                var scale = this.options.scale;
                node.node.firstElementChild.style.webkitTransform = 'rotateY(' + rotate + 'deg) scale(' + scale + ')';
                return this;
            },

            toLeft: function() {
                return this.move(this.curIndex - 1);
            },

            toRight: function() {
                return this.move(this.curIndex + 1);
            },

            toCurrent: function() {
                return this.move(this.curIndex);
            },

            getPage: function(index) {
                var page = this.options.pages[index];
                return $.isFunction(page) ? page() : page instanceof Element ? page.outerHTML : page;
            },
            handleEvent: function(e) {
                if (e.type === 'webkitTransitionEnd') {
                    this._afterchange(this.curIndex);
                    this.touchEnabled = true;
                    if (this.options.loop) {
                        this.startAutoLoop();
                    }
                    this.endId && clearTimeout(this.endId);
                    this.endId = undefined;
                }
            },

            move: function(index, anim) {
                var left = this._wrapLeftIndex = this._wrapLeftIndex + (this.curIndex - index),
                    res, curIndex,
                    curIndex = index < 0 ? this.maxIndex : index > this.maxIndex ? 0 : index;
                var len = this.curIndex - index,
                    dir = len > 0 ? -1 : 1,
                    self = this;
                var curpage;
                //有改变
                if (len) {
                    curpage = this.nodes[curIndex];
                    if (this.options._lazyLoad) {
                        !curpage.firstElementChild.firstElementChild && (curpage.innerHTML = this.getPage(curIndex));
                    }
                    curpage.firstElementChild.style.webkitTransform = 'rotateY(0deg) scale(1)';
                    curpage.firstElementChild.style.opacity = '1';
                    var rotate = dir < 0 ? -self.options.rotateY : self.options.rotateY;
                    var scale = this.options.scale;
                    var prevousChild = this.nodes[this.curIndex].firstElementChild;
                    prevousChild.style.webkitTransform = 'rotateY(' + rotate + 'deg) scale(' + scale + ')';
                    prevousChild.style.opacity = this.options.opacity;
                    this.curIndex = curIndex;
                    this._nodes.forEach(function(val) {
                        if (val.index === curIndex) {
                            val.node.style.zIndex = 3;
                        } else {
                            val.node.style.zIndex = 0;
                        }
                    });
                    this._beforechange(curIndex);
                }
                while (len) {
                    len += dir;
                    this._setNodesTranslate(dir);
                }
                this.setAnimTime(anim)
                setTimeout(function() {
                    self.setTransleft(self.$container[0], left * self.unitWidth)
                }, 0);
                return this;
            },

            setAnimTime: function(anim) {
                anim = anim === undefined ? this.options.animTime : anim;
                this.$container.css('-webkit-transition', '-webkit-transform ' + anim + 'ms cubic-bezier(0, 0, 0.25, 1)');
                return this;
            },
            /*
             *fn= delay(function(){}, 250);
             */
            delay: function(run, time) {
                var _timer, _lock;
                var foo = function() {
                    clearTimeout(_timer);
                    if (_lock) {
                        //锁定时进入，延时time来执行foo
                        _timer = setTimeout(foo, time);
                    } else {
                        //首次直接执行，并且锁定time时间
                        _lock = true;
                        run();
                        setTimeout(function() {
                            _lock = false;
                        }, time);
                    }
                }
                return foo;
            },

            //一看就懂,虽然写了mosedown,不过并没有兼容鼠标事件，需要开启chrome调试器中点选EMULATE TOUCH EVENTS
            touchEv: (function() {
                var isTouchPad = (/hp-tablet/gi).test(navigator.appVersion),
                    hasTouch = 'ontouchstart' in window && !isTouchPad;
                return {
                    hasTouch: hasTouch,
                    START_EV: hasTouch ? 'touchstart' : 'mousedown',
                    MOVE_EV: hasTouch ? 'touchmove' : 'mousemove',
                    END_EV: hasTouch ? 'touchend' : 'mouseup'
                }
            })(),
            //不跟随手指动画注册
            initTouch: function() {
                var now = null,
                    touch = {},
                    self = this,
                    timeout,
                    touchEv = this.touchEv;
                this.$el.on(touchEv.START_EV, function(e) {
                    if (!self.touchEnabled)
                        return;

                    if (!e.touches || e.touches.length !== 1)
                        return;
                    touch.x1 = e.touches[0].clientX;
                    touch.y1 = e.touches[0].clientY;


                    timeout = setTimeout(function() {
                        timeout = null;
                    }, 800);
                }).on(touchEv.MOVE_EV, function(e) {

                    if (!self.touchEnabled || !e.touches)
                        return;
                    if (timeout) {
                        touch.x2 = e.touches[0].clientX;
                        touch.y2 = e.touches[0].clientY;
                        dir = self.swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2);
                        if (dir == 'Left' || dir == 'Right')
                            e.preventDefault();
                    }
                })
                self._touchEndListener = function(e) {
                    if (!self.touchEnabled)
                        return;
                    if (timeout && touch.x2 && Math.abs(touch.x1 - touch.x2) > 5) {
                        self.touchEnabled = false;
                        if (dir == 'Left') {
                            self.toRight();
                        } else if (dir == 'Right') {
                            self.toLeft();
                        }
                    };
                    touch = {};
                };
                $doc.on(touchEv.END_EV, self._touchEndListener);
                return this;
            },
            //跟随手指动画注册
            initTouchFollow: function() {
                var touchEv = this.touchEv,
                    self = this,
                    scrolling = null,
                    startX = 0,
                    startY = 0,
                    moveX = 0,
                    moveY = 0,
                    baseX = 0,
                    distX,
                    newX,
                    dir = 0,
                    currentLeft = 0,
                    container = this.$container[0],
                    transX;

                var curpage;
                var unitWidth;
                var rotateY;
                var opacity;
                var scale;
                var goalpage;
                var moveRead;
                var webkitTransition = '-webkit-transform ' + self.options.animTime + 'ms cubic-bezier(0, 0, 0.25, 1)';
                var onBreakpoint = this.options.onBreakpoint;
                unitWidth = self.unitWidth;
                rotateY = self.options.rotateY;
                opacity = self.options.opacity;
                scale = self.options.scale;

                this.$el.on(touchEv.START_EV, function(e) {
                    if (!e.touches || !self.touchEnabled && e.touches.length != 1)
                        return;
                    if (!touchEv.hasTouch)
                        e.preventDefault();
                    self.setAnimTime(0);
                    scrolling = true;
                    moveRead = false;
                    startX = e.touches[0].clientX;
                    startY = e.touches[0].clientY;
                    baseX = startX;
                    newX = self._wrapLeftIndex * (self._contentWidth - self._contentWidth * self.options.overlap);
                    dir = 0;
                    curpage = self.nodes[self.curIndex].firstElementChild;
                    curpage.style.webkitTransition = 'none';

                }).on(touchEv.MOVE_EV, function(e) {
                    if (!e.touches || !scrolling || !self.touchEnabled)
                        return;
                    var moveX = e.touches[0].clientX,
                        moveY = e.touches[0].clientY;
                    if (moveRead) {
                        distX = moveX - baseX;
                        self.setTransleft(container, newX += distX);
                        if (self.options.overlap > 0) {
                            var rate = Math.min(Math.abs(moveX - startX) / unitWidth, 1);
                            var rotate = rotateY * rate;
                            var opa = 1 - (1 - opacity) * rate;
                            var sca = 1 - (1 - scale) * rate;
                            var crotate = baseX - startX > 0 ? -rotate : rotate;
                            curpage.style.webkitTransform = 'rotateY(' + (crotate) + 'deg) scale(' + sca + ')';
                            curpage.style.opacity = opa;

                            var gotate = rotateY - rotate;
                            gotate = baseX - startX < 0 ? -gotate : gotate;
                            var goalIndex = baseX - startX >= 0 ? self.curIndex - 1 : self.curIndex + 1;
                            goalIndex = goalIndex === -1 ? self.maxIndex : goalIndex > self.maxIndex ? 0 : goalIndex;
                            goalpage = self.nodes[goalIndex].firstElementChild;
                            opa = opacity + (1 - opacity) * rate;
                            sca = scale + (1 - scale) * rate;
                            goalpage.style.webkitTransition = 'none';
                            goalpage.style.webkitTransform = 'rotateY(' + (gotate) + 'deg) scale(' + sca + ')';
                            goalpage.style.opacity = opa;

                            onBreakpoint && onBreakpoint(curpage.parentNode, goalpage.parentNode, rate);
                            if (rate > .5) {
                                curpage.parentNode.style.zIndex = 2;
                                goalpage.parentNode.style.zIndex = 3;
                            } else {
                                curpage.parentNode.style.zIndex = 3;
                                goalpage.parentNode.style.zIndex = 0;
                            }
                        }
                        self.touchendTimeID && clearTimeout(self.touchendTimeID);
                        self.touchendTimeID = setTimeout(function() {
                            self._touchEndListener();
                        }, 300)
                        dir = distX > 0 ? 1 : -1;
                        baseX = moveX;
                    } else {
                        var changeX = Math.abs(moveX - startX),
                            changeY = Math.abs(moveY - startY);
                        if ((changeX / changeY) > 1) {
                            e.preventDefault();
                            e.stopPropagation();
                            moveY = null;
                            moveRead = true;
                        } else if (changeY > 5) {
                            scrolling = false;
                            moveY = null;
                        }
                    };
                });
                self._touchEndListener = function(e) {
                    if (!scrolling || !self.touchEnabled)
                        return;
                    if (goalpage) {
                        goalpage.style.webkitTransition = webkitTransition;
                        goalpage.parentNode.style.zIndex = 0
                    }
                    if (curpage) {
                        curpage.parentNode.style.zIndex = 1
                        curpage.style.webkitTransition = webkitTransition;
                    }
                    self.touchEnabled = false;
                    scrolling = false;
                    transX = baseX - startX;

                    if (transX > 50) {
                        self.toLeft(null, 300);
                    } else if (transX < -50) {
                        self.toRight(null, 300);
                    } else {
                        self.toCurrent(100);
                        self.touchEnabled = true;
                    }
                    if (transX > 50 || transX < -50) {
                        self.endId = setTimeout(function() {
                            self.handleEvent({
                                type: 'webkitTransitionEnd'
                            })
                        }, 550);
                    }
                    self.touchendTimeID && clearTimeout(self.touchendTimeID);
                    self.touchendTimeID = undefined;
                }
                $doc.on(touchEv.END_EV, self._touchEndListener)
                return this;
            },

            swipeDirection: function(x1, x2, y1, y2) {
                var xDelta = Math.abs(x1 - x2),
                    yDelta = Math.abs(y1 - y2)
                    return xDelta >= yDelta ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
            },
            //释放内存
            destory: function(remove) {
                this.stopAutoLoop();
                removeEventListener('onorientationchange' in window ?
                    'orientationchange' : 'resize', this._resizeListener);
                this.$container[0].removeEventListener('', this, false);
                this.$el.off();
                remove && this.$el.empty();

                $doc.off(this.touchEv.START_EV + ' ' + this.touchEv.END_EV, this._bodyEventListener)
                $doc.off(this.touchEv.END_EV, this._touchEndListener)
                this.__proto__ = null;
                for (var i in this) {
                    delete this[i];
                }
            }

        });


    //添加到Zepto
    $.fn.superSlider = function(options) {
        options.$el = this;
        var instance = new TouchScroll(options);
        return instance;
    };

}(Zepto);
