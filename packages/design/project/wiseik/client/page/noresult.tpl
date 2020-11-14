{% extends 'wiseik:page/layout.tpl' %}

{% block vars %}
    {% widget "wiseik:widget/vars/vars.tpl" %}
{% endblock %}

{% block content %}
    {% widget "wiseik:widget/header/headerComponent.tpl" %}
    {% widget "wiseik:widget/old/card/info/simpleComponent.tpl" %}
    {% widget "wiseik:widget/old/feedback/feedback.tpl" %}
    {% widget "wiseik:widget/old/case/caseComponent.tpl" %}

    {% script %}
        // 无结果页面
        NsLog.pvLog({
            etype: 'pv',
            page: 'noresult',
            uptype: '{{ui_uptype}}'
        });
    {% endscript %}
{% endblock %}
