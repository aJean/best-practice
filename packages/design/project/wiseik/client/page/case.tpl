{% extends 'wiseik:page/layout.tpl' %}

{% block vars %}
    {% widget "wiseik:widget/vars/vars.tpl" %}
{% endblock %}

{% block content %}
    {% widget "wiseik:widget/header/headerSub.tpl" %}
    {% widget "wiseik:widget/case/case.tpl" %}
{% endblock %}
