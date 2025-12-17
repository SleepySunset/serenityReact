import Carousel from '../components/Carousel';
import Card from '../components/Card';

function Home() {
  return (
    <main className='home'>
      <Carousel />
      <Card
        imgSrc="/img/serenity.jpg"
        imgAlt="Imagen Serenity"
        title="Conoce Serenity Estética, tu mejor opción de cuidado personal"
        description="Somos tu centro de estética de confianza, donde podrás consentirte y resaltar tu belleza."
      />
      <Card
        imgSrc="/img/services.jpg"
        imgAlt="Imagen Servicios"
        title="Nuestros Servicios"
        description="En Serenity encontrarás todo lo que necesitas para tu cuidado personal: Procedimientos estéticos con técnicas no invasivas, diseño y depilación de cejas, aplicación de extensiones de pestañas, múltiples técnicas de maquillaje de uñas, bronceados libres de rayos UV y auriculoterapia."
      />
      <Card
        imgSrc="/img/rating.jpg"
        imgAlt="Imagen Opiniones"
        title="Lo que nuestros clientes piensan de nosotros"
        description="Nuestra motivación es llevar felicidad a nuestros usuarios. Aquí encontrarás algunos de los mensajes más especiales que nos han enviado."
      />
      <Card
        imgSrc="/img/products.jpg"
        imgAlt="Imagen Productos"
        title="Cuídate en casa"
        description="Con nuestros productos y asesoría podrás realizarte tratamientos en casa de forma rápida y efectiva. ¡Combínalos con nuestros procedimientos para conseguir los mejores resultados!"
      />
    </main>
  );
}

export default Home;