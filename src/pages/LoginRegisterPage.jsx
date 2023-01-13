/* eslint-disable no-console */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { asyncRegisterUser } from '../states/user/action';
import LoginInput from '../components/LoginInput';
import RegisterInput from '../components/RegisterInput';

function LoginRegisterPage() {
  const ref = useRef(null);
  const [currentPage, setCurrentPage] = useState('signIn');
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentPage === 'signIn') {
      ref.current.classList.remove('right-panel-active');
    } else {
      ref.current.classList.add('right-panel-active');
    }
  }, [currentPage]);

  const onChangePage = (e) => {
    setCurrentPage(() => e.target.id);
  };

  const onLoginHandler = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  const onRegisterHandler = ({ email, name, password }) => {
    dispatch(asyncRegisterUser({ email, name, password }));
  };
  return (
    <div className="">
      <div className="container" id="container" ref={ref}>
        <div className="form-container sign-up-container">
          <form className="form-style" action="#">
            <h1>Create Account</h1>
            <RegisterInput onRegister={onRegisterHandler} currentPage={currentPage} />
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form className="form-style" action="#">
            <h1>Sign in</h1>
            <LoginInput onLogin={onLoginHandler} currentPage={currentPage} />
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>Please login with your account</p>
              <button className="btn-auth ghost" type="button" id="signIn" onClick={onChangePage}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start making discussions with others</p>
              <button className="btn-auth ghost" type="button" id="signUp" onClick={onChangePage}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginRegisterPage;
