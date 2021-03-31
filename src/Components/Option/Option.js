import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Option.scss';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Option(props) {
    return (
        <Container className={'Container'}>
                
            <a href={props.where} className={ 'text-decoration-none'}>
                <img src={"https://picsum.photos/25/25"} className={'icon'} />
                {props.name}
            </a>

        </Container>
    )
}