import {connect} from './polymer';
import * as React from 'react';

/**
 * @file list component
 */

function mapStateToProps(state) {
    return { list: state.list };
}

const ListApp = ({list, dispatch}) => {
    return (
        <div>
            <h2>level 2 列表页</h2>
            <div>
                {list.map((text, i) => <div key={i}>{text}</div>)}
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(ListApp);