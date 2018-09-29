import './style.less';
import { jsPlumb } from 'jsplumb';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Canvas from './canvas';
import MenuList from './menulist';

/**
 * @file react 结合 jsplumb 绘制流程图
 */

export default {
    init(el) {
        const jsp = jsPlumb.getInstance({
            ConnectionsDetachable: false
        });

        jsp.ready(function () {
            jsp.setContainer(el);

            jsp.bind('click', function (conn, originalEvent) {
                jsp.deleteConnection(conn);
            });

            ReactDOM.render(<main>
                <MenuList />
                <Canvas jsp={jsp} />
            </main>, el);
        });
    }
}