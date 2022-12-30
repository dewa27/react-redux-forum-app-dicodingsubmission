import React from 'react';
import { Link } from 'react-router-dom';
import useInputValue from '../hooks/useInputValue';

function LoginRegisterPage() {
  const [name, onChangeNameHandler, setName] = useInputValue();
  const [email, onChangeEmailHandler, setEmail] = useInputValue();
  const [password, onChangePasswordHandler, setPassword] = useInputValue();
  const container = document.getElementById('container');
  const resetInput = () => {
    setName(() => '');
    setEmail(() => '');
    setPassword(() => '');
  };
  const onSignUpClickHandler = async () => {
    container.classList.add('right-panel-active');
    resetInput();
  };

  const onSignInClickHandler = async () => {
    container.classList.remove('right-panel-active');
    resetInput();
  };

  const onLoginHandler = () => {
    resetInput();
  };
  return (
    <div className="">
      <div className="container" id="container">
        <div className="form-container sign-up-container">
          <form className="form-style" action="#">
            <h1>Create Account</h1>
            <div>
              <input className="auth-input" type="text" placeholder="Name" value={name} onChange={onChangeNameHandler} />
              <input className="auth-input" type="email" placeholder="Email" value={email} onChange={onChangeEmailHandler} />
              <input className="auth-input" type="password" placeholder="Password" value={password} onChange={onChangePasswordHandler} />
            </div>
            <button className="btn-auth" type="button">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-style" action="#">
            <h1>Sign in</h1>
            <div>
              <input className="auth-input" type="email" placeholder="Email" value={email} onChange={onChangeEmailHandler} />
              <input className="auth-input" type="password" placeholder="Password" value={password} onChange={onChangePasswordHandler} />
              <Link to="/">Forgot your password?</Link>
            </div>
            <button className="btn-auth" type="button" onClick={onLoginHandler}>Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="btn-auth ghost" type="button" id="signIn" onClick={onSignInClickHandler}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="btn-auth ghost" type="button" id="signUp" onClick={onSignUpClickHandler}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;