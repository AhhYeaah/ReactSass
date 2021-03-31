//React imports
import React from 'react';
import ReactDOM from 'react-dom';

//CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Local components
import App from './Components/App/App';
import ExpOption from './Components/ExpOption/ExpandableOption'
import Option from './Components/Option/Option'
import Sidebar from './Components/Sidebar/Sidebar'

//Bootstrap components
import { Accordion, Button } from 'react-bootstrap'

//?
import reportWebVitals from './reportWebVitals';
import Wrapper from './Components/Wrapper/Wrapper';


ReactDOM.render(
  <React.StrictMode>
    <Wrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
