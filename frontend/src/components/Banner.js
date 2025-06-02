// src/components/Banner.js
import React from 'react';
import { Container} from 'react-bootstrap';
import './Banner.css'; // Custom CSS styles

function Banner() {
  return (
    <div className="banner">
      <Container className="text-center text-white">
        <h1 className="banner-title">Inspired by Nature, Designed for You</h1>
        <p className="banner-subtitle">Browse Our New Launches and Featured Discounts</p>
      
      </Container>
    </div>
  );
}

export default Banner;
