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

export default function LandingCarousel() {


  const flexxem = {
    display: 'flex',
    flexDirection: 'row'
  }


  const iframeWrapper = {
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '60%',
  }

  const bottomSpacing = {
    marginBottom: '1.75rem'
  }

  const flexColumn = {
    display: 'flex',
    flexDirection: 'column'
  }

  const carouselMargin = {

  }

  return (

    <Carousel style={bottomSpacing}>
      <Carousel.Item>
        <Card>
          <Row>
            <Col sm={12} md={12} lg={8} xl={8}>
              <Image className="w-100" fluid src="https://image.uniqlo.com//UQ/ST3/us/imagesother/home/191025-fleece25-1000x750-04.jpg?$jpgMQ$&wid=760" />
            </Col>
            <Col>
              <Badge variant="secondary">Uniqlone Favorites</Badge>
              <Card.Text>
                <p>
                  UNIQLONE has been providing the comfort and warmth of fleece since 1994.
                    </p>
                <h5>
                  <strong>
                    Celebrating 25 years!
                      </strong>
                </h5>
                <p>
                  <strong>
                    Fluffy Full-Zip Fleece
                      </strong>
                </p>
                <Button>Men</Button>
                <br />
                <p>
                  <strong>
                    Fluffy Full-Zip Fleece
                      </strong>
                </p>
                <Button>Women</Button>
              </Card.Text>
              <Card.Text>
                <p>Lorem Ipsum Delore de fuck dis shits
                     </p>
              </Card.Text>
            </Col>
          </Row>

        </Card>
      </Carousel.Item>

    </Carousel>


  )
}

/* <CarouselProvider
     naturalSlideWidth={100}
     naturalSlideHeight={60}
     totalSlides={3}
     style={carouselMargin}
   >
     <Slider>
       <Slide index={0}>




       </Slide>
       <Slide index={1}>
         <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
       </Slide>
       <Slide index={2}>
         <iframe class="embed-responsive-item" title="fuck" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"></iframe>
       </Slide>
     </Slider >
   </CarouselProvider >*/