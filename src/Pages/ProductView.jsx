import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addtoWishlist } from '../Redux/slices/wishSlice';
import { addToCart } from '../Redux/slices/Cartslice';

const ProductView = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const userwishlist = useSelector(state=>state.wishlistReducer)
  const dispatch =useDispatch()
  const [product,setProduct]=useState({})
  const {id}=useParams()
  // console.log(id);
  // console.log(product);
  // console.log(allProducts);
  useEffect(()=>{

    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      console.log( allProducts.find(item=>item.id==id));
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  const handleWishlist =()=>{
    const exisitingProduct = userwishlist?.find(items=>items.id==id)

    if(exisitingProduct){
      alert("product alredy in your wishlist existing")
    }else{
      dispatch(addtoWishlist(product))
      alert("product added to your wishlist")
    }
  }

  const handleCart =()=>{
  
    dispatch(addToCart(product))
    const exisitingProduct = userCart?.find(items=>items.id==id)
    if(exisitingProduct){
      alert("product quantity incrementing in your cart")
    }else{
      alert("product added to your cart")
    }


  }




  
  
  return (
    <>
      <Header />
      <Container className="py-5">
        <Row className="align-items-center" style={{ marginTop: '100px' }}>
          {/* Product Image */}
          <Col md={6} className="mb-4 mb-md-0">
            <Card className="shadow border-0">
              <Card.Img
                variant="top"
                src={product?.images}
                alt="Product"
                className="rounded"
              />
            </Card>
          </Col>

          {/* Product Details */}
          <Col md={6}>
            <Card className="h-100 shadow border-0">
              <Card.Body>
                <Card.Title className="text-center fs-4 fw-bold mb-3">
                 {product?.title}
                </Card.Title>
                <h3 className="text-center text-success mb-4">Price: {product?.price}</h3>
                <Card.Text>
                  <strong>Description:</strong>
                  <p className="text-muted">
                   {product?.description}
                  </p>
                </Card.Text>
                <div className="d-flex justify-content-center gap-3">
                
                    <Button onClick={handleCart} variant="primary" className="px-4">
                      Add to Cart
                    </Button>
                 
                
                    <Button onClick={handleWishlist} variant="danger" className="px-4">
                      Add to Wishlist
                    </Button>
                 
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default ProductView;
