import React from 'react';
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import styles from './styles.module.scss';

export const LoginForm = props => (
    <div>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Log in" />
      </form>
      <span>or</span>
      <span>
        <LogoFacebook icon="logo-facebook" fontSize="20px" color="#385185" /> Log in with Facebook
      </span>
      <span>Forgot password?</span>
    </div>
  );
  
  export const SignupForm = props => (
    <div>
      <h3>Sign up to see photos and videos from your friends.</h3>
      <button>
        <LogoFacebook icon="logo-facebook" fontSize="20px" color="#385185" /> Log in with Facebook
      </button>
      <span>or</span>
      <form>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Full Name" />
        <input type="username" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Sign up" />
      </form>
      <p>
        By signing up, you agree to our <span>Terms & Privacy Policy</span>.
      </p>
    </div>
  );