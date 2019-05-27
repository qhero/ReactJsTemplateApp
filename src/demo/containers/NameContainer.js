import React from 'react';
import { withRouter } from 'react-router-dom';

import { DisplayName } from '../components';

class NameContainer extends React.PureComponent{
    render(){
        return(
            
            <DisplayName name={this.props.match.params.name}/>
        );
    }
}

export default withRouter(NameContainer);