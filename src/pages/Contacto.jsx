import { useState } from "react";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <main>
      <div className="main-container">
        {!enviado ? (
          <>
            <h2 className="form-title">Ponte en contacto con nosotras</h2>
            <p className="form-desc">
              Déjanos tu mensaje y nos pondremos en contacto lo antes posible para
              ayudarte a brillar ✨
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  placeholder="tuemail@ejemplo.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  placeholder="Ej: 3001234567"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Enviar mensaje
              </button>
            </form>
          </>
        ) : (
          <div className="thank-you-message">
            <h2>¡Gracias por tu mensaje! 💖</h2>
            <p>
              Hemos recibido tu información y nos pondremos en contacto contigo
              muy pronto ✨
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Contacto;
