import React, { useState } from "react";
import './Cart.css';
import { PDFDocument, rgb,StandardFonts } from 'pdf-lib';
import logo from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png'
import Finalizar from "../finalizar/Finalizar";


async function generatePDF(cartItems,total) {
  
        
  // Crie um novo documento PDF em branco
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);


  // Adicione uma nova página ao documento
  const page = pdfDoc.addPage([600,600]);
  
  
  // Escreva as informações do carrinho na página
  const response2 = await fetch(logo);
    const imageBytes2 = await response2.arrayBuffer();
    const logoo = await pdfDoc.embedPng(imageBytes2);

    page.drawImage(logoo, {
      x: 50,
      y:550, // Ajuste a posição vertical conforme necessário
      width: 210, // Largura da imagem
       // Altura da imagem
       height:30,
      
    });

  page.drawText('Seu Carrinho:', {
    x: 250,
    y: 530,
    size: 13,
    font:font,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50 , y:510}, // Início da linha
    end: { x: 550, y:510 }, // Fim da linha
    thickness: 1, // Espessura da linha
    color: rgb(0, 0, 0), // Cor da linha (preto)
  });
  

  let yPosition = 450;
  for (const item of cartItems) {
    

    // Carregue a imagem da URL (item.image)
    const response = await fetch(item.image);
    const imageBytes = await response.arrayBuffer();
    const image = await pdfDoc.embedJpg(imageBytes); // Altere para embedJpg se for uma imagem JPEG

    // Desenhe a imagem na página
    page.drawImage(image, {
      x: 50,
      y: yPosition, // Ajuste a posição vertical conforme necessário
      width: 50, // Largura da imagem
      height: 50, // Altura da imagem
    });
  
    page.drawText(`${item.name}`, {
      x: 110,
      y: yPosition+30,
      size: 12,
      color: rgb(0, 0, 0),
    });
    
    page.drawText(`${item.price}`, {
      x: 110,
      y: yPosition + 10,
      size: 12,
      color: rgb(1, 0, 0),
    });
    yPosition -= 60;
  
  }
  page.drawText(`Total: ${total.toFixed(3)}MT`, {
    x: 450,
    y: yPosition - 70,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50 , y:yPosition-50}, // Início da linha
    end: { x: 550, y:yPosition-50 }, // Fim da linha
    thickness: 1, // Espessura da linha
    color: rgb(0, 0, 0), // Cor da linha (preto)
  });

  const contentText = cartItems.map((item) => {
    return `${item.nome} - ${item.preco}`; // Use template literals para concatenar o nome e o preço
  }).join('\n');

  const tot=` ${total.toFixed(3)}MT`
  // Encode o PDF em um array de bytes
  const pdfBytes = await pdfDoc.save();
  
  // Crie um objeto Blob a partir dos bytes do PDF
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });

 const whtsurl=`https://wa.me/+258844165303?text=Olá! Confira o meu carinho:${contentText} Total:${tot}`
  // Crie um URL para o Blob
  const pdfUrl = URL.createObjectURL(blob);
  //window.open(whtsurl);
  // Abra o PDF em uma nova guia ou janela
  /**
 */
  
  }
  

  
  
// Componente Cart
function Cart(props) {
  const { cartItems, removeFromCart, toggleCart } = props;
  
  const [carrinho, setCarrinho]=useState(true);
  
  function abrir(){
    if(carrinho==true){
      setCarrinho(false);
  
    }
    else{
      setCarrinho(true);
    }
  }
  

  
  let total = 0;

// Itere pelos itens no carrinho e some seus preços
cartItems.forEach(item => {
  total =total + item.preco;
});

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
  
  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.nome} className="imgcarrinho"/>
            <div>
             
            <p className="namecarrinho">{item.nome}</p>
            <p className="precocarrinho" id="prec">Por: {formatNumberWithCommas(item.preco) + "MT"}</p>
            <button className="remover" onClick={() => removeFromCart(item)}>Remover</button>
            
            </div>
            
          </li>
        ))}
      </ul>
      
      <div className="botoes">
      <button className="Sair" onClick={() => toggleCart()}>Sair</button>
     <button className="fc" onClick={abrir}>Finalizar Compra</button>
      <p className="Total">Total: {formatNumberWithCommas(total) + "MT"} </p>
      </div>

      <div className={carrinho?"invisivel":"mostr"}>
        <Finalizar cartItems={cartItems} total={total}/>
      </div>
      
      
    </div>
  );
}

export default Cart;

