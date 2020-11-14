import * as React from 'react';
import {IPhotoOverlay} from '../../../observers/interface';
import Dispatcher from './dispatcher';

/**
 * @file 图片浏览蒙层
 */

interface IState {
    imgurl: string;
    display: string;
}

class PhotoOverlay extends React.PureComponent<IPhotoOverlay, IState> {
    componentWillMount() {
        this.setState({
            imgurl: null,
            display: 'none'
        });
        
        Dispatcher.register('po', payload => this.setState(payload));
    }

    show(imgurl) {
        window.scrollTo(0, 0);

        this.setState({
            imgurl: imgurl,
            display: 'block'
        });
    }

    hide() {
        this.setState({display: 'none'});
    }

    render() {
        const style = {display: this.state.display};
        return (<section className="photo-overlay" style={style}>
            <span className="img-icon photo-overlay-close" onClick={this.hide.bind(this)}>
                &#xe613;</span>
            <div className="photo-overlay-img">
                <img src={this.state.imgurl}/>
            </div>
        </section>);
    }
}

export default PhotoOverlay;

export function showPhoto(imgurl) {
    Dispatcher.dispatch('po', {display: '-webkit-box', imgurl});
}

export function hidePhoto() {
    Dispatcher.dispatch('po', {display: 'hide'});
}