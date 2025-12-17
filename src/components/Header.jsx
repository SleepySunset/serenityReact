import { useState, useRef, useEffect } from "react";
import Carrito from "./Carrito";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const userMenuRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserOpen(false);
      }

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsUserOpen(false);
  };

  return (
    <header>
      <nav className="header-nav">
        <div className="brand-container">
          <img
            src="/img/logo.png"
            alt="Logo de Serenity Estética"
            className="header-logo"
          />
          <h1 className="header-title">Serenity Estética</h1>
        </div>
        <div ref={menuRef} className="nav-wrapper">
          <div
            className={`hamburger ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
            <li>
              <a className="nav-link" href="/inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="nav-link" href="/sobrenosotros">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a className="nav-link" href="/servicios">
                Servicios
              </a>
            </li>
            <li>
              <a className="nav-link" href="/productos">
                Productos
              </a>
            </li>
            <li>
              <a className="nav-link" href="/contacto">
                Contacto
              </a>
            </li>
            {isOpen && (
              <>
                <li className="mobile-user-menu">
                  <a
                    className="nav-link"
                    onClick={() => {
                      setIsCartOpen(!isCartOpen);
                      setIsOpen(false);
                    }}
                  >
                    Carrito
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/cuenta">
                    Cuenta
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="/historial-pedidos">
                    Historial de Pedidos
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="user-menu-container" ref={userMenuRef}>
          <button
            className="cart-menu-button"
            onClick={() => {
              setIsCartOpen(!isCartOpen);
              setIsUserOpen(false);
            }}
          >
            <img src="/img/cart.png" alt="Carrito" className="cart-icon" />
          </button>

          <button
            className="user-menu-button"
            onClick={() => setIsUserOpen(!isUserOpen)}
          >
            <img src="/img/user.png" alt="User" className="user-icon" />
          </button>
          {isUserOpen && (
            <div className="user-dropdown-content active">
              <a href="/cuenta">Cuenta</a>
              <a href="/historial-pedidos">Historial de Pedidos</a>
            </div>
          )}
        </div>
        {isCartOpen && <Carrito onClose={() => setIsCartOpen(false)} />}
      </nav>
    </header>
  );
}

export default Header;
