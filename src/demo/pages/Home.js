import React from 'react';
import { Link } from 'react-router-dom';

import { routeDefinition } from '../../routes';

export class DemoHome extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h2>Demo homepage</h2>
                <Link to={routeDefinition.demoNameRoute('toto')}>View toto</Link>
            </React.Fragment>            
        );
    }
}

