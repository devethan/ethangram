// import

// Photo reducer는 늘 권한을 가지고 있어야하기 때문에 jwt 토큰 문제 시 로그아웃이 필요하다.
// import { actionCreators as userActions } from 'redux/modules/user';
import tempResult from 'tempResult.json';

// actions

const SET_FEED = 'SET_FEED';


// action creators


const setFeed = (feed) => {
  return {
    type: SET_FEED,
    feed
  } 
}

// api actions


const getFeeds = () => {
  // api fetch() 가 없는 이유는 api가 완성되지 않았기 때문, 임시데이터로 대체하여 진행
  const result = tempResult;
  return (dispatch, getState) => {
    dispatch(setFeed(result));
  }
}


// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// reducer functions

function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed,
  }
}

// exports
const actionCreators = {
  getFeeds
};

export { actionCreators };

// default reducer export

export default reducer;
