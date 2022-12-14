/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: Hero.js
 *
 * Copyright (c) 2022 Bujisoft
 */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
//import ProfileImage from "../public/images/jackie.jpg";
import ProfileImage from "../public/images/JTH_swan.png";
//import ProfileImage from "../public/images/main-m.png";


const Hero = () => {
  return (
    <section className="section section1 position-relative ">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="pr-lg-5">
              <p className="text-uppercase text-primary font-weight-medium f-14 mb-4"></p>
              <h1 className="mb-4 font-weight-normal line-height-1_4">Grand Opening</h1>
              <p className="text-white mb-4 pb-2">
                Welcome to our new website. We are happy to announce our new calendar based booking system integrated with Facetime so our students can easily save their meeting URLS and join lessons directly from their calendar. 
                

              </p>
             
              <Link href="/login" passHref>
                <a className="btn btn-success">Login <span className="ml-2 right-icon">&#8594;</span></a>
              </Link>

              
            </div>
          </Col>
          <Col lg={6}>
            <div className="mt-5 mt-lg-0">
            <br></br>
            <Image 
    
              src={ProfileImage}
              width={700}
              height={700}
              alt="Jacqueline Taylor & Friends"
            />

              
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;