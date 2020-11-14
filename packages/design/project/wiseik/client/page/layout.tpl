<!doctype html>
{% html lang="en" framework="wiseik:static/js/core.js" %}
    {% head %}
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,shrink-to-fit=no">
        <meta name="format-detection" content="telephone=no">
        <meta name="wap-font-scale" content="no">
        <meta name="description" content="baid shitu">
        <meta name="keywords" content="图片">
        {% block meta %}{% endblock %}
        <meta http-equiv="x-dns-prefetch-control" content="on">
        <link rel="dns-prefetch" href="{{ui_protocol}}://imgn0.bdstatic.com">
        <link rel="dns-prefetch" href="{{ui_protocol}}://imgn1.bdstatic.com">
        <link rel="dns-prefetch" href="{{ui_protocol}}://imgn2.bdstatic.com">
        <link rel="dns-prefetch" href="//gtb.baidu.com">
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu.svg">
        <title>{% block title %}百度图片搜索{% endblock %}</title>
        {% block vars %}{% endblock %}
        {% widget "wiseik:widget/vars/speed.tpl" %}
        {% require "wiseik:static/css/core.less" %}
    {% endhead %}

    {% body %}
        {% block content %}{% endblock %}
    {% endbody %}
{% endhtml %}
