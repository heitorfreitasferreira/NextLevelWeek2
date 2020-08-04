import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
function TeacherItem() {
  return (<article className="teacher-item">
    <header>
      <img src="https://avatars3.githubusercontent.com/u/47534514?s=460&u=5c783e047d0c4ec25d7595bd94c13c8622d506a4&v=4" alt="Heitor Freitas" />
      <div>
        <strong>
          Heitor Freitas Ferreira
              </strong>
        <span>
          Programação competitiva
              </span>
      </div>
    </header>
    <p>
      Desenvolvo um programa de incentivo à formação de desenvolvedores de software. <br /> <br /> Minha meta é transformar o Brasil em um polo de tecnologia e de programação sendo referencia internacional.
          </p>
    <footer>
      <p>
        Preço/hora
              <strong>R$20,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
                Entrar em contato
              </button>
    </footer>
  </article>)
}
export default TeacherItem