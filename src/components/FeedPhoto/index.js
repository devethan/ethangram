import { connect } from 'react-redux';
import Contailner from './container';
import {actionCreators as userActions} from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        getPhotoLikes: () => {
            dispatch(userActions.getPhotoLikes(ownProps.photo.id))
        }
    }
}

export default connect(null, mapDispatchToProps)(Contailner);