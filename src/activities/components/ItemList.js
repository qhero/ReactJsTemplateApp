import React from 'react';

export class ItemList extends React.PureComponent {
    render() {
        return (
            <li>{this.props.name}</li>
        )
    }
}