import Card from '../components/Card';
import { useCart } from '../context/CartContext';

function Productos() {
  const { products, handleAddToCart, handleRemoveFromCart, loading, error, cart } = useCart();

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  if (error) {
    return <p>Error al cargar los productos: {error.message}</p>;
  }

  return (
    <main>
      <div className="main-container">
        <div>
          <h2 className="main-title">Nuestros productos</h2>
          <p className="card-desc">
            Encuentra los mejores productos para cuidar tu piel, resaltar tu
            belleza y consentirte como lo mereces.
          </p>
        </div>

        <div className="services-container">
          {products.map((product) => (
            <Card
              key={product.id}
              imgSrc={product.imgSrc}
              imgAlt={product.imgAlt}
              title={product.title}
              description={product.description}
              price={product.price}
              onAddToCart={() => handleAddToCart(product.id)}
              onRemoveFromCart={() => handleRemoveFromCart(product.id)}
              showCartButtons={true}
              quantity={cart[String(product.id)] || 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Productos;