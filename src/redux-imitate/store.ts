/**
 * @file 创建 state 和 reducer
 */

function createStore(state, stateChanger) {
    const listeners = [];
    const subscribe = (listener) => listeners.push(listener);
    const getState = () => state;
    const dispatch = (action) => {
        state = stateChanger(state, action);
        listeners.forEach(listener => listener(state));
    };
    return { getState, dispatch, subscribe };
}

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_HEADER_TEXT':
            return {
                ...state,
                header: {
                    ...state.header,
                    text: action.text
                }
            };
        case 'UPDATE_HEADER_COLOR':
            return {
                ...state,
                header: {
                    ...state.header,
                    color: action.color
                }
            };
        case 'UPDATE_CONTENT_TEXT':
            return {
                ...state,
                content: {
                    ...state.content,
                    text: action.text
                }
            };
    }
}

const appState = {
    header: {
        text: 'this is title',
        color: 'red',
    },
    content: {
        text: 'this is content',
        color: 'red'
    }
};

export default createStore(appState, stateChanger);