{% extends 'wiseik:page/layout.tpl' %}

{% block vars %}
    {% widget "wiseik:widget/vars/resultVar.tpl" %}
    <script>
        var img = new Image();
        img.src = '{{result.ui_common.speedUrl|raw}}&_=' + Date.now();
    </script>
{% endblock %}

{% block content %}
    <main id="wrapper">{{ssr|raw}}</main>
    {% script %}
        require.async('wiseik:widget/container/resultView/result.tsx', function(Result) {
            Result['default'].init();
        });
    {% endscript %}
{% endblock %}