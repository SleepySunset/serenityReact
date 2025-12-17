import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const localCart = localStorage.getItem("cart");
      return localCart ? JSON.parse(localCart) : {};
    } catch (error) {
      console.error("Error al parsear el carrito del localStorage:", error);
      return {};
    }
  });
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://serenitybackend-jdok.onrender.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const prepared = data.map((p) => ({
          ...p,
          imgSrc: `https://serenitybackend-jdok.onrender.com/products/${p.id}/image`,
          imgAlt: p.title,
        }));

        setProducts(prepared);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    const id = String(productId);
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (productId) => {
    const id = String(productId);
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[id] > 1) {
        updated[id] -= 1;
      } else {
        delete updated[id];
      }
      return updated;
    });
  };

  const getProductById = (id) => products.find((p) => p.id === Number(id));

  const cartItems = Object.keys(cart)
    .map((id) => {
      const product = getProductById(id);
      if (!product) return null;
      return {
        ...product,
        quantity: cart[id],
      };
    })
    .filter(Boolean);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const createOrder = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Creando orden con:", cartItems);
        const orderId = Math.floor(Math.random() * 1000000);
        setCart({});
        resolve({ id: orderId, items: cartItems, total });
      }, 1500);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        total,
        products,
        loading,
        error,
        handleAddToCart,
        handleRemoveFromCart,
        getProductById,
        createOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
