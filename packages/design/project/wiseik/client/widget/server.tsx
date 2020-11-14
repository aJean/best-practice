import * as React from 'react';
import {renderToString} from 'react-dom/server.js';
import {Provider} from 'react-redux';
import {StaticRouter} from 'react-router';
import {configureStore} from '../observers/store';
import routes from './container/routes';

/**
 * @file react ssr
 */

export default function(url, data) {
    const store = configureStore(data);
    const context = {};

    return renderToString(<Provider store={store}>
        <StaticRouter location={url} context={context}>{routes}</StaticRouter>
    </Provider>);
}
