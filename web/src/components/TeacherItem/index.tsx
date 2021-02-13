import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';


function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars.githubusercontent.com/u/61925933?s=400&u=540685fb44f515dbfabee8d980c320ce632294ea&v=4" 
                        alt="Douglas"/>
                        <div>

                            <strong>Douglas Schimel</strong>
                            <span>Português</span>

                        </div>
                    </header>

                    <p>
                        Entusiasta das melhores gramáticas existentes.
                        <br />

                        Ele é um dos melhores professores de lingua nativa do Brasil!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 20,00</strong>
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