import React, { useState, useEffect } from 'react'
    import { Row, Col, Navbar } from 'react-bootstrap';
import './cook.css';

import { IMAGE_URL, IMAGE_URL_1, IMAGE_URL_2, IMAGE_URL_3, FOOD_PIC_1, FOOD_PIC_2, FOOD_PIC_3, FOOD_PIC_4} from './Image_Link';

const Profile = () => {

    return (
        <>
            <Navbar className='navigation-bar' role = 'navigation'>
                <Navbar.Brand href="/profile"> ChefKart</Navbar.Brand>

                <Navbar.Collapse className="justify-content-end">
                    Logout
                </Navbar.Collapse>
            </Navbar>

            <img
                className = " my-3 mx-auto cook-image"
                src = {IMAGE_URL}
                width = {200}
                height = {200}
            />

            <p className = 'verification-status py-1' style = {{ fontWeight : 'bold'}}>
                <img className= "mx-2"
                    src = 'https://www.flaticon.com/premium-icon/icons/svg/2512/2512767.svg'
                    width = {30}
                    height = {30}        
                />

                Verified
            </p>

            <div className = 'rating px-0 mx-3'>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>    
            </div>

            <hr className = "w-75 mx-auto breaker" />


            <Row className = 'mx-auto  my-3' >
            <Col className = 'col-sm-4 text-center'>
                 
                     <img
                        src = {IMAGE_URL_1}
                        width = {34}
                        height ={34}
                    />
                 
                 <p className ='text-center'>
                        Currently 
                        Working in
                    </p> 
                    
                    <hr className = 'dashed-line mx-auto'/>
                    <p className ='text-center my-chef'>
                         4 houses
                    </p>
                </Col>

                <Col className = 'col-sm-4 text-center'>
                    
                    <img
                        src = {IMAGE_URL_2}
                        width = {36}
                        height ={36}
                    />
                    
                    <p className ='text-center'>
                    Expert in
                    cuisines
                    </p>

                    <hr className = 'dashed-line mx-auto'/>

                    <p className ='text-center my-chef'>
                        North Indian,
                        Chinese
                    </p>
                </Col>

                <Col className = 'col-sm-4 text-center'>

                    <img
                        src = {IMAGE_URL_3}
                        width = {36}
                        height ={36}
                    />

                   <p className = "text-center">
                   Signature
                    Dishes
                   </p>

                    <hr className = 'dashed-line mx-auto'/>
                    <p className ='text-center my-chef'>
                        Kachodi-Kadhi,
                        Rajma Rice
                    </p>
                </Col>
            </Row>

            {/* Image Header */}
            <Row className = 'food-section'>
                <Col className = 'col-sm-3 text-center'>
                    <img
                    className = 'food-pic'
                    src = {FOOD_PIC_1}
                    />
                </Col>

                <Col className = 'col-sm-3 text-center'>
                    <img 
                    className = 'food-pic'
                    src = {FOOD_PIC_2}
                    />
                </Col>

                <Col className = 'col-sm-3 text-center'>
                    <img 
                    className = 'food-pic'
                    src = {FOOD_PIC_3}
                    />
                        
                </Col>

                <Col className = 'col-sm-3 text-center'>
                
                        <img 
                        className = 'food-pic'
                        src = {FOOD_PIC_4}
                        />
                </Col>
            </Row>

            <div className = 'address my-3'>
                <p> Address: </p>
                <p> Akshya Nagar 1st Block 1st Cross </p>
                <p> Rammurthy Nagar Delhi-260016 </p>
            </div>
             
        </>
    )
}

export default Profile
