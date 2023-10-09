import Header from "../../components/header/Header";
import { useState,useEffect } from "react";
import an45 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_personalizado.jpg?width=225';
import an46 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_feminino_com_medalha_ouro_SA.jpg?width=225';
import an47 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_feminino_com_medalha_ouro_SA2.jpg?width=400&quality=100';
import an48 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_feminino_com_medalha.jpg?width=400&quality=100';
import an49 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_medio_com_pedra_ametista.jpg?width=400&quality=100';
import an50 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_medio_compedra_Esmeralda.jpg?width=400&quality=100';
import an51 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_medio.jpg?width=400&quality=100';
import an52 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_medio2.jpg?width=400&quality=100';
import an53 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/fio_masculino_ouro_SA_50cm.jpg?width=400&quality=100';
import an54 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/fio_masculino_55cm.jpg?width=400&quality=100';
import an55 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/fiio_masculino_ouro_SA.jpg?width=400&quality=100';
import an56 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/cl/colar_feminino.jpg?width=400&quality=100';

import './Colares.css'
import Cart from "./Cart";

import { saveCartItems,loadCartItems } from "../Cartstorage";  
import Footer from "../../components/footer/footer";

  // Função para adicionar itens ao carrinho
 
  /*function ProductCard(props) {
  
  
  

    return (
      <div className="product-cardal">
        <img src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <p className='price'>POR:{props.price}</p>
        <button className='comprar'  >Comprar</button>
      </div>
    );
  }*/
  
 

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

  // Função para adicionar itens ao carrinho
 
  export default function Colares(){
    
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
            id: 3689,
            name: 'Colar Personalizado',
            price: '00.000MT',
            image: an45,
          },
          {
            id: 3789,
            name: 'Colar Feminino com Medalha, Ouro SA',
            price: '12.000MT',
            image: an46,
          },
          
          {
            id: 3989,
            name: 'Colar Feminino com Medalha',
            price: '9.000MT',
            image: an48,
          },
          {
            id: 4089,
            name: 'Colar Médio com Pedra Ametista',
            price: '12.500MT',
            image: an49,
          },
          {
            id: 4189,
            name: 'Colar Médio com Pedra Esmeralda',
            price: '12.500MT',
            image: an50,
          },
          {
            id: 4289,
            name: 'Colar Médio',
            price: '10.000MT',
            image: an51,
          },
          {
            id: 4389,
            name: 'Colar Médio',
            price: '10.000MT',
            image: an52,
          },
          {
            id: 4489,
            name: 'Fio Masculino, Ouro SA, 50cm',
            price: '30.000MT',
            image: an53,
          },
          {
            id: 4589,
            name: 'Fio Masculino, 55cm',
            price: '30.000MT',
            image: an54,
          },
          {
            id: 4689,
            name: 'Fio Masculino, Ouro SA',
            price: '65.000MT',
            image: an55,
          },
          {
            id: 4789,
            name: 'Colar Feminino',
            price: '10.000MT',
            image: an56,
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
    <div className="colares">

<Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>

        <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/colares">colares</a></p>
        
        <div className={showCart ? "overlay" : "invisivel"}></div>

        <div className="titpagina">
            <h2>Colares</h2>
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


            <div className={showCart?"Cardd":"invisivel"}>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart}/>
            </div>
             
            <Footer/>
    </div>
)}