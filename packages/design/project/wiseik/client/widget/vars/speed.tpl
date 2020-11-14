<script>
    ~function () {
        'use strict';

        var data = {
            etype: 'speed',
            app: 'wiseshitu'
        };

        var serialize = function (data) {
            var query = '';

            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    query += '&' + key + '=' + data[key];
                }
            }

            return query.substring(1);
        };

        var speed = window.speed = {
            mark: function (key) {
                data[key] = Date.now();
            },

            setTime: function (key) {
                data[key] = Date.now() - data['domenter'];
            },

            setProp: function (name, val) {
                data[name] = val;
            },

            send: function () {
                var img = new Image();
                img.src = bd['ui_common'].protocol + '://imgstat.baidu.com/17.gif?' + serialize(data);
            }
        };

        var domenter = Date.now();
        speed.setProp('domenter', domenter);

        try {
            var timing = window.performance.timing;
            speed.setProp('whitescreen', domenter - timing.navigationStart);
        } catch (e) {}

        document.addEventListener('DOMContentLoaded', function () {
            speed.setTime('domload')
        });

        window.addEventListener('load', function () {
            speed.setTime('allload');
            data.page && speed.send();
        });
    }();
</script>
