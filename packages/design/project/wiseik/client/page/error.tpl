{# error 页面，同时测试 restful #}

{% extends 'wiseik:page/layout.tpl' %}

{% block vars %}
    <script>window.bd = {};</script>
    <style>
        .error {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            font-family: 'American Typewriter', 'TypewriterSerial', 'Courier New', Courier, Monaco, mono;
            text-align: center;
        }
        .error .logo {
            width: 200px;
            height: 200px;
            margin: 40px auto 20px;
            background: #f7f7f7 url(/client/static/img/shitu-error.png) no-repeat center center;
            background-size: contain;
        }
        .error p {
            margin-top: 20px;
        }

        .error strong {
            display: block;
            font-size: 40px;
        }

    </style>
{% endblock %}

{% block content %}
    <article class="error">
        <div class="logo"></div>
        <strong>404</strong>
        <p>当前页面不可用或是已经被转移</p>
    </article>
{% endblock %}
