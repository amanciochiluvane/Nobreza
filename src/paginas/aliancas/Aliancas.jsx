import Header from "../../components/header/Header";

import './aliancas.css'
import al1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-quadradas-diamantadas-12g-6mm_17607.jpg?width=225'
import al2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-namoro-ouro-e-prata-polidas-e-diamantadas-5-5-mm-12g7607.jpg?width=225'
import al3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-foscas-4mm-8g7607.jpg?width=400&quality=100'
import al4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-namoro-ouro-prata-_polidas-3-5mm-8g7607.jpg?width=400&quality=100'
import al5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-ouro-prata-diamantadas-7mm-12g7607.jpg?width=400&quality=100'
import al6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_5mm.jpg?width=400&quality=100'
import al7 from "../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_4mm.jpg?width=400&quality=100";
import al8 from "../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_friso_e_fosco_no_centro_8mm.jpg?width=400&quality=100";
import al9 from "../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_friso_e_fosco_no_centro_5mm.jpg?width=400&quality=100";
import al10 from "../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_chanfradas_com_friso_fosco_diamantado_coracao_vazado_6mm.jpg?width=400&quality=100";
import al11 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_friso_e_fosco_no_centro_5mm_2.jpg?width=400&quality=100'
import al12 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_arisos_duplos_laterais_5mm.jpg?width=400&quality=100'
import al13 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_chanfradas_4mm.jpg?width=400&quality=100'
import al14 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/alianças_quadradas_5mm.jpg?width=400&quality=100'
import al15 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_6mm.jpg'
import al16 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_tradicionais_7mm.jpg?width=400&quality=100'
import al17 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_quadradas_5mm.jpg?width=400&quality=100' 
import al18 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_ouro_SA_6mm.jpg?width=400&quality=100'
import al19 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_chanfradas_6mm.jpg'
import al20 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_6mm.jpg'
import al21 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_chanfradas_ouro_SA_6mm.jpg?width=400&quality=100'
import al22 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_chanfradas_ouro_SA_6mm2.jpg?width=400&quality=100'
import al23 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_frisos_separados_ouro_SA_4mm.jpg?width=400&quality=100'
import al24 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_friso_no_centro_e_fosco_completo_4mm_Ouro_SA.jpg?width=400&quality=100'
import al25 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas_com_faixa_fosqueada_6mm_Ouro_SA.jpg?width=400&quality=100'
import Cart from "../colares/Cart";

import { useState,useEffect} from 'react';


import { saveCartItems,loadCartItems } from "../Cartstorage";
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

export default function Aliancas(){
  const [isSearching, setIsSearching] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const products = [
        
    {
      id: 1,
      name: "Alianças Chanfradas, com Friso, Fosco Diamantado e Coração Vazado, 6mm",
      price: "42.000MT",
      image: al1
    },
    {
      id: 2,
      name: "Alianças Namoro Ouro E Prata Polidas e Diamantadas 5,5 mm 12g",
      price: "17.500MT",
      image: al2
    },
    {
      id: 3,
      name: "Alianças Quadradas, 4mm",
      price: "10.000MT",
      image: al3
    },
    {
      id: 4,
      name: "Alianças Tradicionais, 4mm",
      price: "10.000MT",
      image: al4
    },
    {
      id: 5,
      name: "Alianças Tradicionais, 5mm",
      price: "12.500MT",
      image: al5
    },
    {
      id: 6,
      name: "Alianças com Frisos Separados, 5mm",
      price: "19.200MT",
      image: al6
    },
    {
      id: 7,
      name: "Kit Alianças Compromisso Prata + Anel Prata Lively",
      price: "16.800MT",
      image: al7
    },
    {
      id: 8,
      name: "Alianças Namoro Prata Linha Classic 3mm Quadrada Polida",
      price: "36.000MT",
      image: al8
    },
    {
      id: 9,
      name: "Alianças Compromisso Prata Foscas 4mm 6g com Friso e Pedra",
      price: "21.600MT",
      image: al9
    },
    {
      id: 10,
      name: "Alianças Compromisso Prata Foscas 5mm 10g com Friso Diagonal e Pedra",
      price: "42.000MT",
      image: al10
    },
    {
      id: 11,
      name: "Alianças Namoro Prata Foscas 5mm 10g com Friso Diagonal e Pedras",
      price: "21.600MT",
      image: al11
  },
  {
      id: 12,
      name: "Alianças Casamento Ouro E Prata Polida 5mm 10g",
      price: "19.200MT",
      image: al12
  },
  {
      id: 13,
      name: "Alianças Compromisso Prata Foscas 3,5mm 6g com Friso e Pedra",
      price: "20.700MT",
      image: al13
  },
  {
      id: 14,
      name: "Alianças Casamento Linha Classic Ouro 3mm Quadrada Polida",
      price: "12.500MT",
      image: al14
  },
  {
      id: 15,
      name: "Alianças Compromisso Prata Diamantadas 3,5mm 6g com Friso",
      price: "21.600MT",
      image: al15
  },
  {
      id: 16,
      name: "Alianças Compromisso Prata Diamantadas Coração e Friso Diagonal Pedra Branca e Vermelha",
      price: "20.000MT",
      image: al16
  },
  {
      id: 17,
      name: "Alianças Super Ovais, 3.5mm",
      price: "26.700MT",
      image: al17
  },
  {
      id: 18,
      name: "Alianças Compromisso Prata Foscas E Polidas Cantos Chanfrados 3,5mm 6g",
      price: "23.750MT",
      image: al18
  },
  {
      id: 19,
      name: "Alianças Chanfradas, 6mm",
      price: "30.000MT",
      image: al19
  },
  {
      id: 20,
      name: "Alianças Compromisso Prata Foscas E Polidas 6mm 9g",
      price: "21.600MT",
      image: al20
  },
  
{
    id: 21,
    name: "Alianças Chanfradas, Ouro SA, 6mm",
    price: "32.500MT",
    image: al21
},
{
    id: 22,
    name: "Alianças Chanfradas, com Friso e Fosco, Ouro SA, 6mm",
    price: "39.600MT",
    image: al22
},
{
    id: 23,
    name: "Alianças com Frisos Separados, Ouro SA, 4mm",
    price: "18.500MT",
    image: al23
},
{
    id: 24,
    name: "Alianças com Friso no Centro e Fosco Completo, 4mm, Ouro SA",
    price: "21.100MT",
    image: al24
},
{
    id: 25,
    name: "Alianças com Faixa Fosqueada, 6mm, Ouro SA",
    price: "26.400MT",
    image: al25
}
  
  
]
  const handleSearch = (event) => {
    // Atualize o estado da pesquisa com o valor do campo de pesquisa
    setSearchQuery(event.target.value);
    setIsSearching(event.target.value !== '');
  };

  // Filtrar os produtos com base na pesquisa
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
  
    

    return(
        <div className="aliancas">
            <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
            <p className="indicador"><a href="/">início</a> / <a className="indicadoractual" href="/aliancas">alianças</a></p>

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

              
                  <a href="/aliancas2"><button>Próximo</button></a>
                </div>
                <Footer/>
        </div>
    )
}