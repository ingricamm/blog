import "./style/navBar.css";
import logo from "./img/Logo.png";
import Searchbox from "./Searchbox";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/*Links */

const navigation = [
  { name: "Inicio", href: "/", current: false },
  { name: "Restaurantes", href: "/restaurantes", current: false },
  { name: "Recetas", href: "/recetas", current: true },
  // { name: "Repository", href: "/repository", current: false },
  { name: "Contacto", href: "/contact", current: false },
];

function Navbar() {
  /* PARA DISEÑO RESPONSIVE  */

  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  /* Muestra o esconde el fondo de la pantalla de acuerdo al estado del boton*/
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  /*Cerrar  responsive navbar con un click en home  */
  const cerrarNav = () => {
    setToggleMenu(false) ;
  };
  /*toma el tamaño de  la pantalla */
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <>
      <div className="navBar">
        <div className="ppal">
          <Link to="/" className="logo" onClick={cerrarNav}>
            <img src={logo} alt="logo" />
          </Link>
          <button className="burger-Btn" onClick={toggleNav}>
            <i className="fa fa-bars"></i>
          </button>
        </div>

        <nav className="App-Navbar">
          {(toggleMenu || screenWidth > 600) && (
            <ul>
              <li>
                <Searchbox />{" "}
              </li>

              {navigation.map((item) => (
                <li onClick={toggleNav}>
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
