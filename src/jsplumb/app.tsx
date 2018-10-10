import './style.less';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './config/reducers';
import CanvasView from './canvas.view';
import ControlsView from './controls.view';

/**
 * @file react 结合 jsplumb 绘制流程图
 */

export default {
    init(el) {
        const jsp = store.jsp;

        jsp.ready(function () {
            jsp.setContainer(el);

            ReactDOM.render(<Provider store={store}><main>
                <ControlsView />
                <CanvasView />
            </main></Provider>, el);
        });
    },

    keySimulate() {
        const keyboardEvent = new KeyboardEvent('keypress', {bubbles:true});
        Object.defineProperty(keyboardEvent, 'ctrlKey', {
            get: function () {
                return true;
            }
        }); 
        Object.defineProperty(keyboardEvent, 'charCode', {
            get: function () {
                return this.charCodeVal;
            }
        }); 
        keyboardEvent['charCodeVal'] = '61';
        document.body.dispatchEvent(keyboardEvent);
    }
}