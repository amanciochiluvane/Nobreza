import React from 'react'
import fb from '../../assets/Vj_Footer/images/icon-facebook-vj.svg'
import insta from '../../assets/Vj_Footer/images/icon-instagram-vj.svg'
import './footer.css'

export default function Footer(){

    return(
        <div className='footer'>
            <div className='seccao'>
            <div className='central'>
                <h2>Central de atendimento</h2>
                <button className='numero'>+258 84 498 0490</button>
                <p>Segunda a sexta das 8h às 18h</p>
                <p>vendas@ourivesarianobreza.co.mz</p>
                <div className='redes'>
                    <a href="https://www.facebook.com/OurivesariaNobreza"><img src={fb} alt="Logo fb" /></a>
                    <a href="https://www.instagram.com/ourivesarianobreza/?hl=pt"><img className='ins' src={insta} alt="Logo insta"/></a>
                    
                </div>
            </div>

            <div className='nobreza'>
                <h2>NOBREZA</h2>
                <a href="#"><p>Quem somos</p></a>
                <a href="#"> <p>História</p></a>
                <a href="#"><p>Fale connosco</p></a>
                <a href="#"><p>Termos de uso</p></a>
  
            </div>

            <div className='servicos'>
                <h2> SERVIÇO AO CLIENTE</h2>
                <a href="#"><p>Quem somos</p></a>
                <a href="#"> <p>Garantia e trocas</p></a>
                <a href="#"><p>Dúvidas e cuidados</p></a>
                <a href="#"><p>Central de ajuda</p></a>
    
            </div>
            </div>
            <div className='Direitos'>
                <p className='ouro'>© Ourivesaria Nobreza 2023. Todos os direitos reservados.</p>
                <p>Imagens meramente ilustrativas. </p>
            </div>
        </div>
    )
}
