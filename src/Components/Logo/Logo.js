import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logo.scss';
import { ReactComponent as LogoSvg } from './book.svg';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Logo(props) {
    return (
    <a href={"../../index.html"} className={'stretched-link', 'text-decoration-none'}>
        <Container className={'fs-3', 'text-light'}>
           <LogoSvg />
           <span style={{paddingLeft: 10 }}>World Name</span>
        </Container>
     </a>
    )
}