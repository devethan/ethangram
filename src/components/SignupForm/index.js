import { connect } from 'react-redux';
import Container from './container';
import { actionCreators as userActions } from 'redux/modules/user';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        generalResistration: data => {
            dispatch(userActions.generalResistration(data));
        }
    }
}

export default connect(null, mapDispatchToProps)(Container);