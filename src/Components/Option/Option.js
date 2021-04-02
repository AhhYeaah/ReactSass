import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Option.scss';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Option(props) {
    let icone
    if (props.inside ?? false){
        icone  = <img src={"https://picsum.photos/25/25"} className={'icon'} />
    }
    return (
        <Container className={'Container'}>
            <a href={props.where} className={'text-decoration-none'}>   
                {icone}
                <span> {props.name ?? 'Option'} </span>
            </a>
        </Container>
    )
}