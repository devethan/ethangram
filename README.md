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

