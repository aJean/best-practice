import * as React from 'react';

/**
 * @file new conntext api
 */

const DEFAULT_STATE = {
    list: [{
            name: 'Amethyst',
            alter_ego: 'Amy Winston',
            first_appearance: 'LEGION OF SUPER-HEROES #298 (1983)',
        },
        {
            name: 'Aquaman',
            alter_ego: 'Arthur Curry',
            first_appearance: 'MORE FUN COMICS #73 (1941)',
        },
        {
            name: 'Arsenal',
            alter_ego: 'Roy Harper',
            first_appearance: 'ADVENTURE COMICS #250 (1958)',
        },
        {
            name: 'Atom',
            alter_ego: 'Ray Palmer',
            first_appearance: 'SHOWCASE #34 (1961)',
        },
        {
            name: 'Batgirl',
            alter_ego: 'Barbara Gordon',
            first_appearance: 'BATMAN #139 (1961)',
        },
        {
            name: 'Batman',
            alter_ego: 'Bruce Wayne',
            first_appearance: 'DETECTIVE COMICS #27',
        }
    ],
    select: ''
};

export const MyContext = React.createContext({ data: null, selectChanged: null });

export default class Provider extends React.Component {
    state = DEFAULT_STATE;
    
    selectChanged = event => {
        this.setState({ select: event.target.value });
    }
    
    render() {
        const { list, select } = this.state;
        const data = list.find(item => item.name === select);

        return <MyContext.Provider value={{data, selectChanged: this.selectChanged}}>
            {this.props.children}
        </MyContext.Provider>;
    }
}