import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { activitiesOperations, activitiesSelectors } from '../redux';
import { ItemList } from '../components';

class ListContainer extends React.PureComponent {
    componentDidMount() {
        this.props.fetch();
    }
    render() {
        if (this.props.loading) {
            return <p>Loading...</p>
        }
        return (
            <ul>
                {this.props.activities.map((activity, i) => <ItemList key={i} name={activity} />  )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    loading: activitiesSelectors.isActivitiesListLoading(state),
    activities: activitiesSelectors.getActivitiesList(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetch: activitiesOperations.fetchActivities
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)