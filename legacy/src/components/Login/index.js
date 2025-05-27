import { useState } from "react";

import LoginForm from "./LoginForm";

import "./stlyes.css";

export default function Login({ show = false }) {
  const [loginShowed, setLoginShowed] = useState(show);

  const handleLoginButton = () => {
    setLoginShowed(!loginShowed);
  };

  return (
    <>
      <button className="button-login" onClick={handleLoginButton}>
        INICIAR SESIÓN
      </button>
      {loginShowed && (
        <div className={`Login${loginShowed ? " show" : ""}`}>
          <div className="Login-container">
            <div className="Login__body">
              <LoginForm loginShowed={loginShowed} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
