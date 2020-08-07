import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4D03AQG3nzT2n0og6g/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=FY8XEsrrl2B-gnhXB5qxZkfkqCXuoctocLW0_1QwPHo" alt="Caio Broflovski"/>
                <div>
                    <strong>Caio Broflovski</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Apaixonado pelo E.C Bahia.
                <br/><br/>
                E aqui vai um monte de bla bla bla.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;