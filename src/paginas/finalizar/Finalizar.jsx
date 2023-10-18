import React, { useState } from 'react';
import './finalizar.css';
import logf from '../../assets/static/version1683133093/frontend/VirtualJewels/ThemeLabs/pt_BR/images/logo-header-nobreza.png';
import Cart from '../colares/Cart';

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
  const [nome, setNome] = useState('');
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
      `\nNome: ${nome}` +
      `\nEmail: ${email}` +
      `\nContacto: ${contacto}` +
      `\nProvíncia: ${selectedProvincia}` +
      `\nProvíncia: ${endereco}` +
      `\nProdutos no carrinho:` +
      cartItems.map((item) => `\n- ${item.name}: ${item.price}`).join('');

    // Encode a mensagem para uso no URL
    const mensagemEncoded = encodeURIComponent(mensagem);

    // Crie o link para o WhatsApp
    const whatsappURL = `https://wa.me/+258844165303?text=${mensagemEncoded}`;
    
    // Redirecione o usuário para o WhatsApp
    window.open(whatsappURL);
  };

  return (
    <div className='fin'>
      <div className='finalizar'>
        <img src={logf} alt='Logotipo' />
        <h2>
          Que bom que chegou até aqui, está a um passo de finalizar a compra.
          <span> Bora-Lá</span>
        </h2>
        <form onSubmit={createWhatsAppMessage}>
          <input
            type='text'
            placeholder='Digite o seu Nome:'
            value={nome} required
            onChange={(e) => setNome(e.target.value)}
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
            onChange={(e) => setContacto(e.target.value)}
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
              <img src={item.image} alt={item.name} className='imgcarrinho' />
              <div>
                <p className='namecarrinho'>{item.name}</p>
                <p className='precocarrinho' id='prec'>
                  Por: {item.price}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className='tott'>Total: {total.toFixed(3)}MT</p>
      </div>
    </div>
  );
}
