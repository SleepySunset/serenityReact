import Card from '../components/Card';

function Servicios() {
  const services = [
    {
      imgSrc: "/img/eyebrows.jpg",
      imgAlt: "Imagen Depilación de Cejas",
      title: "Diseño y depilación de cejas",
      description: "Luce unas hermosas cejas que se adapten a la forma de tu rostro",
      price1: "$17000 sólo depilación",
      price2: "$23000 depilación y sombreado"
    },
    {
      imgSrc: "/img/relaxation.jpg",
      imgAlt: "Imagen Masaje de Relajación",
      title: "Masaje de relajación",
      description: "Reduce tus niveles de estrés y dedícate ese tiempo que tanto te mereces",
      price1: "$60.000 por sesión",
      price2: "$500.000 paquete"
    },
    {
      imgSrc: "/img/tanning.jpg",
      imgAlt: "Imagen Bronceado con Aerógrafo",
      title: "Bronceado con aerógrafo",
      description: "Lleva el dorado del sol en tu piel y siéntete en verano en cualquier época del año",
      price1: "$80.000 por sesión",
      price2: "$700.000 paquete"
    },
    {
      imgSrc: "/img/nails.jpg",
      imgAlt: "Imagen Uñas en Polygel",
      title: "Montaje de uñas en polygel",
      description: "Lleva tus uñas a otro nivel con el diseño que quieras con esta novedosa técnica",
      price1: "$80.000 por sesión"
    },
    {
      imgSrc: "/img/reduction.jpg",
      imgAlt: "Imagen Masaje de Reducción",
      title: "Masaje de reducción",
      description: "Reduce medidas y moldea tu cuerpo gracias a nuestras técnicas no invasivas",
      price1: "$70.000 por sesión",
      price2: "$600.000 paquete"
    }
  ];

  return (
    <main>
      <div className="main-container">
        <div>
          <h2 className="main-title">Nuestros servicios</h2>
          <p className="card-desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
            consequuntur reiciendis ratione magni distinctio minima dolorum
            tempora iure beatae aperiam, quaerat recusandae voluptate ad
            tempore, maiores laboriosam non rerum possimus.
          </p>
        </div>

        <div className="services-container">
          {services.map((service, index) => (
            <Card
              key={index}
              imgSrc={service.imgSrc}
              imgAlt={service.imgAlt}
              title={service.title}
              description={service.description}
            >
              {service.price1 && <p>{service.price1}</p>}
              {service.price2 && <p>{service.price2}</p>}
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Servicios;