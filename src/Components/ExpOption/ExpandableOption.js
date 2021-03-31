import React from 'react';

import { Accordion, Card, Button, Row, Col } from 'react-bootstrap';
import Option from '../Option/Option'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ExpOption(props) {

    if (props.children && (props.children.length ?? 0) > 1){ 
        //I have never used this ?? before, interesting way of seeing if something is null 
        return (
            //Here we have an accordion, a component from react-bootstrap      
            <Accordion defaultActiveKey="0"> 

                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {props.name}
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">
                        <ul>
                            {
                                /*
                                    Here im trying to make every element get in a list tag.
                                    I suffered a lot for making this because i didnt know 
                                    that i couldnt return a value from foreach, and had to
                                    use map instead. Well, leason learned.

                                */
                                props.children.map((element, i) => {
                                    return (
                                        <li key={i}>
                                            {element}
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </Accordion.Collapse>
            </Accordion>
        )
    }
    else{
        return <Option name="Dont use expandable options for just one element, use option instead"/>
    }
    
}