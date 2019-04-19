// import

const { api } = require('config/url.json');

// actions

const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";
const SET_USER_LIST = "SET_USER_LIST";
const SET_FOLLOW_USER = "SET_FOLLOW_USER";
const SET_UNFOLLOW_USER = "SET_UNFOLLOW_USER";

// action creator

function saveToken(token) {
  return {
    type: SAVE_TOKEN,
    token
  };
}

function logout() {
  return {
    type: LOGOUT
  }
}

function setUserList(userList) {
  return {
    type: SET_USER_LIST,
    userList
  }
}

function setFollowUser(userId) {
  return {
    type: SET_FOLLOW_USER,
    userId
  }
}

function setUnFollowUser(userId) {
  return {
    type: SET_UNFOLLOW_USER,
    userId
  }
}



// API Actions
// 일반 로그인
function generalLogin(data) {
  return dispatch => {
    fetch(`${api}/rest-auth/login/`, {
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
function facebookLogin(access_token) {
  return dispatch => {
    fetch(`${api}/users/login/facebook/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "access_token": access_token,
      })
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
function generalResistration(data) {
  return dispatch => {
    fetch(`${api}/users/login/registration/`, {
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

function getPhotoLikes(photoId) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${api}/images/${photoId}/likes/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        dispatch(logout());
      }
      return res.json();
    })
    .then(json => {
      dispatch(setUserList(json));
    })
  }
}

function followUser(userId) {
  return (dispatch, getState) => {
    const {user:{token}} = getState();
    dispatch(setFollowUser(userId))
    fetch(`${api}/users/${userId}/follow/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        dispatch(logout())
      } else if (!res.ok) {
        dispatch(setUnFollowUser(userId))
      }
    })
  }
}

function unFollowUser(userId) {
  return (dispatch, getState) => {
    const {user:{token}} = getState();
    dispatch(setUnFollowUser(userId))
    fetch(`${api}/users/${userId}/unfollow/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        dispatch(logout())
      } else if (!res.ok) {
        dispatch(setFollowUser(userId))
      }
    })
  }
}

function getExplore () {
  return (dispatch, getState) => {
    const { user: {token} } = getState();
    fetch(`${api}/users/explore/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        dispatch(logout())
      }
      return res.json()
    })
    .then(json => dispatch(setUserList(json)))
  }
}


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
    case LOGOUT:
      return applyLogout(state, action);
    case SET_USER_LIST:
      return applySetUserList(state, action);
    case SET_FOLLOW_USER:
      return applySetFollowUser(state, action);
    case SET_UNFOLLOW_USER:
      return applySetUnFollowUser(state, action);
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

function applyLogout(state, action) {
  localStorage.removeItem('jwt');
  return {
    isLoggedIn: false
  }
}

function applySetUserList(state, action) {
  const { userList } = action;
  return {
    ...state,
    userList
  }
}


function applySetFollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if( user.id === userId ) {
      return {
        ...user,
        following: true
      }
    }
    return user;
  });
  return {...state, userList: updatedUserList};
}

function applySetUnFollowUser(state, action) {
  const { userId } = action;
  const { userList } = state;
  const updatedUserList = userList.map(user => {
    if( user.id === userId ) {
      return {
        ...user,
        following: false
      }
    }
    return user;
  });
  return {...state, userList: updatedUserList};
}

// exports
const actionCreators = {
  facebookLogin,
  generalResistration,
  generalLogin,
  logout,
  getPhotoLikes,
  followUser,
  unFollowUser,
  getExplore
};

export { actionCreators };

// reducer export
export default reducer;
