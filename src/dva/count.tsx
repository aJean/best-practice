import {connect} from './polymer';
import * as React from 'react';

function mapStateToProps(state) {
    return { count: state.count };
}

const CountApp = ({count, dispatch}) => {
    return (
        <div>
            <div>Highest Record: {count.record}</div>
            <div>{count.current}</div>
            <div>
                <button onClick={() => { dispatch({type: 'count/add'}); }}>+</button>
            </div>
        </div>
    );
};

export default connect(mapStateToProps)(CountApp);