// import

// Photo reducer는 늘 권한을 가지고 있어야하기 때문에 jwt 토큰 문제 시 로그아웃이 필요하다.
// import { actionCreators as userActions } from 'redux/modules/user';
// import tempResult from 'tempResult.json';
const { api } = require('config/url.json');

// actions

const SET_FEED = 'SET_FEED';
const LIKE_PHOTO = 'LIKE_PHOTO';
const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
const ADD_COMMENT = 'ADD_COMMENT';


// action creators


function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  } 
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  } 
}

function doUnLikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  } 
}

function addComment(photoId, comment) {
  return {
    type: ADD_COMMENT,
    photoId,
    comment
  }
}

// api actions


function getFeeds () {
  return (dispatch, getState) => {
    const { user: {token} } = getState();
    fetch(`${api}/images/`, {
      method: 'GET',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(setFeed(json))
    })
    .catch(error => console.error(error));
  }
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doLikePhoto(photoId));
    const { user: { token } } = getState();
    fetch(`${api}/images/${photoId}/likes/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        // dispatch(userAction.logout())
      } else if (!res.ok) {
        dispatch(doUnLikePhoto(photoId))
      }
    })
    .catch(err=>console.error(err));
  }
}

function unLikePhoto(photoId) {
  return (dispatch, getState) => {
    dispatch(doUnLikePhoto(photoId));
    const { user: { token } } = getState();
    fetch(`${api}/images/${photoId}/unlikes/`, {
      method: 'DELETE',
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(res => {
      if(res.status === 401) {
        // dispatch(userAction.logout())
      } else if (!res.ok) {
        dispatch(doLikePhoto(photoId))
      }
    });
  }
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`${api}/images/${photoId}/comments/`, {
      method: 'POST',
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        message
      })
    })
    .then(res => {
      // console.log(res)
      if(res.status === 401) {
        // dispatch(userActions.logout());
      }
      return res.json()
    })
    .then(json => {
      if(json.message) {
        dispatch(addComment(photoId, json))
      }
    })
  }
}


// initial state

const initialState = {};

// reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyDoLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyDoUnLikePhoto(state, action);
    case ADD_COMMENT:
      return applyAddComment(state, action);
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

function applyDoLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if( photo.id === photoId ) {
      return {...photo, is_liked: true, like_count: photo.like_count+1}
    }
    return photo;
  });
  return {...state, feed: updatedFeed};
}

function applyDoUnLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if( photo.id === photoId ) {
      return {...photo, is_liked: false, like_count: photo.like_count-1}
    }
    return photo;
  });
  return {...state, feed: updatedFeed};
}

function applyAddComment(state, action) {
  const { photoId, comment } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if( photo.id === photoId ) {
      return {
        ...photo,
        comments: [...photo.comments, comment]
      }
    }
    return photo;
  });
  return {...state, feed: updatedFeed};
}

// exports
const actionCreators = {
  getFeeds,
  likePhoto,
  unLikePhoto,
  commentPhoto
};

export { actionCreators };

// default reducer export

export default reducer;
