import React from 'react';
import {Link} from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

// Para receber os valores como parametros, é necessário definir a função como uma contante, e usar o FC
// Abaixo estão listadas as propriedades que o componente pode receber, se passar ? após o nome da variavel, ela é opcional
interface PageHeaderProps {
    title: string;
    description?: string;
}

// Tenho um componente chamado PageHeader, ele é um FunctionComponent (FC) e ele possui as propriedades de PageHeaderProps
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoIcon} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{ props.title }</strong>
                { props.description && <p>{ props.description }</p> }
                { props.children }
            </div>
        </header>
    );
}

export default PageHeader;