import * as React from 'react';
import * as PropTypes from 'prop-types';

/** 
 * @file 词条组件
 */

export default class Lemma extends React.Component<any, any> {
    static propTypes = {
        word: PropTypes.string,
        text: PropTypes.string
    }

    render() {
        const props = this.props;

        return (<div className="lamma">
            <strong className="lamma-word">{props.word}</strong>{props.text}
        </div>);
    }
}