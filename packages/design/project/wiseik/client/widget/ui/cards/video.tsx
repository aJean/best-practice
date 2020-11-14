import * as React from 'react';
import {IVideoCard, IBaseState} from '../../../observers/interface';

class VideoCard extends React.PureComponent<IVideoCard, IBaseState> {
    componentWillMount() {
        // console.log(this.props);
    }

    createFilm() {
        const props = this.props;
        const url = props.info.redirectUrl + '&page=duturesult&mod=video&url='
            + encodeURIComponent(props['vlink']);

        return (<section className="shitucard shituvideo">
            <h2 className="shitucard-title">相关影视剧</h2>
            <a href={url} className="shituvideo-body">
                <div className="shituvideo-img">
                    <img src={props['img']} width="95" height="128"/>
                    <span className="shituvideo-total">评分<em>{props['rate']}</em>
                    </span>
                </div>
                <div className="shituvideo-info">
                    <p className="title">{props['title']}</p>
                    <p className="des">{props['year']}年上映
                        <span>|</span>{props['duration']}
                        <span>|</span>{props['area']}</p>
                    <p className="actor">主演 : {props['actor']}</p>
                    <p className="from">来自{props['sitename']}视频</p>
                    <div className="shituvideo-play">立即播放</div>
                </div>
            </a>
        </section>);
    }

    createVariety() {
        const props = this.props;
        const url = props.info.redirectUrl + '&page=duturesult&mod=video&url='
            + encodeURIComponent(props['vlink']);

        return (<section className="shitucard shituvideo">
            <h2 className="shitucard-title">相关综艺节目</h2>
            <a href={url} className="shituvideo-body">
                <div className="shituvideo-img">
                    <img src={props['img']} width="95" height="128"/>
                    <span className="shituvideo-total">{props['latestep']}</span>
                </div>
                <div className="shituvideo-info">
                    <p className="title">{props['title']}</p>
                    <p className="des">{props['year']}年
                        <span>|</span>{props['area']}
                        <span>|</span>{props['lang']}</p>
                    <p className="actor">主演 : {props['actor']}</p>
                    <p className="from">来自{props['sitename']}视频</p>
                    <div className="shituvideo-play">立即播放</div>
                </div>
            </a>
        </section>);
    }

    createTv() {
        const props = this.props;
        const url = props.info.redirectUrl + '&page=duturesult&mod=video&url='
            + encodeURIComponent(props['vlink']);
        const time = (props['latestep'] - props['totalep'] > 0);

        return (<section className="shitucard shituvideo">
            <h2 className="shitucard-title">相关影视剧</h2>
            <a href={url} className="shituvideo-body">
                <div className="shituvideo-img">
                    <img src={props['img']} width="95" height="128"/>
                    <span className="shituvideo-total">全{props['totalep']}集</span>
                </div>
                <div className="shituvideo-info">
                    <p className="title">
                        {props['title']}
                        <span>{time ? '更新中' : '已完结'}</span>
                    </p>
                    <p className="des">{props['year']}年
                        <span>|</span>{props['area']}
                        <span>|</span>{props['lang']}
                        <span>|</span>全{props['totalep']}集</p>
                    <p className="actor">主演 : {props['actor']}</p>
                    <p className="from">来自{props['sitename']}视频</p>
                    <div className="shituvideo-play">立即播放</div>
                </div>
            </a>
        </section>);
    }

    createVideo() {
        const props = this.props;
        const url = props.info.redirectUrl + '&page=duturesult&mod=video&url='
            + encodeURIComponent(props['vlink']);
        const time = (props['latestep'] - props['totalep'] > 0);

        return (<section className="shitucard shituvideo">
            <h2 className="shitucard-title">相关动漫卡通</h2>
            <a href={url} className="shituvideo-body">
                <div className="shituvideo-img">
                    <img src={props['img']} width="95" height="128"/>
                    <span className="shituvideo-total">更新至{props['latestep']}集</span>
                </div>
                <div className="shituvideo-info">
                    <p className="title">
                        {props['title']}
                        <span>{time ? '更新中' : '已完结'}</span>
                    </p>
                    <p className="des">{props['year']}年
                        <span>|</span>{props['area']}
                        <span>|</span>{props['lang']}</p>
                    <p className="actor">{props['update']}</p>
                    <p className="from">来自{props['sitename']}视频</p>
                    <div className="shituvideo-play">立即播放</div>
                </div>
            </a>
        </section>);
    }

    render() {
        const type = this.props['seclass'];

        if (type == '电视剧') {
            return this.createTv();
        } else if (type == '综艺') {
            return this.createVariety();
        } else if (type == '电影') {
            return this.createFilm();
        } else {
            return this.createVideo();
        }
    }
}

export default VideoCard;