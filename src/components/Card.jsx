function Card({ imgSrc, imgAlt, title, description, price, onAddToCart, onRemoveFromCart, showCartButtons = false, quantity = 0, children }) {
  return (
    <div className="card-container">
      <img className="card-img" src={imgSrc} alt={imgAlt} />

      <div className="card-text">
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        {price !== undefined && price !== null && (
          <p className="card-price">${price.toFixed(2)}</p>
        )}

        {children && (
          <div className="card-extra">
            {children}
          </div>
        )}

        {showCartButtons && (
          <div className="card-actions">
            <button onClick={onRemoveFromCart}>-</button>
            <span className="product-quantity">{quantity}</span>
            <button onClick={onAddToCart}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;