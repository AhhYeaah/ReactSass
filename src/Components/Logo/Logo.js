import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Logo.scss';
import { ReactComponent as LogoSvg } from './book.svg';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Logo(props) {
    return (
        <div className={"logo"} style={{perspective: 1}}>

            <a href={"../../index.html"} className={'stretched-link text-decoration-none'}>

                <Container fluid className={'text-light fs-3'}>
                    <LogoSvg/> 
                    {
                    /*
                    This beautifull svg was provided by the god himself
                    Just kidding, its available right here: https://fontawesome.com/icons/book-open?style=solid
                    Go check it out!
                    */
                    }
                    <h3>{props.Wname ?? "World Name"}</h3>
                    {
                    /*
                    Here I have an prop that can be altered by an backend request
                    */
                    }
                </Container>

            </a>
        
        </div>
    )
}