import { jsPlumb } from 'jsplumb';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import Message from './message';

/**
 * @file react 结合 jsplumb 绘制流程图
 */

export default {
    init(el) {
        const jsp = jsPlumb.getInstance();

        jsp.ready(function () {
            jsp.setContainer(el);

            ReactDOM.render(<App jsp={jsp}>
                <Message left={200} />
                <Message left={400} />
            </App>, el);

            jsp.bind('click', function (conn, originalEvent) {
                jsp.deleteConnection(conn);
            });
        });
    }
}