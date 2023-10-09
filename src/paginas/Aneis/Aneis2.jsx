import Header from "../../components/header/Header";
import an24 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_aro_super_oval_pedra_esmeralda_ouro_SA.jpg?width=225';
import an25 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_aro_super_oval_pedra_tanzanite.jpg?width=225';
import an26 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_aro_super_oval_pedra_tanzanite_2.jpg?width=400&quality=100';
import an27 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_aro_super_oval_ouro_branco.jpg?width=400&quality=100';
import an28 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_Garras_base_coroa_aro_super_oval_azual.jpg?width=400&quality=100';
import an29 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_pedra_garnet.jpg?width=400&quality=100';
import an30 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_pedra_garnet_SA.jpg?width=400&quality=100';
import an31 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_aro_e_pedra_quadrada.jpg?width=400&quality=100';
import an32 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_aro_e_pedra_quadrada_ouro_SA.jpg?width=400&quality=100';
import an33 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_aro_3_em_1.jpg?width=400&quality=100';
import an34 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_aro_3_em_1_ouro_SA.jpg?width=400&quality=100';
import an35 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_no.jpg?width=400&quality=100';

import an241 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_no_SA.jpg?width=400&quality=100';
import an251 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_cravacao_fenda.jpg?width=400&quality=100';
import an261 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_tiras.jpg?width=400&quality=100';
import an271 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_cravacao_fenda_2.jpg?width=400&quality=100';
import an281 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_gota_dagua_Ouro_SA.jpg?width=400&quality=100';
import an291 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_gota_dagua_ouro_branco_com_banho_de.jpg?width=400&quality=100';
import an301 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_triplex.jpg?width=400&quality=100';
import an311 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_triplex_ouro_SA.jpg?width=400&quality=100';
import an321 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_pedra_oval.jpg?width=400&quality=100';
import an331 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_com_pedra_ametista_oval.jpg?width=400&quality=100';
import an341 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_achatadas_ouro_SA.jpg?width=400&quality=100';

import Footer from "../../components/footer/footer";

import { useState,useEffect} from 'react';


import { saveCartItems,loadCartItems } from "../Cartstorage";



import Cart from "../colares/Cart";

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




export default function Aneis2(){
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
            id: 132,
            name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval, Pedra Esmeralda, Ouro SA',
            price: '8.750MT',
            image: an24,
          },
          {
            id: 232,
            name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval, Pedra Tanzanite, Ouro SA',
            price: '8.000MT',
            image: an25,
          },
          {
            id: 332,
            name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval, Pedra Tanzanite, Ouro SA',
            price: '8.750MT',
            image: an26,
          },
          {
            id: 432,
            name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval, Ouro Branco',
            price: '9.250MT',
            image: an27,
          },
          {
            id: 532,
            name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval com Pedra Marinha, Ouro Branco com Banho de Ródio',
            price: '10.250MT',
            image: an28,
          },
          {
            id: 632,
            name: 'Anel de 6 Garras, Base Coroa, Pedra Garnet',
            price: '7.700MT',
            image: an29,
          },
          {
            id: 732,
            name: 'Anel de 6 Garras, Base Coroa, Pedra Garnet, Ouro SA',
            price: '8.400MT',
            image: an30,
          },
          {
            id: 832,
            name: 'Anel de 4 Garras, com Aro e Pedra Quadrada',
            price: '10.000MT',
            image: an31,
          },
          {
            id: 932,
            name: 'Anel de 4 Garras, com Aro e Pedra Quadrada, Ouro SA',
            price: '11.000MT',
            image: an32,
          },
          {
            id: 1032,
            name: 'Anel de 6 Garras, Aro 3 em 1',
            price: '9.000MT',
            image: an33,
          },
          {
            id: 1132,
            name: 'Anel de 6 Garras, Aro 3 em 1, Ouro SA',
            price: '9.900MT',
            image: an34,
          },
          {
            id: 1232,
            name: 'Anel de 6 Garras, Aro 3 em 1, Ouro SA',
            price: '7.200MT',
            image: an35,
          },
          {
            id: 1332,
            name: 'Anel com Nó, Ouro SA',
            price: '7.900MT',
            image: an241,
          },
          {
            id: 1432,
            name: 'Anel com Cravação Fend',
            price: '4.200MT',
            image: an251,
          },
          {
            id: 1532,
            name: 'Anel de 4 Garras com Tiras',
            price: '9.000MT',
            image: an261,
          },
          {
            id: 1632,
            name: 'Anel Gota D\'Água',
            price: '9.000MT',
            image: an271,
          },
          {
            id: 1732,
            name: 'Anel Gota D\'Água, Ouro SA',
            price: '9.900MT',
            image: an281,
          },
          {
            id: 1832,
            name: 'Anel Gota D\'Água, Ouro Branco com Banho de Ródio',
            price: '11.700MT',
            image: an291,
          },
          {
            id: 1932,
            name: 'Anel Triplex',
            price: '10.800MT',
            image: an301,
          },
          {
            id: 2032,
            name: 'Anel Triplex, Ouro SA',
            price: '11.900MT',
            image: an311,
          },
          {
            id: 2132,
            name: 'Anel de 4 Garras, com Pedra Oval',
            price: '9.000MT',
            image: an321,
          },
          {
            id: 2232,
            name: 'Anel de 4 Garras, com Pedra Ametista Oval',
            price: '9.500MT',
            image: an331,
          },
          {
            id: 2332,
            name: 'Anel de 6 Garras Achatadas, Ouro SA',
            price: '7.900MT',
            image: an341,
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
        <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/aneis2">anéis</a></p>

        <div className="titpagina">
            <h2>Anéis</h2>
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


            <div className="naveg">
                  <a href="/aneis"><button>1</button></a>
                  <a href="/aneis3"><button>3</button></a>
                </div>
              <Footer/>
    </div>
)}