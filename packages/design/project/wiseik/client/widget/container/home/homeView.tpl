<div class="bannerContent">
    <div class="bannerImg"></div>
    <div class="bannerDot"></div>
    <div class="appcamera" id="camera-btn"></div>
</div>
<div class="bannerBottom">
    <p class="line1"></p>
</div>
<div class="cameraIcon" id="cameraIcon">

</div>
<script src="//gss3.bdstatic.com/5foUcz3n1MgCo2Kml5_Y_D3/graph/static/resource/sdk/mobile.js"></script>
<script>
    // API 加载后调用
    BD_MMS.ready(function () {
        BD_MMS.initGraph({
            // 按钮元素ID,
            id: 'camera-btn',
            // 指定搜索垂类（只在手机百度下生效）
            // general(默认，通用) question(拍题) translate(翻译) barcode(扫一扫)
            type: 'general',
            // needReturn: true,
            // 统计参数，需要与sdk协商
            stat: {
                'srcp': 'homeBtn',
                'entrance': 'GRAPH_IMAGE',
                'image_source': 'GRAPH_IMAGE'
            }
        });
    });

    // API 加载后调用
    BD_MMS.ready(function () {
        BD_MMS.initGraph({
            // 按钮元素ID,
            id: 'cameraIcon',
            // 指定搜索垂类（只在手机百度下生效）
            // general(默认，通用) question(拍题) translate(翻译) barcode(扫一扫)
            type: 'general',
            // needReturn: true,
            // 统计参数，需要与sdk协商
            stat: {
                'srcp': 'homeBtn',
                'entrance': 'GRAPH_IMAGE',
                'image_source': 'GRAPH_IMAGE'
            }
        });
    });
</script>
{% script %}
    require.async('wiseik:widget/container/home/homeView.tsx', function(HomeView) {
        HomeView['default'].init();
    });
{% endscript %}
