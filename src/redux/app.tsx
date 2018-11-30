import * as React from 'react';
import * as PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ApolloClient from "apollo-boost";
import store from './reducer';
import ErrorCapture from './error';
import List from './list';

const client = new ApolloClient({ uri: "http://test.baidu.com:4000/graphql" });

class App extends React.Component {
    static childContextTypes = {
        client: PropTypes.object
    }

    getChildContext() {
        return { client }
    }

    render() {
        return (<Provider store={store}>
            <div>
                <h2>welcome hello world</h2>
                <ErrorCapture><List></List></ErrorCapture>
            </div>
        </Provider>)
    }
}

export default {
    init(el) {
        ReactDOM.render(<App />, el);
    }
}