function MiCuenta() {
  return (
    <main className="cuenta-container">
      <h2>Mi cuenta</h2>

      <section className="cuenta-card">
        <h3>Información personal</h3>

        <div className="cuenta-row">
          <span>Nombre</span>
          <span>Luisa García</span>
        </div>

        <div className="cuenta-row">
          <span>Email</span>
          <span>luisa@email.com</span>
        </div>

        <div className="cuenta-row">
          <span>Teléfono</span>
          <span>+57 300 123 4567</span>
        </div>
      </section>

      <section className="cuenta-card">
        <h3>Dirección de envío</h3>

        <div className="cuenta-row">
          <span>Dirección</span>
          <span>Calle 123 #45-67</span>
        </div>

        <div className="cuenta-row">
          <span>Ciudad</span>
          <span>Bogotá</span>
        </div>

        <div className="cuenta-row">
          <span>Departamento</span>
          <span>Cundinamarca</span>
        </div>
      </section>

      <section className="cuenta-card">
        <h3>Preferencias</h3>

        <div className="cuenta-row">
          <span>Notificaciones</span>
          <span>Activadas</span>
        </div>

        <div className="cuenta-row">
          <span>Método de pago favorito</span>
          <span>Tarjeta</span>
        </div>
      </section>
    </main>
  );
}

export default MiCuenta;
