import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Pago() {
  const { cartItems, total, createOrder } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    direccion: "",
    ciudad: "",
    departamento: "",
    notas: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const order = await createOrder();

  navigate("/pedido-exitoso", {
    state: {
      formData,
      cartItems: order.items,
      total: order.total,
      orderId: order.id,
    },
  });
};


  return (
    <main className="pago-container">
      <h2>Datos de envío</h2>

      <form className="pago-form" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Nombre completo" required onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required onChange={handleChange} />
        <input name="telefono" placeholder="Teléfono" required onChange={handleChange} />
        <input name="direccion" placeholder="Dirección" required onChange={handleChange} />
        <input name="ciudad" placeholder="Ciudad" required onChange={handleChange} />
        <input name="departamento" placeholder="Departamento" required onChange={handleChange} />
        <textarea name="notas" placeholder="Notas adicionales" onChange={handleChange} />

        <div className="pago-resumen">
          <h3>Resumen</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="resumen-item">
              <span>
                {item.title} x{item.quantity}
              </span>
              <span>${(item.price * item.quantity).toLocaleString()}</span>
            </div>
          ))}

          <div className="resumen-total">
            <div className="resumen-item">
              <strong>Total</strong>
              <strong>${total.toLocaleString()}</strong>
            </div>
            <button type="submit" className="checkout-btn">
              Confirmar pedido
            </button>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Pago;
