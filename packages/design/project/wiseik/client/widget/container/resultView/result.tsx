import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from '../../../observers/store';
import routes from '../routes';

export default {
    init() {
        const store = configureStore(window['bd']);

        ReactDOM.render(<Provider store={store}>
            <BrowserRouter>{routes}</BrowserRouter>
        </Provider>, document.getElementById('wrapper'));
    }
}
