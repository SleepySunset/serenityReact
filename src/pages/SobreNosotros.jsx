import Card from '../components/Card';

function SobreNosotros() {
  return (
    <main>
      <div className="main-container">
        <div>
          <h2 className="main-title">¿Quiénes somos?</h2>
          <p className="card-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            consequuntur reiciendis ratione magni distinctio minima dolorum
            tempora iure beatae aperiam, quaerat recusandae voluptate ad
            tempore, maiores laboriosam non rerum possimus.
          </p>
          <h2>Nuestras profesionales</h2>
        </div>

        <div className="prof-container">
          <Card
            imgSrc="/img/employee1.jpg"
            imgAlt="Imagen Servicios"
            title="Laura García"
            description="Cosmetóloga graduada del Instituto Nacional de Cosmetología y Estética Atenea con más de 5 años de experiencia. Especialista en tratamientos no invasivos para el cuidado de la piel y artista de uñas."
          />
          <Card
            imgSrc="/img/employee2.jpg"
            imgAlt="Imagen Opiniones"
            title="Eliana García"
            description="Brow artist con más de dos años de experiencia. Especialista en diseño y depilación de cejas con múltiples técnicas, micropigmentación y lifting de cejas y pestañas."
          />
        </div>
      </div>
    </main>
  );
}

export default SobreNosotros;