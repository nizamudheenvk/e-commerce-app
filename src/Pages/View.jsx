import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../Redux/slices/produceslice';
import Footer from '../components/Footer';
import './View.css';  // Custom CSS file

const View = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);
  console.log(allProducts,loading,errorMsg);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Header insideView={true} />
      {
        loading ?
          <div style={{padding:"100px"}} className='d-flex justify-content-center align-items-center   '>
            <img style={{ fontSize: "400px" }} width={'70px'} height={'70px'} src="https://media1.tenor.com/m/khzZ7-YSJW4AAAAd/cargando.gif" alt="" />
            Loading ...
          </div>
          :
          <>
            <div className="container py-5">
              <Row className="gy-4">
                {/* Cards */}
                {
                  allProducts?.length > 0 ?
                    allProducts?.map(product => (
                      <Col key={product?.id} sm={12} md={6} lg={3}>
                        <Card  style={{height:"350px"}} className="product-card mt-5">
                          <Card.Img variant="top" src={product?.images} />
                          <Card.Body>
                            <Card.Title className='text-center'>
                              {product?.title}
                            </Card.Title>
                            <h3 className='text-center'>Price : ${product?.price}</h3>
                            <div className="d-flex justify-content-center">
                              <Link to={`/${product?.id}/productview`}>
                                <Button variant="dark">View More</Button>
                              </Link>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    ))
                    :
                    <div className='text-red'>No products are available</div>
                }
              </Row>
            </div>
          </>
      }
      <Footer />
    </>
  );
};

export default View;
