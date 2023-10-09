import React from "react";
import './Cart.css';
import { PDFDocument, rgb,StandardFonts } from 'pdf-lib';
import logo from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png'; 


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


  // Encode o PDF em um array de bytes
  const pdfBytes = await pdfDoc.save();

  // Crie um objeto Blob a partir dos bytes do PDF
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });

  // Crie um URL para o Blob
  const pdfUrl = URL.createObjectURL(blob);

  // Abra o PDF em uma nova guia ou janela
  window.open(pdfUrl);
  }

// Componente Cart
function Cart(props) {
  const { cartItems, removeFromCart, toggleCart } = props;

  const validCartItems = cartItems.filter((item) => typeof item.price === 'string');

  // Calcular o total dos preços dos itens no carrinho
  const total = validCartItems.reduce((accumulator, item) => {
    // Remover "MT" e converter a string em um número
    const priceWithoutMT = parseFloat(item.price.replace('MT', '').replace(',', ''));

    // Certificar-se de que o preço é um número válido
    if (!isNaN(priceWithoutMT)) {
      return accumulator + priceWithoutMT;
    }

    return accumulator;
  }, 0);
  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      <ul>
        {validCartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} className="imgcarrinho"/>
            <div>
            <p className="namecarrinho">{item.name}</p>
            <p className="precocarrinho" id="prec">Por: {item.price}</p>
            <button onClick={() => removeFromCart(item.id)} className="remover">Remover</button>
            </div>
            
          </li>
        ))}
      </ul>
      
      <div className="botoes">
      <button className="Sair" onClick={() => toggleCart()}>Sair</button>
      <button className="fc" onClick={() => generatePDF(cartItems,total)}>Finalizar Compra</button>
      <p>Total: {total.toFixed(3)}MT</p>
      </div>
      
      
      
    </div>
  );
}

export default Cart;


