import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './homeView';

export default {
    init() {
        ReactDOM.render(<Root/>, document.getElementById('wrapper'));
    }
}
