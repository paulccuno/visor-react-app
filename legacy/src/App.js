import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import LoginContext from "./contexts/LoginContext";
import LotesContext from "./contexts/LotesContext";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const [lotes, setLotes] = useState([]);

  return (
    <div className="App">
      <LoginContext.Provider value={{ token, setToken }}>
        <LotesContext.Provider value={{ lotes, setLotes }}>
          <Header />
          <Main />
        </LotesContext.Provider>
      </LoginContext.Provider>
    </div>
  );
}

export default App;
