import './Home.css';
import Header from '../../components/header/Header'
import banner1 from '../../assets/media/campanhas/2023/4-abril/ouriversarianobrezabanner.jpg'
import banner2 from '../../assets/media/campanhas/2023/5-maio/nobreza-banner-mes-de-marco-desk.jpg'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import ali from'../../assets/media/minimenu/desk/minimenu-desk-aliancasdecasamento-v4.jpg'
import anel from '../../assets/media/minimenu/desk/minimenu-desk-kitsdenoivado-v5.jpg'
import brinc  from '../../assets/media/minimenu/desk/minimenu-desk-brincos-v4.jpg'
import sli1 from '../../assets/media/home/colecoes/home-colecaobemquerera505.jpg?quality=100'
import sli2 from '../../assets/media/home/colecoes/home-colecao-inspiracoes-v2.jpg'


import a1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-quadradas-diamantadas-12g-6mm_17607.jpg';
import a2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-namoro-ouro-e-prata-polidas-e-diamantadas-5-5-mm-12g7607.jpg?width=225';
import a3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-foscas-4mm-8g7607.jpg?width=225';
import a4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-namoro-ouro-prata-_polidas-3-5mm-8g7607.jpg?width=225';
import a5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-ouro-prata-diamantadas-7mm-12g7607.jpg?width=225';
import a6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-prata-polida-7mm-14g-vj1316-3d7607.jpg?width=225';
import a7 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-namoro-ouro-e-prata-diamantadas-e-polidas-6-mm-12-g-vj1945-3d7607.jpg?width=225';
import a8 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-polidas-5mm-8g7607.jpg?width=225';
import a9 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/a/l/aliancas-compromisso-ouro-e-prata-foscas-e-polidas-5-5mm-10g7607.jpg?width=225';

import an1 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/AP5_Aparador com_Pedrinhas2mm(10.000).jpg?width=225';
import an2 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/AP6_Aparador com_Pedrinhas_2mm_OuroSA(11.000).jpg?width=225';
import an3 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/ER7_Anel_de_Pedra.Lisa_3.5mm(6.000).jpg?width=225';
import an4 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/ER9_AneldePedraCruzado_(7.200).jpg?width=225';
import an5 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/A13_Anel.Cruzado.comBolaePedra.jpg?width=225';
import an6 from '../../assets/media/catalog/product/cache/cc00d9579d5bcf7c4f4a49c7579f7d3e/k/i/kitaliancascompromissoprataanelpratapassion_17607.jpg?width=225';
import casamentoImage from '../../assets/media/home/momentos/casamento.jpg';
import noivadoImage from '../../assets/media/home/momentos/Noivado.jpg';
import loboloImage from '../../assets/media/home/momentos/lobolo.jpg';
import namoroImage from '../../assets/media/home/momentos/namoro.jpg';
import aniversarioImage from '../../assets/media/home/momentos/aniversario.jpg';
import { useState,useEffect} from 'react';

import Footer from '../../components/footer/Footer.jsx';

import { saveCartItems,loadCartItems } from "../Cartstorage";  
import Cart from "../colares/Cart";

function ProductCard(props) {
    
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p className='price'>POR:{props.price}</p>
      <button className='comprar' onClick={props.addToCart} >Comprar</button>
    </div>
  );
}
function ProductCard2(props) {
    
  return (
    <div className="product-card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
     
    </div>
  );
}

export default function Home(){
  
    
	
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

    const products = [
        {
          id: 199,
          name: 'Alianças Chanfradas, com Friso, Fosco Diamantado e Coração Vazado, 6mm',
          price: '42.000MT',
          image: a1,
        },
        {
          id: 299,
          name: 'Alianças Namoro Ouro E Prata Polidas e Diamantadas 5,5 mm 12g',
          price: '17.500MT',
          image: a2,
        },
        {
          id: 399,
          name: 'Alianças Compromisso Ouro E Prata Foscas 4mm 8g',
          price: '10.000MT',
          image: a3,
        },
        {
          id: 499,
          name: 'Alianças Namoro Ouro E Prata Polidas 3,5mm 8g',
          price: '10.000MT',
          image: a4,
        },
        {
          id: 599,
          name: 'Alianças Tradicionais, 5mm',
          price: '12.500MT',
          image: a5,
        },
        {
          id: 699,
          name: 'Alianças com Friso e Fosco no Centro, 5mm + Anel de 6 Garras, Aro 3 em 1',
          price: '30.600MT',
          image: a6,
        },
        {
          id: 799,
          name: 'Alianças Tradicionais, 4mm + Anel com Zircónia Transluz',
          price: '14.200MT',
          image: a7,
        },
        {
          id: 899,
          name: 'Alianças Tradicionais, 4mm + Anel com Zircónia Transluz, Ouro SA',
          price: '15.600MT',
          image: a8,
        },
        {
          id: 999,
          name: 'Alianças Super Ovais, 2.5mm + Aparador com Pedrinhas',
          price: '25.600MT',
          image: a9,
        }
        
        
      ];
      const products2 = [
        {
          id: 198,
          name: "Kit Alianças Namoro Prata Linha Classic + Anel Prata Solitário",
          price: "12.500MT",
          image: an1,
        },
        {
          id: 298,
          name: "Kit Alianças Compromisso Prata + Anel Prata Lively",
          price: "11.000MT",
          image: an2,
        },
        {
          id: 398,
          name: "Kit Alianças Compromisso Prata 4,5mm + Anel Prata Inspiration",
          price: "6.000MT",
          image: an3,
        },
        {
          id: 498,
          name: "Kit Alianças Namoro Prata 2,5mm + Anel Prata Affection",
          price: "7.200MT",
          image: an4,
        },
        {
          id: 598,
          name: "Kit Alianças Namoro Ouro e Prata Linha Carrê + Anel Prata Inspiration",
          price: "7.800MT",
          image: an5,
        },
        {
          id: 698,
          name: "Kit Alianças Compromisso Prata + Anel Prata Passion",
          price: "7.700MT",
          image:an6,
        },
      ];
      const moments = [
        {
          id:7668,
          name: "Casamento",
          image: casamentoImage,
        },
        {
          id:78890,
          name: "Noivado",
          image: noivadoImage,
        },
        {
          id:78891,
          name: "Lobolo",
          image: loboloImage,
        },
        {
          id:78892,
          name: "Namoro",
          image: namoroImage,
        },
        {
          id:78893,
          name: "Aniversário",
          image: aniversarioImage,
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
      
      


    

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        speed:1,
        nextArrow: null, 
        prevArrow: null,}
        
    return(
        <div className="Home">
            <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
            
                <div className={isSearching ?"invisivel":"Banner"} >
                    <Slider {...settings}>
                        <div id='slid'>
                        <img src={banner1} className='banner01' alt="Banner celsonotico"/>
                        </div>

                        <div id='slid'>
                        <img src={banner2} className='banner02' alt="Banner celso" />
                    
                        </div>
                        </Slider>
                    
                </div>
                <div className={isSearching ?"invisivel":"Momentos"} >
                    <h1>PARA OS MOMENTOS NOBRES</h1>
                        <section>
                        <div><a href="/aliancas"><img src={ali} alt="Aliancas"  /></a> <p>Alianças</p></div>
                    
                        <div><a href="/aneis"><img src={anel} alt="Anel" /></a><p>Anéis</p></div>
                    
                        <div><a href="/brincos"><img src={brinc} alt="Brincos"  /></a><p>Brincos</p></div>
                        </section>
                    
                    
                </div>
                <div className={isSearching ?"invisivel":"especial"} >
                <h2>COLEÇÕES</h2>
                <p>Você é especial e merece joias especiais</p>
                <div className='Carousellimg'>
                    <a href="/aneis"><img src={sli1} alt="imagem,com anel"/></a>
                    <a href="/aliancas"><img src={sli2} alt="imagem de um jovem casado" /></a>
                </div>
                </div>
                <div className="Aliancas" >
                    <h2 style={{ display: isSearching ? 'none' : 'block' }}>COLEÇÃO ALIANÇAS E CONJUNTOS DE CASAMENTO</h2>
                    <p style={{ display: isSearching ? 'none' : 'block' }}>As peças com fio de ouro são o presente ideal para selar o amor com sofisticação, e muita beleza </p>

                    <div className={isSearching ?"invisivel":"product-section"} id="normais" >
                    
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

                <div className={isSearching ?"product-section":"invisivel"} id="pesquisados" >
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



                </div>
                <div className={isSearching ?"invisivel":"Aneis"} >
                    <h2>ANÉIS DE NOIVADO</h2>
                    <p>A forma perfeita de surpreender a pessoa amada e demonstrar toda a força e beleza do amor!  </p>

                    <div className="product-section">
                    
                        {products2.map((product) => (
                            <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image}
                            addToCart={() => addToCart(product)}
        />
      ))} 

                </div>

                </div>

                <div className={isSearching ?"invisivel":"eventos"} >
                  <h2>MOMENTOS</h2>
                  <p>Joias especiais para todos os momentos, dos grandes àqueles que passam quase despercebidos.</p>
                  
              <div className="product-section">
                    
                    {moments.map((product) => (
                        <ProductCard2
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        
    />
  ))} 

            </div>

                </div>
               
                <div className={showCart ? "overlay" : "invisivel"}></div>
                
               
            
            <div className={showCart?"Cardd":"invisivel"}>
                        <Cart cartItems={cartItems} removeFromCart={removeFromCart} toggleCart={toggleCart}/>
            </div>

            <Footer/>
        </div>
    )
}