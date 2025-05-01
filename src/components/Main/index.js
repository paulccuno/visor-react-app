import Panel from "./Panel";

//import logoLosFrutales from "../../assets/images/logo-losfrutales-400x202.webp";
import "./styles.css";

export default function Main() {
  return (
    <>
      <main className="Main">
        <header className="Main__header">
         {/* <img className="logo-project" alt="logo-losfrutales" src={logoLosFrutales} />*/}
        </header>
        <Panel />
      </main>
    </>
  );
}
