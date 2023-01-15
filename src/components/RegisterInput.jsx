/* eslint-disable no-console */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useInputValue from '../hooks/useInputValue';

function RegisterInput({ onRegister, currentPage }) {
  const [name, onChangeNameHandler, setName] = useInputValue();
  const [email, onChangeEmailHandler, setEmail] = useInputValue();
  const [password, onChangePasswordHandler, setPassword] = useInputValue();

  const resetInput = () => {
    setName(() => '');
    setEmail(() => '');
    setPassword(() => '');
  };

  useEffect(() => {
    resetInput();
  }, [currentPage]);

  const onRegisterHandler = () => {
    onRegister({ email, name, password });
    resetInput();
  };
  return (
    <>
      <div>
        <input id="signUpName" className="auth-input" type="text" placeholder="Name" value={name} onChange={onChangeNameHandler} />
        <input id="signUpEmail" className="auth-input" type="email" placeholder="Email" value={email} onChange={onChangeEmailHandler} />
        <input id="signUpPassword" className="auth-input" type="password" placeholder="Password" value={password} onChange={onChangePasswordHandler} />
      </div>
      <button className="btn-auth" type="button" onClick={onRegisterHandler}>Sign Up</button>
    </>
  );
}
RegisterInput.propTypes = {
  onRegister: PropTypes.func.isRequired,
  currentPage: PropTypes.string.isRequired,
};
export default RegisterInput;
