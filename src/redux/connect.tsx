import * as React from 'react'
import * as PropTypes from 'prop-types'

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

            this.update(store.getState(), staticProps);
            store.subscribe(data => this.update(data, staticProps));
        }

        /**
         * 将改变的内容作为属性传给 wrapped component
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