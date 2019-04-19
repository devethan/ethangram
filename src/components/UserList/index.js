import { connect } from 'react-redux';
import Container from './container';
import {actionCreators as userActions} from 'redux/modules/user';

const mapStateToProps = (state, ownProps) => {
    const {user: {userList}} = state;
    return {
        userList
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleFollowClick: (userId, following) => {
            if(following) {
                dispatch(userActions.unFollowUser(userId));
            } else {
                dispatch(userActions.followUser(userId));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);