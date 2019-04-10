# Ethangram

Clone instagram using ReactJS, React Native, Redux - version 1

## 강의 및 블로그
> [[Django 풀스택] 인스타그램 클론 코딩 - Nomad Coders](https://academy.nomadcoders.co/courses/enrolled/216935)

*****

## Setting up the Redux and Store with multiple Reducers.

단일 리듀서로 state 관리를 하지만, 인스타그램에서는 보다 많은 양의 데이터와 state에 대한 관리가 필요하다.

그래서 필요와 목적에 따라 reducer을 나누고 관리해야한다.

1. 단일 reducer 모듈을 정의한다. (userReducer, ...)
<pre>
<code>// import

// actions

// action creator

// init state

// reducer

// reducer functions

// exports

// reducer export</code>
</pre>

2. 이러한 reducer 들을 한데 묶는다. (configureStore)
<pre>
<code>import { createStore, combineReducers } from "redux";
import users from './modules/users';

// Combining reducers on Store.
const reducer = combineReducers({
    users
})

let store = initialState => createStore(reducer);

export default store();</code>
</pre>

*****

## Changing the NODE_PATH

React 프로젝트에서 import 할 때, 물리적인 파일을 참조하는 경우가 많다.

참조에 사용되는 path 방식은 2가지이다.

1. 절대경로(absolute)
2. 상대경로(relative)

`src/.env`에 다음과 같이 정의한 후, 개발 서버를 재시동한다.

<code>NODE_PATH=src/</code>

그러면 최상단의 지점이 src 하위가 되어서 절대경로를 편하게 사용할 수 있고,

참조위치를 확인하기에도 편리하다.

*****