import React from 'react';

export class DisplayName extends React.PureComponent{
    render(){
        return(
            <p>
                Name: {this.props.name}
            </p>
        );
    }
}