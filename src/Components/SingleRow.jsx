import React from 'react'

import {Col, Row, Button} from 'react-bootstrap';
import './style.css';

const URL = 'https://img.onesignal.com/permanent/f9d912e9-ea0d-455b-b997-b2619fb38fcd';

const SingleRow = (props) => {
    return (
        
        <>
        <Row className = "selectedRow w-100">

                <Col className = "sm px-3 text-center pt-3">
                    <p>
                        {props.data.type}
                    </p>
                </Col>

                <Col className = " sm px-3 text-center pt-3">
                    <p>
                        {props.data.timing === 'Finished' ? <button className = "finished-match"> {props.data.timing} </button> : props.data.timing}
                    </p>
                </Col>
                
                <Col className = "sm px-3 text-center pt-3">
                    <p>
                        {props.data.sponser}
                    </p>
                </Col>

                <Col className = "sm px-3 text-center pt-3">
                    <p>
                        {props.data.matchType}
                    </p>
                </Col>

                <Col className = "sm teamName px-3 text-center pt-3">
                    <p>
                        {props.data.teamName} 
                         
                         <img 
                        src = {URL} 
                        height = {30}
                        width = {30}
                        />                        
                    </p>
                    
                </Col>
                
                <Col className = "sm px-3 text-center pt-3">
                    <p>
                        {props.data.League}
                    </p>
                </Col>

        </Row>
        </>
    )
}

export default SingleRow
