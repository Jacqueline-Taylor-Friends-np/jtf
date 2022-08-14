/*
 * Project: Jacqueline Taylor & Friends
 *
 * Created on Sun Apr 24 2022
 *
 * Filename: index.js
 *
 * Copyright (c) 2022 Bujisoft
 */

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from "../components/Hero";
import Feature from '../components/Feature';
import Service from '../components/Service';
import About from '../components/About';
import Webinar from '../components/Webinar';

const Index = () => {
  return (
    <Layout pageTitle="Jacqueline Taylor & Friends">
      <Header />
      <Hero />
      <Service /> 
      <About />
      
      <Feature/>
      <Webinar />
      
      <Footer />
    </Layout>
  )
}

export default Index;