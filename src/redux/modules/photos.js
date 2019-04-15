// import

// Photo reducer는 늘 권한을 가지고 있어야하기 때문에 jwt 토큰 문제 시 로그아웃이 필요하다.
import { actionCreators as userActions } from 'redux/modules/user';
import tempResult from 'tempResult.json';

// actions

// action creators

// api actions


const getFeeds = () => {
  // api fetch() 가 없는 이유는 api가 완성되지 않았기 때문, 임시데이터로 대체하여 진행
  return (dispatch, getState) => console.log(tempResult)
}

// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// reducer functions

// exports
const actionCreators = {
  getFeeds
};

export { actionCreators };

// default reducer export

export default reducer;
