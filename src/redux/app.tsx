import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './reducer';
import List from './list';

class App extends React.Component {
    render() {
        return (<Provider store={store}>
            <div>
                <h2>welcome hello world</h2>
                <List></List>
            </div>
        </Provider>)
    }
}

export default {
    init(el) {
        ReactDOM.render(<App />, el);
    }
}