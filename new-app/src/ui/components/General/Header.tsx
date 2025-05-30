import logo from '../../../assets/logo-losfrutales-512x512.webp'

export const Header = () => {
  return (
    <>
      <header className="Header min-w-[400px] min-h-[70px]">
        <div className="Header-container w-full h-full flex justify-between items-center py-4 px-2">
          <div className="Header__left flex items-center pl-4">
            <img
              src={logo}
              alt="logo-losfrutales"
              className="logo-LosFrutales object-cover h-[65px] w-[92px]"
            />
          </div>
          <div className="Header__right flex items-center pr-4 gap-[10px]">
            <button className="button-login">CERRAR SESIÓN</button>
          </div>
        </div>
      </header>
    </>
  )
}
