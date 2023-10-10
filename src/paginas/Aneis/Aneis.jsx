import Header from "../../components/header/Header";

import an1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_aparador_com_pedrinhas_2mm.jpg?width=225';
import an2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/aparador_com_pedrinhas_2mm_ouro_sa.jpg?width=225';
import an3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_lisa_3.5mm.jpg?width=400&quality=100';
import an4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_cruzado.jpg?width=400&quality=100';
import an5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_cruzado_com_pedra_ametista_e_aro_recto.jpg?width=400&quality=100';
import an6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_achatadas.jpg?width=400&quality=100';
import an7 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_lisa_2mm_ouro_SA.jpg?width=400&quality=100';
import an8 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_base_coroa.jpg?width=400&quality=100';
import an9 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_base_coroa_2.jpg?width=400&quality=100';
import an10 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_aro_duplo.jpg?width=400&quality=100';
import an11 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_aro_super_oval.jpg?width=400&quality=100';
import an12 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_lisa_3.5mm_O_ouro_sa.jpg?width=400&quality=100';
import an13 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_lisa_ametista_2mm.jpg?width=400&quality=100';
import an14 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_lisa_ametista_2mm_ouro_SA.jpg?width=400&quality=100';
import an15 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_com_zirconias.jpg?width=400&quality=100';
import an16 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_com_zirconias.jpg?width=400&quality=100';
import an17 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_base_coroa_com_zirconias_sa.jpg?width=400&quality=100';
import an18 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_6_garras_com_estrias.jpg?width=400&quality=100';
import an19 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_pedra_cruzado_ouro_SA.jpg?width=400&quality=100';
import an20 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_com_aro_duplo_duro_SA.jpg?width=400&quality=100';
import an21 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_achatadas.jpg?width=400&quality=100';
import an22 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_achatadas_2.jpg?width=400&quality=100';
import an23 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/n/anel_de_4_garras_achatadas_ouro_SA.jpg?width=400&quality=100';

import './Aneis.css'
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


export default function Aneis(){
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => { 
    const storedCartItems = loadCartItems();
      setCartItems(storedCartItems);
    
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
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    saveCartItems(updatedCart)
  };
  
  

    const products =[
        


  {
    id: 112,
    name: 'Aparador com Pedrinhas, 2mm',
    price: '10.000MT',
    image: an1,
  },
  {
    id: 212,
    name: 'Aparador com Pedrinhas, 2mm, Ouro SA',
    price: '11.000MT',
    image: an2,
  },
  {
    id: 312,
    name: 'Anel de Pedra Lisa, 3.5mm',
    price: '6.000MT',
    image: an3,
  },
  {
    id: 412,
    name: 'Anel de Pedra Cruzado',
    price: '7.200MT',
    image: an4,
  },
  {
    id: 512,
    name: 'Anel Cruzado, com Pedra Ametista e Aro Recto',
    price: '8.500MT',
    image: an5,
  },
  {
    id: 612,
    name: 'Anel de 6 Garras Achatadas',
    price: '8.500MT',
    image: an6,
  },
  {
    id: 712,
    name: 'Anel Cruzado, com Pedra Ametista e Aro Recto',
    price: '6.600MT',
    image: an7,
  },
  {
    id: 812,
    name: 'Anel de 4 Garras, Base Coroa',
    price: '6.000MT',
    image: an8,
  },
  {
    id: 912,
    name: 'Anel de 4 Garras, Base Coroa',
    price: '6.000MT',
    image: an9,
  },
  {
    id: 1012,
    name: 'Anel com Aro Duplo',
    price: '7.800MT',
    image: an10,
  },
  {
    id: 1112,
    name: 'Anel de 6 Garras, Base Coroa, Aro Super Oval',
    price: '7.500MT',
    image: an11,
  },
  {
    id: 1212,
    name: 'Anel de Pedra Lisa, 3.5mm, Ouro SA',
    price: '6.600MT',
    image: an12,
  },
  {
    id: 1312,
    name: 'Anel de Pedra Lisa Ametista, 2mm, Ouro SA',
    price: '5.100MT',
    image: an13,
  },
  {
    id: 1412,
    name: 'Anel de Pedra Lisa Ametista, 2mm, Ouro SA',
    price: '5.100MT',
    image: an14,
  },
  {
    id: 1512,
    name: 'Anel de 6 Garras, com Zircónias',
    price: '11.000MT',
    image: an15,
  },
  {
    id: 1612,
    name: 'Anel de 6 Garras, Base Coroa com Zircónias',
    price: '12.500MT',
    image: an16,
  },
  {
    id: 1712,
    name: 'Anel de 6 Garras, Base Coroa com Zircónias, Ouro SA',
    price: '13.750MT',
    image: an17,
  },
  {
    id: 1812,
    name: 'Anel de 6 Garras, com Estrias',
    price: '8.000MT',
    image: an18,
  },
  {
    id: 1912,
    name: 'Anel de 6 Garras, com Estrias, Ouro SA',
    price: '8.800MT',
    image: an19,
  },
  {
    id: 2012,
    name: 'Anel com Aro Duplo, Ouro SA',
    price: '8.600MT',
    image: an20,
  },
  {
    id: 2112,
    name: 'Anel de 4 Garras Achatadas',
    price: '7.200MT',
    image: an21,
  },
  {
    id: 2212,
    name: 'Anel de 4 Garras Achatadas',
    price: '7.200MT',
    image: an22,
  },
  {
    id: 2312,
    name: 'Anel de 4 Garras Achatadas, Ouro SA',
    price: '7.900MT',
    image: an23,
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
                  <a href="/aneis2"><button>2</button></a>
                  <a href="/aneis3"><button>3</button></a>
                </div>
                <Footer/>
        </div>
    )
}