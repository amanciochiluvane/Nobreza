import Header from "../../components/header/Header";



import './Aneis.css'
import Footer from "../../components/footer/footer";
import { useState,useEffect} from 'react';


import { saveCartItems,loadCartItems } from "../Cartstorage";
import Cart from "../colares/Cart";

import {client} from '../../../lib/client'
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


export default function Aneis(){
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => { 
    const storedCartItems = loadCartItems();
      setCartItems(storedCartItems);
    
  }, []);
 
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const query = `*[_type == "aliancas2"]{
      nome,
      preco,
      "image": image.asset->url
    }`;
    client.fetch(query).then((data) => setProducts(data));
  }, []);
 
  // Função para adicionar um item ao carrinho
  const addToCart = (product) => {
    toggleCart();
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
        <div className="aneis">
           <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
            <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/aneis">anéis</a></p>

            <div className="titpagina">
                <h2>Anéis</h2>
            </div>
            <div className={showCart ? "overlay" : "invisivel"}></div>
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


                <div className="naveg">
                  <a href="/aneis2"><button>2</button></a>
                  <a href="/aneis3"><button>3</button></a>
                </div>
                <Footer/>
        </div>
    )
}