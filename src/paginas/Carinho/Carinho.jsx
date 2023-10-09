// Carrinho.jsx
import React from "react";
import './Carrinho.css'
import logo from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png';
import closser from '../../assets/close.png'
import { useState,useEffect } from "react";



function Carrinho(props) {
  const cart = props;
  
  const [mostrar, setMostrar]=useState(true);

 


  function mostrarcar(){
    if(mostrar==true){
      setMostrar(false);

    }
    else{
      setMostrar(true);
    }
  }

  if (!cart || cart.length === 0) {
    return (
      <div className={mostrar?"carrinho":"carrinho"}>
        <img src={closser} className={mostrar?"closser":"closser"} alt="Fechar carrinho" onClick={mostrarcar}/>
      <img src={logo} className="logocar" alt="imagem logo" />
        <h2>Carrinho de Compras</h2>
        <p>O carrinho está vazio.</p>
      </div>
    );
  }

  return (
    <div className={mostrar?"carrinho":"carrinho"}>
      <img src={closser} className={mostrar?"closser":"carrinho"} alt="Fechar carrinho" onClick={mostrarcar}/>
      <img src={logo} className="logocar" alt="imagem logo" />
      <h2>Carrinho de Compras</h2>
      <ul>
        {props.cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} className="imgcarrinho"/>
            <p className="namecarrinho">{item.name}</p>
            <p className="precocarrinho">Por: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}



export default Carrinho;
