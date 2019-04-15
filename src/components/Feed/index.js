import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as photoActions } from 'redux/modules/photos';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeeds: () => {
            dispatch(photoActions.getFeeds());
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);