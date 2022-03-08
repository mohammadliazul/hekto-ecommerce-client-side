import React from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import bannerSofa from './../../../Images/sofa promotional header.png';
import bannerLight from './../../../Images/banner-light.png';
import './Banner.css';


const Banner = () => {
    return (
        <>
            <Row className='banner-style'>
                <Col className='d-flex align-items-center' xs={12} md={6}>

                    <Col className='align-self-start' xs={4} md={4}>
                        <Image className='img-fluid ' src={bannerLight} alt='' />
                    </Col>
                    <Col xs={8} md={8}>
                        <span className='banner-text'>
                            <h6>Best Furniture For Your Castle....</h6>
                            <h1>New Furniture Collection</h1>
                            <h1>Trends in 2022</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                                in phasellus non in justo.</p>
                            <br />
                            <Button className='button'>Shop Now</Button>
                        </span>
                    </Col>

                </Col>
                <Col className='align-self-center' xs={12} md={6}>
                    <Image className='img-fluid ' src={bannerSofa} alt='' />
                </Col>
            </Row>
        </>
    );
};

export default Banner;