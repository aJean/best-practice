{% extends 'wiseik:page/layout.tpl' %}
{%block meta %}
    <meta name="Description" content="百度识图依靠先进图像识别技术，带你领略身边物品的奥秘。识图一下，发现更多精彩！">
{% endblock %}
{%block title %}百度识图，“鉴”你所见{% endblock %}
    <script type="text/javascript">
        var imgUrl = [
            '//img6.bdstatic.com/img/image/public/011493346833.jpg',
            '//img6.bdstatic.com/img/image/public/021493346833.jpg',
            '//img6.bdstatic.com/img/image/public/04_021493346833.jpg'
        ];

        preloadimages(imgUrl)
        function preloadimages(arr){
            var newimages=[]
            var arr=(typeof arr!="object")? [arr] : arr  //确保参数总是数组
            for (var i=0; i<arr.length; i++){
                newimages[i]=new Image()
                newimages[i].src=arr[i]
            }
        }
    </script>
{% block vars %}
    {% widget "wiseik:widget/vars/homeVar.tpl" %}
    <script>
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?59d58284d6af5fc98c45116919479b66";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
        })();
    </script>
{% endblock %}

{% block content %}
    <main id="wrapper">
        {% widget "wiseik:widget/container/home/homeView.tpl" %}
        {% widget "wiseik:widget/container/home/goodCase.tpl" %}
    </main>
{% endblock %}
