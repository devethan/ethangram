import { connect } from 'react-redux';
import Container from './container';

// redux store state
const mapStateToProps = (state, ownProps) => {
    const { user } = state;
    return {
        isLoggedIn: user.isLoggedIn
    };
};

// mapping state with Container
// Store 상태값 + Presentor
export default connect(mapStateToProps)(Container)