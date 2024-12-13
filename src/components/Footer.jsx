import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-5 ">
      <div  className="container">
        <div className="row">
          {/* Logo and About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <i className="fa-solid fa-truck-fast fa-2x text-white"></i>
              <span className="ml-3 h5 mb-0">E Cart</span>
            </div>
            <p className="text-justify">
              Designed and built with all the love in the world by the Luminar
              team with the help of our contributors. <br />
              Code licensed Luminar, Docs CC BY 3.0. <br />
              Currently v5.3.2.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Landing Page</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Home Page</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Cart Page</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Wishlist</a></li>
            </ul>
          </div>

          {/* Guides Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Guides</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">React</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Tailwind CSS</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">React Router DOM</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase mb-3">Contact Us</h5>
            <p className="mb-2">Stay updated with our latest news!</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2024 Luminar Team. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
