import Header from "../../components/header/Header";

import an37 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_base_bedonda.jpg?width=225';
import an38 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_Garras_Base_Redonda.jpg?width=225';
import an39 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_Garras_Base_Redonda_Ouro_SA.jpg?width=400&quality=100';
import an40 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_fosco.jpg?width=400&quality=100';
import an41 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_3_garras_com_pedra_de_coracao_e_aro_super_oval.jpg?width=400&quality=100';
import an42 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_3_garras_com_pedra_de_coração_e_aro_super_oval_ouro_SA.jpg?width=400&quality=100';
import an43 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_cavalheiro.jpg?width=400&quality=100';
import an44 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_cavalheiro_ouro_SA.jpg?width=400&quality=100';

import { useState,useEffect} from 'react';


import { saveCartItems,loadCartItems } from "../Cartstorage";


import Cart from "../colares/Cart";
import Footer from "../../components/footer/footer";

function ProductCard(props) {
    
  return (
    <div className="product-cardal">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p className='price'>POR:{props.price}</p>
      <button className='comprar' onClick={props.addToCart}>Comprar</button>
    </div>
  );
}

export default function Aneis3(){
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => { 
    const storedCartItems = loadCartItems();
      setCartItems(storedCartItems);
    
  }, []);
 
  
  // Função para adicionar um item ao carrinho
  const addToCart = (product) => {
     
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    
    // Salve o carrinho após a atualização do estado
    saveCartItems(updatedCart);
    
  };
  const [showCart, setShowCart] = useState(false);
  
  function toggleCart() {
    if(showCart==true){
      setShowCart(false);
    }
    else{
      setShowCart(true)
      
    }
  }

  // Função para remover um item do carrinho
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    saveCartItems(updatedCart)
  };
  

    const products =[
        {
            id: 134,
            name: 'Anel de 6 Garras Achatadas, Ouro SA',
            price: '9.200MT',
            image: an37,
          },
          {
            id: 234,
            name: 'Anel de 4 Garras, Base Redonda',
            price: '7.500MT',
            image: an38,
          },
          {
            id: 334,
            name: 'Anel de 4 Garras, Base Redonda, Ouro SA',
            price: '6.000MT',
            image: an39,
          },
          {
            id: 434,
            name: 'Anel de 4 Garras, com Fosco',
            price: '15.000MT',
            image: an40,
          },
          {
            id: 534,
            name: 'Anel de 3 Garras, com Pedra de Coração e Aro Super Oval',
            price: '10.000MT',
            image: an41,
          },
          {
            id: 634,
            name: 'Anel de 3 Garras, com Pedra de Coração e Aro Super Oval, Ouro SA',
            price: '11.000MT',
            image: an42,
          },
          {
            id: 734,
            name: 'Anel Cavalheiro',
            price: '20.000MT',
            image: an43,
          },
          {
            id: 834,
            name: 'Anel Cavalheiro, Ouro SA',
            price: '22.000MT',
            image: an44,
          },
    ]
    const [isSearching, setIsSearching] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const handleSearch = (event) => {
    // Atualize o estado da pesquisa com o valor do campo de pesquisa
    setSearchQuery(event.target.value);
    setIsSearching(event.target.value !== '');
  };
const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

return(
    <div className="aneis">
       <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
        <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/aneis3">anéis</a></p>

        <div className="titpagina">
            <h2>Anéis</h2>
        </div>

        <div className={isSearching ?"invisivel":"product-sectional"} id="normais" >
                    
                    {products.map((product) => (
                        <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        addToCart={() => addToCart(product)}
    />
  ))} 

            </div>

            <div className={isSearching ?"product-sectional":"invisivel"} id="pesquisados" >
              <h2 >Produtos pesquisados</h2>
    {filteredProducts.map((product) => (
      <ProductCard
        key={product.id}
        name={product.name}
        price={product.price}
        image={product.image}
        addToCart={() => addToCart(product)}
      />
    ))}
  </div>

                <div className={showCart ? "overlay" : "invisivel"}></div>
                <div className={showCart?"Cardd":"invisivel"}>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart}/>
            </div>

            <div className="naveg">
                  <a href="/aneis"><button>1</button></a>
                  <a href="/aneis2"><button>2</button></a>
                </div>

                <Footer/>
    </div>
)}