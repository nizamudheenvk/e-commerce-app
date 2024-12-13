import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItme } from '../Redux/slices/wishSlice';
import { addToCart } from '../Redux/slices/Cartslice';

// 
const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()
  const userWishilist = useSelector(state=>state.wishlistReducer)

  const handleCart =(product)=>{
    // dispatch(removeItme(product.id))
    dispatch(addToCart(product))
    const exisitingProduct = userCart?.find(items=>items.id==product.id)
    if(exisitingProduct){
      alert("product quantity incrementing in your cart")
    }else{
      alert("product added to your cart")
    }
  }

  return (
    <>
      <Header />
      <div className="container py-5 ">
{
  userWishilist?.length>0?
  <>
        <h2 className="text-center mb-4 mt-5">Your Wishlist</h2>
        <Row className="gy-4">
          {/* Example Wishlist Item 1 */}
        
          {
            userWishilist?.map(product=>(<Col sm={12} md={6} lg={3}>
              <Card key={product?.id}style={{ width: '100%' ,height:"500px" }}>
                <Card.Img
                  variant="top"
                  src={product?.images}
                />
                <Card.Body>
                  <Card.Title className="text-center">{product?.title}</Card.Title>
                  <h4 className="text-center text-success">Price: {product?.price}</h4>
                  <div className="d-flex justify-content-between">
                   
                      <Button onClick={()=>handleCart(product)} variant="primary">Add to cart</Button>
                   
                    <Button onClick={()=>dispatch(removeItme(product?.id))} variant="danger">Remove</Button>
                  </div>
                
                </Card.Body>
              
              </Card>
           
            </Col>))
            }

        
        </Row>
        
        </>
        :
        <div className=' align-items-center'>
          <img style={{height:"80vh"}} className='w-100 ' src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" />
          <h2 className='text-danger text-center' > YOUR WISHLIST WAS EMPTY</h2>
        </div>
    }
      </div>

    </>
  );
};

export default Wishlist;





{/* <Col sm={12} md={6} lg={3}>
<Card style={{ width: '100%' }}>
  <Card.Img
    variant="top"
    src="https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  />
  <Card.Body>
    <Card.Title className="text-center">Product Title 1</Card.Title>
    <h4 className="text-center text-success">Price: $250</h4>
    <div className="d-flex justify-content-between">
      <Link to="/productview">
        <Button variant="primary">View Details</Button>
      </Link>
      <Button variant="danger">Remove</Button>
    </div>
  </Card.Body>
</Card>
</Col> */}