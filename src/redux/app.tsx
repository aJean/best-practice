import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import store from './reducer';
import ErrorCapture from './error-catch';
import List from './list';
import Pure from './pure';

/**
 * @file contentEditable 选取操作
 */

const client = new ApolloClient({ uri: 'http://test.qy.com:4000/graphql' });

class App extends React.Component {
  static childContextTypes = {
    client: PropTypes.object
  };

  state = {
    girls: []
  };

  getChildContext() {
    return { client };
  }

  // shallow equal
  checkHandle = () => {
    const girls = this.state.girls;
    girls.push(1);

    this.setState({ girls });
  };

  addHandle = () => {
    const sel = window.getSelection();

    try {
      const range = sel.getRangeAt(0);

      const span = document.createElement('span');
      span.contentEditable = 'false';
      span.style.cssText = 'background:red;';
      span.appendChild(document.createTextNode('helloworld'));

      sel.deleteFromDocument();
      range.insertNode(span);
      range.collapse(false);

      sel.removeAllRanges();
      sel.addRange(range);
    } catch (e) {}
  };

  delHandle = () => {
    const sel = window.getSelection();

    try {
      const range = sel.getRangeAt(0);
      const end = range.endOffset;

      range.setStart(sel.focusNode, end - 1);
      range.setEnd(sel.focusNode, end);
      range.deleteContents();
      console.log(sel.focusNode);
    } catch (e) {}
  };

  render() {
    const { girls } = this.state;
    console.log('app render')

    return (
      <Provider store={store}>
        <div>
          <h2 onClick={this.checkHandle}>
            <Pure data={girls} />
          </h2>
          <div
            id='edit'
            style={{ height: 40, border: '1px solid blue', outline: 'none' }}
            contentEditable
            dangerouslySetInnerHTML={{ __html: '1111122222' }}
          />
          <button style={{ marginTop: 20, marginBottom: 20 }} onClick={this.addHandle}>
            wrap
          </button>
          <button style={{ marginTop: 20, marginBottom: 20 }} onClick={this.delHandle}>
            del
          </button>
          <ErrorCapture>
            <List />
          </ErrorCapture>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
