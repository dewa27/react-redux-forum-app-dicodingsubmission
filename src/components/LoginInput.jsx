import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

function LoginInput({ onLogin, currentPage }) {
  const [email, onChangeEmailHandler, setEmail] = useInputValue();
  const [password, onChangePasswordHandler, setPassword] = useInputValue();

  const resetInput = () => {
    setEmail(() => '');
    setPassword(() => '');
  };

  useEffect(() => {
    resetInput();
  }, [currentPage]);
  const onLoginHandler = () => {
    onLogin({ email, password });
    resetInput();
  };
  return (
    <>
      <div>
        <input id="signInEmail" className="auth-input" type="email" placeholder="Email" value={email} onChange={onChangeEmailHandler} />
        <input id="signInPassword" className="auth-input" type="password" placeholder="Password" value={password} onChange={onChangePasswordHandler} />
      </div>
      <button className="btn-auth" type="button" onClick={onLoginHandler}>Sign In</button>
    </>
  );
}
LoginInput.propTypes = {
  onLogin: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};
export default LoginInput;
