/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import LOGOAGUA from '../images/LOGOAGUA.png';
import MyContext from '../context/MyContext';

import '../Style/login.css';

const MIN_CHARACTER = 5;

const Login = () => {
  const { loginButtonDisabled,
    setloginButtonDisabled,
    verifyEmail,
    setverifyEmail,
    verifyPassword,
    setverifyPassword } = useContext(MyContext);

  // valida via regex o padrao para o email
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  // hook para mudança de pagina
  const history = useHistory();

  // altera o botao entrar para true após as validações
  const changeButtonState = ({ target }) => {
    if (target.type === 'email') {
      setverifyEmail({ email: target.value });
      const emailVerified = validateEmail(verifyEmail.email);
      if (emailVerified && verifyPassword.password.length > MIN_CHARACTER) {
        setloginButtonDisabled(false);
      } else {
        setloginButtonDisabled(true);
      }
    } else {
      setverifyPassword({ password: target.value });
      const emailVerified = validateEmail(verifyEmail.email);
      if (emailVerified && verifyPassword.password.length > MIN_CHARACTER) {
        setloginButtonDisabled(false);
      } else {
        setloginButtonDisabled(true);
      }
    }
  };

  // salva no localstorage após o submit
  const handleSubmit = () => {
    localStorage.setItem('mealsToken', JSON.stringify(1));
    localStorage.setItem('cocktailsToken', JSON.stringify(1));
    localStorage.setItem('user', JSON.stringify(verifyEmail));
    history.push('/Menu');
  };

  return (
    <form className="container-login">
      <div className="figure">
        <img src={ LOGOAGUA } alt="imgExplore" />
      </div>
      <div
        className="container-input"
      >
        <input
          className="container-email"
          type="email"
          data-testid="email-input"
          onChange={ changeButtonState }
        />
        <input
          className="container-senha"
          type="password"
          data-testid="password-input"
          onChange={ changeButtonState }
        />
      </div>
      <button
        className="container-button"
        type="button"
        data-testid="login-submit-btn"
        disabled={ loginButtonDisabled }
        onClick={ handleSubmit }
      >
        Acceder
      </button>
    </form>
  );
};
export default Login;
