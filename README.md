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

## Redux Middlewares Thunk

React app과 redux store 사이에는 middleware가 존재한다.

이것을 구현하기 위해서 다음의 라이브러리를 설치한다.

`yarn add redux-thunk`

`redux-thunk`는 우리가 원할 때마다, default로 액션을 보낼 때 마다,

redux store로 액션을 보낼 수 있도록 도와준다.

1. Response
2. 그에 맞는 Action sending
3. Go to reducer & Change Resources(data)

이러한 작업들을 중간에서 미들웨어인 `redux-thunk`가 한다.

정리 : `redux-thunk`는 액션을 보낼 때까지 기다리고, 우리가 원할 때 액션을 전송할 수 있도록 한다.

### Store에 middleware 적용

<pre>
<code>import thunk from 'redux-thunk';

// Applying Middleware
const middlewares = [thunk];

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));</code>
</pre>

여기서 ES6의 재밌는 기능이 나오는데, 바로 `...`, 'unpack' 이라는 기능이다.

array 구조의 index에 맞는 item들을 쉽게 꺼낼 수 있도록 한다.


<pre>
<code>const arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]
console.log(...arr); // 1, 2, 3</code>
</pre>

*****

여기서부터는 진행 속도를 위해서 README 작성을 잠시 보류하는 걸로 하겠다.

복습하게 될 때, 다시 돌아옴!

*****

[React Component Pattern](https://levelup.gitconnected.com/react-component-patterns-ab1f09be2c82)

*****