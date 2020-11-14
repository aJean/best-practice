/**
 * @file 案例展示数据接口
 * @param {number} index 随机取一个案例
 */
'use strict';

export default function getCase(index) {
    let data = [{
        url: '/wiseik/p_result?guess=1&queryImageUrl=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2FeW%3D400%2Fsign%3D9614eb6342fbfbedce333e7b48c0f636%2F0b7b02087bf40ad1ae62bdbf5e2c11dfa8ecceec.jpg&querySign=4006658320%2C4156253191&simid=20131210%2C18440542010474362011&fr=duturesultcam&uptype=upload_wise',
        img: '//img6.bdstatic.com/img/image/public/pic7.png'
    },{
        url: '/wiseik/p_result?guess=1&word=angelababy&queryImageUrl=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2FeW%253D400%2Fsign%3Da39864b8bd99a901295f53322da5087b%2Feaf81a4c510fd9f96b82edc5202dd42a2934a481.jpg&querySign=67523867,3133740685',
        img: '//img2.bdstatic.com/static/wisedutu/img/pic1_4b060b5.jpg'
    }, {
        url: '/wiseik/p_result?guess=1&word=包包&fr=duturesultcam&queryImageUrl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2FeW%253D400%2Fsign%3D4d86b56f3f87e950507dfb6820085243%2Fa6efce1b9d16fdfa54d77c42b18f8c5495ee7be7.jpg&querySign=2214473668,817613370&simid=20131210,3511622687136821188',
        img: '//img0.bdstatic.com/static/wisedutu/img/pic2_c6e6f49.jpg'
    }, {
        url: '/wiseik/p_result?guess=1&word=马卡龙&fr=duturesultcam&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2FeW%253D400%2Fsign%3Dd3c52882add3fd1f2463aa3e007e241f%2Fd50735fae6cd7b89cf1f812f0a2442a7d9330e2e.jpg&querySign=4168441958,3110425083&simid=20131210,6103296003462101951',
        img: '//img2.bdstatic.com/static/wisedutu/img/pic3_8b7aa0c.jpg'
    }, {
        url: '/wiseik/p_result?queryImageUrl=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D439931303%2C1742124082%26fm%3D21%26gp%3D0.jpg&querySign=439931303%2C1742124082&word=%E5%A5%A5%E8%BF%AA&faceInfo=&refer=http%3A%2F%2Fimage.baidu.com%2Fi%3Ftn%3Dwiseala%26ie%3Dutf8%26from%3Dindex%26fmpage%3Dsearch%26pos%3Dtop%26active%3D1%26word%3D%25E5%25A5%25A5%25E8%25BF%25AA%23!searchDisp%2F66%2F0%2Fippr_z2C%2524qAzdH3FAzdH3Ft4w2jd_z%2526e3B8mbbb_z%2526e3Bv54AzdH3FrtvLtkAzdH3Fc0ddlAzdH3Fc0d9nAzdH3Fda8a888m8c9naa8a_c_z%2526e3B3r2%23%23ippr_z2C%2524qAzdH3FAzdH3Frtv_z%2526e3B8mbbb_z%2526e3Bv54AzdH3Fc0ddlAzdH3Fc0d9nAzdH3Fkt2AzdH3Fc0d9n_0allc_c9n0b_z%2526e3Bip4s&os=1408257977%2C1264256042&srctype=0&starttime=1434423677923',
        img: '//img2.bdstatic.com/static/wisedutu/img/pic4_cba66c9.jpg'
    }, {
        url: '/wiseik/p_result?guess=1&word=东溪古镇&fr=duturesultcam&queryImageUrl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2FeW%253D400%2Fsign%3Dcd3f1e7373c6a7efab4ca022cdcaae51%2Fa686c9177f3e6709e313fe533ec79f3df8dc550e.jpg&querySign=2848693034,507570640&simid=20131210,2179999302058482474',
        img: '//img1.bdstatic.com/static/wisedutu/img/pic5_a45ae44.jpg'
    }, {
        url: '/wiseik/p_result?queryImageUrl=http%3A%2F%2Fd01.res.meilishuo.net%2Fpic%2F_o%2Ffe%2F1c%2F7eb0eaafbd2761d53bf639d66610_750_1125.jpeg&querySign=1623294056%2C222270378&fm=searchdetail&word=短裙&pos=drag',
        img: '//img0.bdstatic.com/static/wisedutu/img/pic6_05b03bc.jpg'
    }];

    return data[index] || data;
};
