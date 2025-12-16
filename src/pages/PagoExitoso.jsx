import { useLocation, useNavigate } from "react-router-dom";

function PedidoExitoso() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <p>No hay información del pedido 💔</p>;
  }

  const { formData, cartItems, total, orderId } = state;

  return (
    <main className="exito-container">
      <h2>¡Pedido realizado con éxito! 🎉</h2>
      <p>Gracias por tu compra, {formData.nombre} 💖</p>

      <section className="exito-section">
        <h3>Datos de envío</h3>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {formData.telefono}
        </p>
        <p>
          <strong>Dirección:</strong> {formData.direccion}
        </p>
        <p>
          <strong>Ciudad:</strong> {formData.ciudad}
        </p>
        <p>
          <strong>Departamento:</strong> {formData.departamento}
        </p>
        {formData.notas && (
          <p>
            <strong>Notas:</strong> {formData.notas}
          </p>
        )}
      </section>

      <section className="exito-section">
        <h3>Resumen del pedido</h3>
        <p className="order-id">
          Número de pedido: <strong>#{orderId}</strong>
        </p>
        {cartItems.map((item) => (
          <div key={item.id} className="resumen-item">
            <span>
              {item.title} x{item.quantity}
            </span>
            <span>${(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}

        <div className="resumen-total">
          <strong>Total</strong>
          <strong>${total.toLocaleString()}</strong>
        </div>
      </section>

      <button onClick={() => navigate("/")} className="checkout-btn">
        Volver al inicio
      </button>
    </main>
  );
}

export default PedidoExitoso;
