import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Wrapper.scss';

import Sidebar from '../Sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from '../Dashboard/Dashboard';

export default function Wrapper(props) {
    return (
        <section className={'wrapper'}>
            <Sidebar></Sidebar>
            <Dashboard></Dashboard>
        </section>
    )
}