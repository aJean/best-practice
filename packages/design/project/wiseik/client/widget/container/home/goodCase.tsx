/**
 * @class Goodcase
 * @extends {React.Component}
 */

const data = [{
    imgUrl: __uri('/client/static/img/pic1.jpg'),
    width: '300',
    height: '200',
    title: '我真的不是“干脆面”！',
    imageUrl: 'http://a.hiphotos.baidu.com/image/eW%3D400/sign=6f8b3d45b299a901295f53322da50b7b/eaf81a4c510fd9f9a791b4382f2dd42a2934a4d9.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D6f8b3d45b299a901295f53322da50b7b%2Feaf81a4c510fd9f9a791b4382f2dd42a2934a4d9.jpg&querySign=2688090473%2C314434027&simid=20131210%2C6601252154726109451&fr=duturesultcam&uptype=homeImg&shituvs=78094f1ef18a2eba2dfda6618faa0579d256d5f1'
},{
    imgUrl: __uri('/client/static/img/pic2.jpg'),
    width: '300',
    height: '200',
    title: '你也想要我的小心心吗？',
    imageUrl: 'http://e.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=0fb1238ca164034f1da7ca029ff37831/7af40ad162d9f2d31366c9bea3ec8a136327cc68.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D0fb1238ca164034f1da7ca029ff37831%2F7af40ad162d9f2d31366c9bea3ec8a136327cc68.jpg&querySign=2661597139%2C1683228590&simid=20131210%2C14125503737766023746&fr=duturesultcam&uptype=homeImg&shituvs=f0610d4bc56a0e06f9b1f68bd6f8e65ff7ba459d'
},{
    imgUrl: __uri('/client/static/img/pic3.jpg'),
    width: '300',
    height: '200',
    title: '你可以说是很“豹笑”了',
    imageUrl: 'http://g.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=392dd54548a7d933adc2ec779d7bd013/9f2f070828381f30dfba62f8a3014c086f06f0c4.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D392dd54548a7d933adc2ec779d7bd013%2F9f2f070828381f30dfba62f8a3014c086f06f0c4.jpg&querySign=3723847788%2C1087697982&simid=20131210%2C12157784051323014507&fr=duturesultcam&uptype=homeImg&shituvs=52f6cb5e6bb408de3e50bed76ad35de553dad9db'
},{
    imgUrl: __uri('/client/static/img/pic4.jpg'),
    width: '300',
    height: '300',
    title: '满山的“五花肉”，走着走着就饿了',
    imageUrl: 'http://h.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=9b36979af1edab64661845c4c706aec3/03087bf40ad162d9cdea8b4d1bdfa9ec8a13cd5f.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D9b36979af1edab64661845c4c706aec3%2F03087bf40ad162d9cdea8b4d1bdfa9ec8a13cd5f.jpg&querySign=3928279083%2C1547417587&simid=0%2C0&fr=duturesultcam&uptype=homeImg&shituvs=2a4c94c8cce93281211a1561067626775ca1ed2d'
},{
    imgUrl: __uri('/client/static/img/pic5.jpg'),
    width: '300',
    height: '200',
    title: '喂，你的老婆…花掉了',
    imageUrl: 'http://d.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=cebc6de0b8b7d0a269a30c99fbdf7709/8cb1cb1349540923bedc622c9858d109b3de492e.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Dcebc6de0b8b7d0a269a30c99fbdf7709%2F8cb1cb1349540923bedc622c9858d109b3de492e.jpg&querySign=530948823%2C3263023518&simid=20131210%2C6806860481587080807&fr=duturesultcam&uptype=homeImg&shituvs=9fa76e9cbe654f021a8016e7308d9f58b7e4f42e'
},{
    imgUrl: __uri('/client/static/img/pic6.jpg'),
    width: '300',
    height: '210',
    title: '麻麻说了，大耳朵显脸小',
    imageUrl: 'http://e.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=7d8f44ad31c79f3d9d8bec348a91cc11/83025aafa40f4bfb4f5f9f06094f78f0f63618d0.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D7d8f44ad31c79f3d9d8bec348a91cc11%2F83025aafa40f4bfb4f5f9f06094f78f0f63618d0.jpg&querySign=2140194900%2C2744058923&simid=0%2C0&fr=duturesultcam&uptype=homeImg&shituvs=852c699130638ce9b451e881d984416d487b3787'
},{
    imgUrl: __uri('/client/static/img/pic7.jpg'),
    width: '300',
    height: '225',
    title: '再大的男孩，也不能抗拒这样的“玩具”',
    imageUrl: 'http://d.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=66e9e8a65bda81cb5c8c8bc96256d116/a8773912b31bb051339eb37a3c7adab44aede02e.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D66e9e8a65bda81cb5c8c8bc96256d116%2Fa8773912b31bb051339eb37a3c7adab44aede02e.jpg&querySign=1608864736%2C394941305&simid=20131210%2C8379374186360189406&fr=duturesultcam&uptype=homeImg&shituvs=22a1726d9e4aa68b7f4f30ada1b3a4b4b7a62662'
},{
    imgUrl: __uri('/client/static/img/pic8.jpg'),
    width: '300',
    height: '450',
    title: '好口怕，瓜子都差点吓掉了',
    imageUrl: 'http://b.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=0805908e801363270787ca37a1bfa1ec/37d3d539b6003af3235dd0323f2ac65c1138b6f8.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D0805908e801363270787ca37a1bfa1ec%2F37d3d539b6003af3235dd0323f2ac65c1138b6f8.jpg&querySign=1754495102%2C2926629740&simid=0%2C0&fr=duturesultcam&uptype=homeImg&shituvs=112ee171a40afba012a5d6ce18b0ace2928c8d59'
},{
    imgUrl: __uri('/client/static/img/pic9.jpg'),
    width: '300',
    height: '200',
    title: '小心，本神兽出没！',
    imageUrl: 'http://b.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=7f8c6e04da160924ce4faa1fe43734fa/8718367adab44aede702b7b6b91c8701a18bfb10.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D7f8c6e04da160924ce4faa1fe43734fa%2F8718367adab44aede702b7b6b91c8701a18bfb10.jpg&querySign=788178801%2C2274455182&simid=20131210%2C16714812300438099678&fr=duturesultcam&uptype=homeImg&shituvs=aaa5e7dc9f9c99ee278a966c2bcd3385c3bfbff6'
},{
    imgUrl: __uri('/client/static/img/pic10.jpg'),
    width: '300',
    height: '450',
    title: '淋雨就变“小透明”',
    imageUrl: 'http://d.hiphotos.baidu.com/image/%70%69%63/item/9e3df8dcd100baa1ce2cc55b4d10b912c9fc2ec9.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2F%2570%2569%2563%2Fitem%2F9e3df8dcd100baa1ce2cc55b4d10b912c9fc2ec9.jpg&querySign=3887168180%2C2465903563&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=6d30a06772c7a142f834155493c459658901471c'
},{
    imgUrl: __uri('/client/static/img/pic11.jpg'),
    width: '300',
    height: '300',
    title: '我是网红脸，爱笑爱自拍',
    imageUrl: 'http://c.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=1064419600d162d997846a1821efa8ec/2934349b033b5bb5db862fac3cd3d539b600bc0a.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D1064419600d162d997846a1821efa8ec%2F2934349b033b5bb5db862fac3cd3d539b600bc0a.jpg&querySign=1143988626%2C2422331241&simid=0%2C0&fr=duturesultcam&uptype=homeImg&shituvs=bcb5460530fc1b6d88d1449a990bb70903ec1afa'
},{
    imgUrl: __uri('/client/static/img/pic12.jpg'),
    width: '300',
    height: '230',
    title: '你见过石（pi）头（gu）里开的小黄花吗？',
    imageUrl: 'http://b.hiphotos.baidu.com/image/%65%57%3D%34%30%30/sign=aa3ebd44c5fc1e17efd584357aa0f703/a1ec08fa513d2697b079020f5ffbb2fb4316d83e.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Daa3ebd44c5fc1e17efd584357aa0f703%2Fa1ec08fa513d2697b079020f5ffbb2fb4316d83e.jpg&querySign=3204929206%2C1539299374&simid=0%2C0&fr=duturesultcam&uptype=homeImg&shituvs=fdaebf4923d3069da0179095b76a5a8e5ddf0125'
}];

export default {
    init: function () {
        var goodCaseHtml = [];
        this.$left = $('.goodCaseLeft');
        this.$right = $('.goodCaseRight');
        this.leftNum = 0;
        this.rightNum = 0;
        var winWidth = window.innerWidth / 2;
        var $leftHtml = '';
        var $rightHtml = '';

        for (var i = 0; i < data.length; i++) {
            var ratio = data[i].width / data[i].height;
            var height = (winWidth-21) / ratio - 0;
            var linkUrl = `https://graph.baidu.com/details/?carousel=0&entrance=GRAPH_IMAGE&image_source=GRAPH_IMAGE&srcp=homeImg&image=${data[i].imageUrl}`;
            var str = `<a href="${linkUrl}"><img src="${data[i].imgUrl}" width="100%" height="${height}" /><span>${data[i].title}</span></a>`;
            this.leftHeight = $('.goodCaseLeft').height();
            this.rightHeight = $('.goodCaseRight').height();

            if (this.leftHeight > this.rightHeight) {
                this.$right.append(str);
            } else {
                this.$left.append(str);
            }
        }
    }
};
