import * as React from 'react';
import {IBaseProps, IBaseState} from '../../../observers/interface';

/**
 * @class Goodcase
 * @extends {React.Component}
 */

const data = [{
    imgUrl: '//img6.bdstatic.com/img/image/public/11493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&shituvs=1d38942ad6dbf12d82cd562795d8c0fefb101652&uptype=upload_wise&queryImageUrl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3De4b9c755f81fbe090e34cb105b500d33%2Fcaef76094b36acafb1af6edf76d98d1001e99c42.jpg&querySign=3701169437%2C2917549604&simid=0,0'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/21493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Db37694a6c3ea15ce5384e80d86303bf3%2Fd4628535e5dde71120a2b9d5adefce1b9d1661a5.jpg&querySign=3830440458%2C2016793230&simid=20131210%2C1991777277892231847&fr=duturesultcam&uptype=upload_wise&shituvs=823ba22860aeb487bb4949c4a1b876f050ced855'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/31493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D5f7914a740ed2e73ee838e28b731a18b%2F9922720e0cf3d7ca12c8c455f81fbe096b63a9d3.jpg&querySign=598741034%2C772460039&simid=20131210%2C17842897770725615087&fr=duturesultcam&uptype=upload_wise&shituvs=6d2ce703f8cef9861161b32164c42924438bab84'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/41493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D81cf9c75da160924ce4faa1fe43734fa%2F8718367adab44aed194145c7b91c8701a18bfb82.jpg&querySign=1058125462%2C223370019&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=2962c13bac44a154af2bdbde3123c0272decf2d7'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/51493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Da0999af43cd12f2edc6fa6647ff2d462%2F838ba61ea8d3fd1f9a4159193a4e251f95ca5f4d.jpg&querySign=850657008%2C1848750385&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=9ee4922962fa634ab243b0df5c14e67a7e7c5b38'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/6.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Dc0e0671246086e0678c2374f32387af4%2F500fd9f9d72a60595d541a392234349b033bba49.jpg&querySign=792291378%2C884940700&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=e1b6cd9142b74c49952937eb97703ac1ff68310a'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/71493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Ded2735e1b8119313d529f7b455080dd7%2F8d5494eef01f3a2993912eed9325bc315c607cbc.jpg&querySign=2908293830%2C2199669605&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=fa41c529e1d7e20db8db9b848cba1efbab127f71'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/81493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3De8406f988dd6277ffb783a3c18081e30%2Ff31fbe096b63f6240421c2208d44ebf81a4ca391.jpg&querySign=4187890418%2C596549795&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=2ea92b6af6201fd8bbf1bacabc350bb54625e2b6'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/91493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Dd4865c56dc88d43fe2c399f64d2ed31b%2Fb64543a98226cffc36924491b3014a90f603ea5d.jpg&querySign=870119707%2C817939072&simid=20131210%2C17111971661555769130&fr=duturesultcam&uptype=upload_wise&shituvs=0bc1799fd22067aeb76dc3589386bd02523b4875'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/101493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fa.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D2a7b3810798da9775c458e2f8061f919%2F54fbb2fb43166d222fa1eeb74c2309f79052d23b.jpg&querySign=3338602284%2C1401237478&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=1f3fe8309cd6ae9e5f9b41bcae03be5b24a8935f'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/111493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3D22feeb0c9fcad1c8c2d1f4234f0e6609%2F0e2442a7d933c895c3f36358db1373f082020007.jpg&querySign=2484243049%2C3743396124&simid=20131210%2C10279114475341671259&fr=duturesultcam&uptype=upload_wise&shituvs=f0038ca3ce184e38c9d4be7f2901e3e60518ebe4'
}, {
    imgUrl: '//img6.bdstatic.com/img/image/public/121493107206.jpg',
    link: '//image.baidu.com/wiseshitu?guess=1&queryImageUrl=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2F%2565%2557%253D%2534%2530%2530%2Fsign%3Db2cd95a6c3ea15ce5384e80d86303bf3%2Fd4628535e5dde7112119b8d5adefce1b9c1661ce.jpg&querySign=3902610188%2C158154703&simid=0%2C0&fr=duturesultcam&uptype=upload_wise&shituvs=12dfe060b59812f6f8e215c9d4e17c7fd860fcbb'
}];

class Goodcase extends React.Component<IBaseProps, IBaseState> {
    render() {
        const width = (window.innerWidth - 20) / 3;

        return (<section className="goodCase">
            <ul className="goodCaseCon">
                {data.map((item, i) => {
                    const style = {
                        backgroundImage: `url(${item.imgUrl})`,
                        width: width,
                        height: width
                    };
                    return (<li style={style} key={i}><a href={item.link}></a></li>);
                })}
            </ul>
            <p className="shitutips"> 识图一下 开启更多精彩 </p>
        </section>);
    }
}

export default Goodcase;
