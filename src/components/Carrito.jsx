import { useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Carrito({ onClose }) {
  const panelRef = useRef(null);
  const { cartItems, total, handleAddToCart, handleRemoveFromCart } = useCart();

  const handleOverlayClick = (e) => {
    if (!panelRef.current.contains(e.target)) {
      onClose();
    }
  };

  const navigate = useNavigate();

  return (
    <div className="carrito-overlay" onClick={handleOverlayClick}>
      <div className="carrito-panel" ref={panelRef}>
        <header className="carrito-header">
          <h3>Tu carrito</h3>
          <button className="close-button" onClick={onClose}>
            ✕
          </button>
        </header>

        <div className="carrito-content">
          {cartItems.length === 0 ? (
            <p className="carrito-empty">Tu carrito está vacío 🥺</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="carrito-item">
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className="carrito-item-img"
                />

                <div className="carrito-item-info">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price.toLocaleString()}</p>

                  <div className="quantity-controls">
                    <button
                      className="quantity-button"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      className="quantity-button"
                      onClick={() => handleAddToCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <footer className="carrito-footer">
            <div className="carrito-total">
              <span>Total</span>
              <strong>${total.toLocaleString()}</strong>
            </div>

            <button
              className="checkout-btn"
              onClick={() => {
                onClose();
                navigate("/pago");
              }}
            >
              Finalizar compra
            </button>
          </footer>
        )}
      </div>
    </div>
  );
}

export default Carrito;
