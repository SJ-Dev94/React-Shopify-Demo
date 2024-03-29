import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Carousel from 'react-bootstrap/Carousel'
import Badge from 'react-bootstrap/Badge'
import 'pure-react-carousel/dist/react-carousel.es.css';
import '../../Styles/Carousel.scss'

export default function SalesBody() {


  const SalesHeaderStyles = {
    backgroundColor: 'red',
    marginTop: '-1.5rem',
    marginBottom: '1rem',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const SalesButtonStyling = {
    height: '25%',
    width: '10em',
    backgroundColor: 'Transparent',

    margin: '1.75% 1.75% 1% 0',
    border: '2.5px solid #FFF',
    paddingTop: '.3em',
    paddingBottom: '.3em',
    borderRadius: '0px',
    color: '#FFF',
  }

  const SalesTextStyling = {
    marginTop: '1.75%',

    color: '#FFF',
    fontSize: '1.6rem',
    letterSpacing: '1.5px'
  }

  const imageStyling = {
    objectFit: 'contain'
  }

  return (
    <Row >
      <Col className="text-center" style={SalesHeaderStyles}>
        <Image alt="sales" fluid src="https://image.uniqlo.com//UQ/ST3/us/imagesother/home/Fallsale-banner.png" />
        <button className="text-center" size="small" style={SalesButtonStyling}><strong>Men's</strong></button>
        <button style={SalesButtonStyling}><strong>Women's</strong></button>
      </Col>
    </Row>
  )
}
