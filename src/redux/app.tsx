import * as React from 'react';
import * as PropTypes from 'prop-types'
import * as ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import ApolloClient from 'apollo-boost';
import store from './reducer';
import ErrorCapture from './error';
import List from './list';
import Container from '../component/container';

const client = new ApolloClient({ uri: "http://test.baidu.com:4000/graphql" });

class App extends React.Component {
    static childContextTypes = {
        client: PropTypes.object
    }

    getChildContext() {
        return { client }
    }

    clickHandle = () => {
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
    
        const span = document.createElement('span');
        span.contentEditable = 'false';
        span.style.cssText = 'background:red;';
        span.appendChild(document.createTextNode('helloworld'));
    
        sel.deleteFromDocument();
        range.insertNode(span);
        range.collapse(false)
    
        sel.removeAllRanges();
        sel.addRange(range);
    }

    delHandle = () => {
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
        const end = range.endOffset;

        range.setStart(sel.focusNode, end -1);
        range.setEnd(sel.focusNode, end);
        range.deleteContents();
        console.log(sel.focusNode);
    }

    render() {
        return (<Provider store={store}>
            <div>
                <h2>welcome hello world</h2>
                <Container />
                <div id="edit" style={{height: 40, border: '1px solid blue', outline: 'none'}} contentEditable dangerouslySetInnerHTML={{__html: "1111122222"}} />
                <button style={{marginTop: 20, marginBottom: 20}} onClick={this.clickHandle}>wrap</button>
                <button style={{marginTop: 20, marginBottom: 20}} onClick={this.delHandle}>del</button>
                <ErrorCapture><List /></ErrorCapture>
            </div>
        </Provider>)
    }
}

export default {
    init(el) {
        ReactDOM.render(<App />, el);
    }
}