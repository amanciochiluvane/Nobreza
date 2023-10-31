import './Home.css';
import Header from '../../components/header/Header'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from 'react-slick';
import ali from'../../assets/minimenu/desk/minimenu-desk-aliancasdecasamento-v4.jpg'
import anel from '../../assets/minimenu/desk/minimenu-desk-kitsdenoivado-v5.jpg'
import brinc  from '../../assets/minimenu/desk/minimenu-desk-brincos-v4.jpg'


import casamentoImage from '../../assets/media/home/momentos/casamento.jpg';
import noivadoImage from '../../assets/media/home/momentos/Noivado.jpg';
import loboloImage from '../../assets/media/home/momentos/lobolo.jpg';
import namoroImage from '../../assets/media/home/momentos/namoro.jpg';
import aniversarioImage from '../../assets/media/home/momentos/aniversario.jpg';
import { useState,useEffect} from 'react';

import Footer from '../../components/footer/footer.jsx';

import { saveCartItems,loadCartItems } from "../Cartstorage";  
import Cart from "../colares/Cart";
import { client } from '../../../lib/client';

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
  const [bannerData, setBannerData] = useState([]);
  const [colecoes, setColecoes] = useState([]);
  const [products, setProducts] = useState([]);
  const [products2, setProducts2] = useState([]);
  
  useEffect(() => { 
    const storedCartItems = loadCartItems();
      setCartItems(storedCartItems);
    
  }, []);
  
  useEffect(() => {
    
    const query = `*[_type == "banner"]{
      "image": image.asset->url
    }`;
    client.fetch(query).then((data) => setBannerData(data));
  }, []);
  useEffect(() => {
    
    const query = `*[_type == "colecoes"]{
      "image": image.asset->url
    }`;
    client.fetch(query).then((data) => setColecoes(data));
  }, []);

  useEffect(() => {
    const query = `*[_type == "homealiancas"]{
      nome,
      preco,
      "image": image.asset->url
    }`;
    client.fetch(query).then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const query = `*[_type == "homeaneis"]{
      nome,
      preco,
      "image": image.asset->url
    }`;
    client.fetch(query).then((data) => setProducts2(data));
  }, []);
  
	
  const [cartItems, setCartItems] = useState([]);
 
 
  
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
        const filteredProducts = products.filter((product) => {
          // Check if the product is not null or undefined
          if (product) {
            // Check if the 'nome' property exists and is a string
            if (product.nome && typeof product.nome === 'string') {
              // Check if 'nome' contains the search query (case-insensitive)
              return product.nome.toLowerCase().includes(searchQuery.toLowerCase());
            }
          }
          // If any of the checks fail, exclude this product from the filtered list
          return false;
        });
        
      
      


    

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

        var settings2 = {
          dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:false,
        speed:500,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
          responsive:[
            {
              breakpoint:2024,
            settings:{
              slidesToShow: 5,
              slidesToScroll: 5,
            }},
            {
              breakpoint:1024,
            settings:{
              slidesToShow: 3,
              slidesToScroll: 3,
            }},
            {
            breakpoint:768,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
            }},
            {
              breakpoint:481,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 2,
            }}

          ]

          
          
         }
         function CustomNextArrow(props) {
          const { onClick } = props;
        
          return (
            <button className="custom-next-arrow" onClick={onClick}>
              {">"}
            </button>
          );
        }
        function CustomPrevArrow(props) {
          const { onClick } = props;
        
          return (
            <button className="custom-prev-arrow" onClick={onClick}>
              {"<"}
            </button>
          );
        }
        
        
    return(
        <div className="Home">
            <Header toggleCart={toggleCart} cartItems={cartItems} handleSearch={handleSearch}/>
              
                <div className={isSearching ?"invisivel":"Banner"} >
                    <Slider {...settings}>
                      
                    {bannerData.map((banner, index) => (
                    <div key={index} id='slid'>
                    <img src={banner.image} className={`banner0${index + 1}`} alt={`Banner celso ${index + 1}`} />
                   </div>
                    ))}

                        
                    
                        
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
                {colecoes && colecoes.length >= 2 && (
                  <div className='Carousellimg'>
                    <a href="/aneis">
                      <img src={colecoes[0].image} alt="imagem com anel" />
                    </a>
                    <a href="/aliancas">
                      <img src={colecoes[1].image} alt="imagem de um jovem casado" />
                    </a>
                  </div>
                )}
                </div>
                <div className="Aliancas" >
                    <h2 style={{ display: isSearching ? 'none' : 'block' }}>COLEÇÃO ALIANÇAS E CONJUNTOS DE CASAMENTO</h2>
                    <p style={{ display: isSearching ? 'none' : 'block' }}>As peças com fio de ouro são o presente ideal para selar o amor com sofisticação, e muita beleza </p>

                     
                    <div className={isSearching ?"invisivel":"product-section"} id="normais" >
                    <Slider {...settings2}>
                        {products.map((product) => (
                            <ProductCard
                            key={product.id}
                            name={product.nome}
                            price={formatNumberWithCommas(product.preco) + "MT"}
                            image={product.image}
                            addToCart={() => addToCart(product)}
        />
        
      ))}
     </Slider>

                </div>

                <div className={isSearching ?"product-section":"invisivel"} id="pesquisados" >
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



                </div>
                <div className={isSearching ?"invisivel":"Aneis"} >
                    <h2>ANÉIS DE NOIVADO</h2>
                    <p>A forma perfeita de surpreender a pessoa amada e demonstrar toda a força e beleza do amor!  </p>

                    <div className="product-section">
                    <Slider {...settings2}>
                        {products2.map((product) => (
                            <ProductCard
                            key={product.id}
                            name={product.nome}
                            price={formatNumberWithCommas(product.preco) + "MT"}
                            image={product.image}
                            addToCart={() => addToCart(product)}
        />
      ))} 
      </Slider>
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