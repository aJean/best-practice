import * as React from 'react';
import * as PropTypes from 'prop-types';

/**
 * @file redux connext
 */

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    return class Wrap extends React.Component {
        static contextTypes = {
            store: PropTypes.object
        }

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            const store = this.context.store;
            const staticProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};
            // trick: setState 不会触发 rerender, 而是相当于 init
            this.update(store.getState(), staticProps);
            store.subscribe(data => this.update(data, staticProps));
        }

        /**
         * 将改变的内容作为属性传给 wrapped component
         * 以及 dispatch
         */
        update(data, staticProps) {
            const props = mapStateToProps(data);
            this.setState({...props, ...staticProps})
        }

        render() {
            return (<WrappedComponent {...this.state} />);
        }
    }
}

export default connect;