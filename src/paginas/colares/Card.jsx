
export default function ProductCard(product, handleClick) {
  const {name,price,image}=product;
    return (
      <div className="product-cardal">
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <p className='price'>POR:{price}</p>
        <button className='comprar' onClick={handleClick(product)} >Comprar</button>
      </div>
    );
  }