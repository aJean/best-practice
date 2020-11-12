import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Provider from './provider';
import Header from './header';
import Main from './main';
import store from './store';

class App extends React.Component {
    state: any;

    render() {
        return (
            <Provider store={store}>
                <Header />
                <Main />
            </Provider>
        )
    }
}

export default {
    initImitate(el) {
        ReactDOM.render(<App />, el);
    }
}
