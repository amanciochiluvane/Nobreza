import Header from "../../components/header/Header"

import brinco1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/NE11.jpg?width=225';
import brinco2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/par_de_brincos.jpg?width=225';
import brinco3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/NE13.jpg?width=400&quality=100';
import brinco4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/par_de_brincos_ouro_SA.jpg?width=400&quality=100';
import brinco5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/NE14.jpg?width=400&quality=100';
import brinco6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brinco_ouro_SA.jpg?width=400&quality=100';
import brinco7 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/NE17.jpg?width=400&quality=100';
import brinco8 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brincos_de_bola_e_pedra_ouro_SA.jpg?width=400&quality=100';
import brinco9 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brincos_de_bola_fecho_borboleta.jpg?width=400&quality=100';
import brinco10 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/NE20.jpg?width=400&quality=100';
import brinco11 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brincos_de_estrelas_com_pedrinhas.jpg?width=400&quality=100';
import brinco12 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brincos_de_coracao_com_pedrinhas.jpg?width=400&quality=100';
import brinco13 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/brincos_de_pedra.jpg?width=400&quality=100';
import brinco14 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/br/par_de_brincos_ouro_SA2.jpg?width=400&quality=100';
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


export default function Brincos(){
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

    const products=[
        {
            id: 48,
            name: 'Par de Brinco NE11',
            price: '00.000MT',
            image: brinco1,
          },
          {
            id: 49,
            name: 'Par de Brincos',
            price: '7.000MT',
            image: brinco2,
          },
          {
            id: 50,
            name: 'Par de Brincos NE13',
            price: '00.000MT',
            image: brinco3,
          },
          {
            id: 51,
            name: 'Par de Brincos, Ouro SA',
            price: '12.000MT',
            image: brinco4,
          },
          {
            id: 52,
            name: 'Par de Brincos, Ouro SA NE14',
            price: '00.000MT',
            image: brinco5,
          },
          {
            id: 53,
            name: 'Par de Brinco NE16',
            price: '00.000MT',
            image: brinco6,
          },
          {
            id: 54,
            name: 'Par de Brincos NE17',
            price: '00.000MT',
            image: brinco7,
          },
          {
            id: 55,
            name: 'Brincos de Bola e Pedra, Ouro SA',
            price: '7.700MT',
            image: brinco8,
          },
          {
            id: 56,
            name: 'Brincos de Bola, Fecho Borboleta',
            price: '4.500MT',
            image: brinco9,
          },
          {
            id: 57,
            name: 'Par de Brincos NE20',
            price: '00.000MT',
            image: brinco10,
          },
          {
            id: 58,
            name: 'Brincos de Estrelas com Pedrinhas',
            price: '6.000MT',
            image: brinco11,
          },
          {
            id: 59,
            name: 'Brincos de Coração com Pedrinhas',
            price: '6.000MT',
            image: brinco12,
          },
          {
            id: 60,
            name: 'Brincos de Pedra',
            price: '4.500MT',
            image: brinco13,
          },
          {
            id: 61,
            name: 'Par de Brincos, Ouro SA',
            price: '5.500MT',
            image: brinco14,
          },
    ];
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
    <div className="brincos">
        <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
        <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/colares">brincos</a></p>

        <div className="titpagina">
            <h2>Brincos</h2>
        </div>
        <div className={showCart ? "overlay" : "invisivel"}></div>
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



                <div className={showCart?"Cardd":"invisivel"}>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart}/>
            </div>

          <Footer/>
            
    </div>
)}