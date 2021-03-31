import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.scss';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Option from '../Option/Option';
import Logo from '../Logo/Logo';

export default function Sidebar(props) {
    return (
        <section className={'sidebar'}>
            <div>
                <Logo></Logo>
            </div>
        </section>
    )
}