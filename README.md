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

### Change `sass-loader` configuration

`sass-loader` 의 구성정보 설정 변경을 통해 css-module의 import를 전역적으로 가능하게 한다.

1. `yarn eject`
2. 
    <pre>
    <code>// config/webpack.config.js
    // Adds support for CSS Modules, but using SASS
    // using the extension .module.scss or .module.sass
    {
        test: sassModuleRegex,
        use: getStyleLoaders(
        {
            importLoaders: 2,
            sourceMap: isEnvProduction && shouldUseSourceMap,
            modules: true,
            getLocalIdent: getCSSModuleLocalIdent,
        }).concat({     // 이 부분 변경/추가!
            loader: require.resolve('sass-loader'),
            options: {
            // Setting global variable
            data: `@import "${paths.appSrc}/config/_variables.scss";`,
            includePaths: [paths.appSrc + '/config']
            }
        })
    },</code>
    </pre>

[Ejecting from CRA Update 2](https://www.youtube.com/watch?v=rZOduIgjKYI&feature=youtu.be)

[CSS Module과 Sass를 함께 사용하며 sass-loader 설정 커스터마이징](https://velog.io/@dever/CSS-Module%EA%B3%BC-Sass%EB%A5%BC-%ED%95%A8%EA%BB%98-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B0-sass-loader-%EC%84%A4%EC%A0%95-%EC%BB%A4%EC%8A%A4%ED%84%B0%EB%A7%88%EC%9D%B4%EC%A7%95-mpjoa307pt)

*****

### Apply i18n Context

> `i18n`(internationalization) 모듈을 통해 흔히 언어팩이라는 것을 적용해볼까

1.  
    <pre>// translations.js
    <code>export const translations = {
        ko: {
            "Log in": "로그인",
            "About us": "Instagram 정보",
            "Support": "지원",
            "Press": "홍보 센터",
            "API": "",
            "Jobs": "채용 정보",
            "Privacy": "개인정보처리방침",
            "Terms": "약관",
            "Directory": "디렉터리",
            "Language": "언어",
        }
    };</code><pre>

2.  <pre>// configureStore.js
    <code>import { i18nState } from 'redux-i18n';
    
    const reducer = combineReducers({
        user,
        router: connectRouter(history),
        i18nState,  // add
    })</code><pre>

3.  <pre>// components/Footer/index.js
    <code>import PropTypes from 'prop-types';
    
    class index extends React.Component {
        static contextTypes = {
            t: PropTypes.func.isRequired
        }
        render() {
            const { props, context } = this;
            const { t } = context;
            retrun (
                --> t('About us')
            );
        }
    }</code><pre>

4.  <pre>// components/Footer/index.js - Stateless Functional Component
    <code>import PropTypes from 'prop-types';
    
    const Footer = (props, context) => (
        t('About us')
    )

    Footer.contextTypes = {
        t: PropTypes.func.isRequired
    }</code><pre>

*****

## Logout
1. 서버사이드 처리 : 올바르지 않은 토큰 값 받으면 401 에러 코드 response
2. API fetch 단계에서 `response.status === 401` 이면 로그아웃 실행

--> 백엔드가 아직 준비되지 않아서 스킵함. ( 04 / 15 )