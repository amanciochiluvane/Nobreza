import Header from "../../components/header/Header";
import all1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_onduladas_com_zircónias_5mm_ouro_prata.jpg?width=225'
import all2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_super_ovais_2.5mm_ouro_branco_com_banho_de_rodio.jpg?width=225'
import all3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliança_super_ovais_3.5mm_ouro_branco_com_banho_de_rodio.jpg?width=400&amp;quality=100'
import all4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_super_ovais_com_zircónia_3.5mm_ouro_branco_com_banho_de_rodio.jpg?width=400&amp;quality=100'
import all5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_super_ovais_3.5mm_ouro_SA.jpg?width=400&amp;quality=100'
import all6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_quadradas_4mm_ouro_SA.jpg?width=400&amp;quality=100'
import all7 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_tradicionais_5mm_ouro.jpg?width=400&amp;quality=100'
import all8 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_quadradas_6mm.jpg?width=400&amp;quality=100'
import all9 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_3_colour_com_ouro_branco_no_centro_6mm.jpg?width=400&amp;quality=100'
import all10 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/alianças_3_colour_com_fosco_diamantado_e_ouro_branco_no_centro_6mm.jpg?width=400&amp;quality=100'
import all11 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_onduladas_com_zirconias_5mm_ouro.jpg?width=400&amp;quality=100'
import all12 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_friso_lateral_e_zircônias_6mm_ouro.jpg?width=400&amp;quality=100'


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


export default function Aliancas2(){
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
            id: 123,
            name: "Alianças Onduladas com Zircónias, 5mm, Ouro e Prata",
            image: all1,
            price:"26.000MT"
        }, 
        {
            id: 223,
            name: "Alianças Super Ovais, 2.5mm, Ouro Branco com Banho de Ródio",
            image: all2,
            price: "20.300MT"
        }, 
        {
            id: 323,
            name: "Alianças Super Ovais, 3.5mm, Ouro Branco com Banho de Ródio",
            image: all3,
            price: "34.700MT"
        }, 
        {
            id: 423,
            name: "Alianças Super Ovais com Zircónia, 3.5mm, Ouro Branco com Banho de Ródio",
            image: all4,
            price: "36.000MT"
        }, 
        {
            id: 523,
            name: "Alianças Super Ovais, 3.5mm Ouro SA",
            image: all5,
            price: "29.400MT"   
        },
        {
            id: 623,
            name: "Alianças Quadradas, 5mm Ouro SA ",
            image: all6,
            price: "11.000MT"   
        },
        {
            id: 723,
            name: "Alianças Tradicionais, 5mm, Ouro SA",
            image: all7,
            price: "13.750MT"   
        },
        {
            id: 823,
            name: "Alianças Quadradas, 6mm",
            image: all8,
            price: "17.500MT"   
        },
        {
            id: 923,
            name: "Alianças 3 Colour, com Ouro Branco no Centro, 6mm",
            image: all9,
            price: "63.000MT"   
        },
        {
            id: 1023,
            name: "Alianças 3 Colour, com Fosco Diamantado e Ouro Branco no Centro, 6mm",
            image: all10,
            price: "65.000MT"   
        },
        {
            id: 1123,
            name: "Alianças Onduladas com Zircónias, 5mm, Ouro SA",
            image: all11,
            price: "36.000MT"   
        },
        {
            id: 1223,
            name: "Alianças com Friso Lateral e Zircônias, 6mm, Ouro SA",
            image: all12,
            price: "48.000MT"   
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
      
        <div className="aliancas">
            <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
            <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/aliancas2">alianças</a></p>

            <div className="titpagina">
                <h2>Alianças</h2>
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
            <div className={showCart ? "overlay" : "invisivel"}></div>


                <div className="proximo">
                  <a href="/aliancas"><button>Anterior</button></a>
                </div>
                <Footer/>
        </div>
    )
}