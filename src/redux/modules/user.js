// import

const { api } = require('config/url.json');

// actions

const SAVE_TOKEN = "SAVE_TOKEN";

// action creator

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

// API Actions
// 일반 로그인
const generalLogin = data => {
  return dispatch => {
    fetch(`${api}/users/rest_auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.error(err));
  };
};
// 일반 가입
const facebookLogin = access_token => {
  return dispatch => {
    fetch(`${api}/users/rest_auth/facebook/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(access_token)
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.error(err));
  };
};

// 페이스북 가입
const generalResistration = data => {
  return dispatch => {
    fetch(`${api}/users/rest_auth/registration/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.error(err));
  };
};

// action creator

// init state

const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false,
  token: localStorage.getItem("jwt")
};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return applySetToken(state, action);

    default:
      return state;
  }
}

// reducer functions

function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

// exports
const actionCreators = {
  facebookLogin,
  generalResistration,
  generalLogin
};

export { actionCreators };

// reducer export
export default reducer;
