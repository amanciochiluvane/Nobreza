import { useState,useEffect } from 'react';
import logo from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png'; 
import carinhocompras from '../../assets/compras.png'
import './header.css';
import menu from '../../assets/menu.png'
import lupa from '../../assets/lupa.png'
import voltar from '../../assets/voltar.png'





export default function Header({toggleCart,cartItems,handleSearch}){
    const [menub,setMenub]=useState(true);
    const [cartItemCount, setCartItemCount] = useState(0);
    
    

    useEffect(() => {
        // Atualize o contador de itens no carrinho sempre que cartItems mudar
        setCartItemCount(cartItems.length);
      }, [cartItems]);

    const Links="Links";
    const Linkshab="Linkshab";

    function mostrarmenu(){
        
        if(menub == true){
            setMenub(false);
        }
        else{
            setMenub(true);
        }
    }

    return(
        <div className="Header">
            <div className="introheader">
                <img src={menu} className='burguermenu' onClick={mostrarmenu} alt="Burguermenu" />
               
                <img src={logo} className='logotipo' alt="Logotipo - Ouriversaria Nobreza" />
                <input type="text" placeholder="Pesquisar" className="barrapesquisa" id='pesqu' onChange={handleSearch} />

                <img src={lupa} className='lupap' alt="Lupa pesquisa"/>
                <img src={carinhocompras} onClick={() => toggleCart()} 
                className='carinho' alt="Carrinhodecompras" />
                <sup>{cartItemCount}</sup>
                
            </div>
            
            <div className={menub?Links:Linkshab} >
                <a href="/aliancas">Alianças</a>
                <a href="/aneis">Anéis</a>
                <a href="/colares">Colares</a>
                <a href="/brincos">Brincos</a>
                <a href="#">Pulseiras</a>
                <a href="#" id='promo'>Promoção do Mês</a>
                <div className='fechar' onClick={mostrarmenu}>
                    <img src={voltar} className="voltar" alt="Voltar" />
                    <p className='Voltartxt'>Voltar</p>
                </div>

            </div>
            

            
        </div>
    )
}