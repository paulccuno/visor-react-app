import Login from "../Login";

import logoOntario from "../../assets/images/logo-losfrutales-512x512.webp";
import "./styles.css";
// import ButtonPdf from "../General/Pdf/ButtonPdf";
import { useContext } from "react";
import LoginContext from "../../contexts/LoginContext";

export default function Header() {
  const { token, setToken } = useContext(LoginContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <header className="Header">
        <div className="Header-container">
          <div className="Header__left">
            <img
              className="logo-LosFrutales"
              alt="logo-losfrutales"
              src={logoOntario}
            />
          </div>
          <div className="Header__right">
            {/* <ButtonPdf /> */}
            {token ? (
              <button className="button-login" onClick={handleLogout}>
                CERRAR SESIÓN
              </button>
            ) : (
              <Login />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
