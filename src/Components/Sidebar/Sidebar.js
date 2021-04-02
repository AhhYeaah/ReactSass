import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Sidebar.scss';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Option from '../Option/Option';
import Logo from '../Logo/Logo';
import ExpOption from '../ExpOption/ExpandableOption';

export default function Sidebar(props) {
    return (
        <section className={'sidebar text-light'}>
                <Logo></Logo>
                <ul>
                    <li>
                        <h6 style={{marginBlockStart: 0}}>Apps</h6>
                    </li> 
                    <li>
                    <ExpOption name="Dashboard">
                        <Option name="World"></Option>
                        <Option name="Space"></Option>
                    <ExpOption name="Dashboard">
                        
                    </li> 
                </ul> 
                
        </section>
    )
}