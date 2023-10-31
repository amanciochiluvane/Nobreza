import Header from "../../components/header/Header";
import { useState,useEffect } from "react";


import './Colares.css'
import Cart from "./Cart";

import { saveCartItems,loadCartItems } from "../Cartstorage";  
import Footer from "../../components/footer/footer";
import {client} from '../../../lib/client'

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
    const [products, setProducts] = useState([]);
    useEffect(() => { 
      const storedCartItems = loadCartItems();
        setCartItems(storedCartItems);
      
    }, []);
    useEffect(() => {
      const query = `*[_type == "colares"]{
        nome,
        preco,
        "image": image.asset->url
      }`;
      client.fetch(query).then((data) => setProducts(data));
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
    const removeFromCart = (product) => {
      const updatedCart = cartItems.filter((item) => item !== product);
      setCartItems(updatedCart);
      saveCartItems(updatedCart);
    };
  

    const [isSearching, setIsSearching] = useState(false);
const [searchQuery, setSearchQuery] = useState('');
const handleSearch = (event) => {
    // Atualize o estado da pesquisa com o valor do campo de pesquisa
    setSearchQuery(event.target.value);
    setIsSearching(event.target.value !== '');
  };
const filteredProducts = products.filter((product) =>
    product.nome.toLowerCase().includes(searchQuery.toLowerCase())
  );

  function formatNumberWithCommas(number) {
    // Converte o número para string
    const numStr = number.toString();
  
    // Divide a string em partes de três dígitos a partir da direita
    const parts = [];
    let i = numStr.length;
    while (i > 0) {
      const chunk = numStr.substring(Math.max(0, i - 3), i);
      parts.unshift(chunk); // Adiciona a parte no início do array
      i -= 3;
    }
  
    // Junta as partes com vírgulas
    return parts.join(',');
  }

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
                            name={product.nome}
                            price={formatNumberWithCommas(product.preco) + "MT"}
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
            name={product.nome}
            price={formatNumberWithCommas(product.preco) + "MT"}
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