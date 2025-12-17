function HistorialPedidos() {
  return (
    <main className="historial-container">
      <h2>Historial de pedidos</h2>

      <section className="pedido-card">
        <div className="pedido-header">
          <div>
            <strong>Pedido #102345</strong>
            <p className="pedido-fecha">12 de marzo de 2025</p>
          </div>
          <span className="pedido-estado entregado">Entregado</span>
        </div>

        <div className="pedido-body">
          <p>Crema hidratante x2</p>
          <p>Serum facial x1</p>
        </div>

        <div className="pedido-footer">
          <span>Total</span>
          <strong>$145.000</strong>
        </div>
      </section>

      <section className="pedido-card">
        <div className="pedido-header">
          <div>
            <strong>Pedido #101876</strong>
            <p className="pedido-fecha">28 de febrero de 2025</p>
          </div>
          <span className="pedido-estado en-camino">En camino</span>
        </div>

        <div className="pedido-body">
          <p>Protector solar x1</p>
        </div>

        <div className="pedido-footer">
          <span>Total</span>
          <strong>$52.000</strong>
        </div>
      </section>

      <section className="pedido-card">
        <div className="pedido-header">
          <div>
            <strong>Pedido #100432</strong>
            <p className="pedido-fecha">10 de enero de 2025</p>
          </div>
          <span className="pedido-estado cancelado">Cancelado</span>
        </div>

        <div className="pedido-body">
          <p>Mascarilla facial x3</p>
        </div>

        <div className="pedido-footer">
          <span>Total</span>
          <strong>$90.000</strong>
        </div>
      </section>
    </main>
  );
}

export default HistorialPedidos;
