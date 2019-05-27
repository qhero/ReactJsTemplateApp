import React from 'react';

import { ListContainer, CreateContainer } from '../containers';

export class HomePage extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <CreateContainer />
                <ListContainer />
            </React.Fragment>

        )
    }
}