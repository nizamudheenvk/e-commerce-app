import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from '../assets/bg1.jpg';
import secondBG from '../assets/secondBG.jpg';
import img1 from '../assets/img1.jpg';
import './Home.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section d-flex flex-column justify-content-center align-items-start text-light position-relative"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // Parallax effect
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        {/* Gradient Overlay */}
        <div className="container px-5 text-center" data-aos="fade-down">
          <h1 className="hero-title display-3 fw-bold text-gradient">
            Shop Till You <br /> <span className="text-highlight">Drop</span>
          </h1>
          <p className="lead mt-3 text-gradient">
            {/* Discover the best deals, exclusive collections, and shop effortlessly from the comfort of your home! */}
          </p>
          <Link to="/view">
            <button  className="btn glass-button btn-lg mt-4 px-5 button bg-dark">Start Shopping</button>
          </Link>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section container py-5">
        <div className="row g-4">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              className="img-fluid rounded shadow-lg"
              src={secondBG}
              alt="Stylish shopping display"
            />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start"
            data-aos="fade-left"
          >
            <h2 className="display-5 fw-bold mb-3 text-gradient">Unmatched Variety</h2>
            <p className="lead text-muted">
              From trendy apparel to everyday essentials, we bring you everything you need under one roof.
            </p>
            <Link to="/view">
              <button className="btn neumorphic-button btn-lg mt-3 px-4 shadow">Explore Collections</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Promotions Section */}
      <div className="promotions-section container py-5 text-center justify-content-center align-items-center">
        <h2 className="display-4 fw-bold text-gradient" data-aos="zoom-in">
          Exclusive Offers
        </h2>
        <p className="text-muted lead mb-5" data-aos="fade-up">
          Get up to <span className="text-success fw-bold">50% OFF</span> on your favorite products!
        </p>
        <div className="row g-4 align-items-center jusify-content-center">
          <div className="col-lg-4" data-aos="flip-left">
            <Card className="h-100 glass-card shadow border-0  jusify-content-center align-items-center">
              <Card.Img
                variant="top"
                src={img1}
                alt="Special offer item"
                className="rounded-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body>
                <h5 className="fw-bold">Trendy Fashion</h5>
                <p className="text-muted">Save big on the latest styles for every season.</p>
                <Link to="/view">
                  <button className="btn btn-warning shadow-sm">View more</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4" data-aos="flip-left">
            <Card className="h-100 glass-card shadow border-0 ">
              <Card.Img
                variant="top"
                src="https://images.pexels.com/photos/919453/pexels-photo-919453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Special offer item"
                className="rounded-top"
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body>
                <h5 className="fw-bold">Daily Essentials</h5>
                <p className="text-muted">Get discounts on your everyday must-haves.</p>
                <Link to="/view">
                  <button className="btn btn-warning shadow-sm">View more</button>
                </Link>
              </Card.Body>


              </Card>
          </div>
          <div className="col-lg-4" data-aos="flip-right">
            <Card className="h-100 glass-card shadow border-0">
              <Card.Img 
                variant="top"
                src="https://i.imgur.com/ZANVnHE.jpeg"
                alt="Special offer item"
                className="rounded-top img-fluid "
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <Card.Body>
                <h5 className="fw-bold">Daily Essentials</h5>
                <p className="text-muted">Get discounts on your everyday must-haves.</p>
                <Link to="/view">
                  <button className="btn btn-warning shadow-sm">View more</button>
                </Link>
              </Card.Body>

            </Card>
          </div>
        </div>

        
      </div>

      {/* Call-to-Action Section */}
      <div
        className="cta-section text-center text-light py-5 position-relative"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed', // Parallax effect
          backgroundPosition: 'center',
        }}
      >
        <div className="overlay"></div> {/* Gradient Overlay */}
        <div className="container" data-aos="fade-up">
          <h2 className="display-4 fw-bold mb-3 text-gradient">Join Our Shopping Community</h2>
          <p className="lead">
            Sign up today and enjoy exclusive perks and offers tailored just for you.
          </p>
          <button className="btn glass-button btn-lg mt-4 px-5">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default Home;
