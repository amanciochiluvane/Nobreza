import React, { useState } from 'react';
import './finalizar.css';
import logf from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png';

import smile from '../../assets/smile.png'

export default function Finalizar({ cartItems, total }) {
  const provinciasMocambique = [
    'Cabo Delgado',
    'Niassa',
    'Nampula',
    'Zambézia',
    'Tete',
    'Manica',
    'Sofala',
    'Inhambane',
    'Gaza',
    'Maputo Cidade',
    'Maputo Província',
  ];

  const [selectedProvincia, setSelectedProvincia] = useState('');
  const [nomea, setNomea] = useState('');
  const [email, setEmail] = useState('');
  const [contacto, setContacto] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleProvinciaChange = (e) => {
    setSelectedProvincia(e.target.value);
  };

  const createWhatsAppMessage = () => {
    // Montar a mensagem com as informações
    const mensagem =
      `Olá! Quero finalizar a compra com as seguintes informações:` +
      `\nNome: ${nomea}` +
      `\nEmail: ${email}` +
      `\nContacto: ${contacto}` +
      `\nProvíncia: ${selectedProvincia}` +
      `\nEndereco: ${endereco}` +
      `\nProdutos no carrinho:` +
      cartItems.map((item) => `\n- ${item.nome}: ${item.preco}`).join('');
    
    // Encode a mensagem para uso no URL
    const mensagemEncoded = encodeURIComponent(mensagem);

    // Crie o link para o WhatsApp
    const whatsappURL = `https://wa.me/+258844980490?text=${mensagemEncoded}`;
    
    // Redirecione o usuário para o WhatsApp
    window.open(whatsappURL);
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

  return (
    <div className='fin'>
      <div className='finalizar'>
        <img src={logf} alt='Logotipo' />
        <h2>
          Que bom que chegou até aqui, está a um passo de finalizar a compra.
          <span> Bora-Lá </span>
        </h2>
        <p><img className='emogisorriso' src={smile} alt="Emogisorisso"  /></p>
        <form onSubmit={createWhatsAppMessage}>
          <input
            type='text'
            placeholder='Digite o seu Nome:'
            value={nomea} required
            onChange={(e) => setNomea(e.target.value)}
          />
          <input
            type='email'
            placeholder='Digite o seu Email:'
            value={email} required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='number'
            placeholder='Digite o seu contacto:'
            value={contacto} required
            onChange={(e) => setContacto(e.target.value)}
          />
          <input
            type='text'
            placeholder='Digite o seu Endereço (Bairro,Avenida):'
            value={endereco} required
            onChange={(e) => setEndereco(e.target.value)}
          />
          <select value={selectedProvincia} onChange={handleProvinciaChange} required>
            <option value=''>Selecione a Província</option>
            {provinciasMocambique.map((provincia, index) => (
              <option key={index} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
          <input type="submit" value="Submeter" className='submeter' />
            
        </form>
        
        <a className="cc" href="/"><button>Continuar a comprar</button></a>
      </div>
      <div className='ca'>
        <h2>O SEU CARRINHO:</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.nome} className='imgcarrinho' />
              <div>
                <p className='namecarrinho'>{item.nome}</p>
                <p className='precocarrinho' id='prec'>
                  Por: {formatNumberWithCommas(item.preco) + "MT"}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className='tott'>Total: {formatNumberWithCommas(total) + "MT"}</p>
      </div>
    </div>
  );
}
