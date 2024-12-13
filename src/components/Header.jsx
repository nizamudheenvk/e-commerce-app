import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProducts } from '../Redux/slices/produceslice';



const Header = ({insideView}) => {
  const dispatch = useDispatch()
const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <Navbar style={{ zIndex: "1", height: "8vh" }} className="bg-dark position-fixed w-100">
      <Container className='d-flex flex-wrap justify-content-between align-items-center'>
        <Link to={'/'} style={{ textDecoration: "none" }}>
          <Navbar.Brand style={{ color: "white" }} className='fs-5 fw-bolder'>
            <i className='fa-solid fa-truck-fast me-2'></i>
            emporium
          </Navbar.Brand>
        </Link>
      { insideView && <input 
          type="text" 
          onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))}
          placeholder='search products' 
          className="form-control me-2 my-2" 
          style={{ flex: '1', maxWidth: '300px' }} // Limit max width for responsiveness
        />}
        <div className='d-flex align-items-center'>
          <div className='position-relative me-3'>
            <Link to={'/wishlist'}>
            <i className='fa-solid fa-heart text-light' style={{ fontSize: '1.5rem' }}></i>
            </Link>
            <span className='bg-black text-white rounded-circle position-absolute top-0 start-100 translate-middle p-1'>{userWishlist?.length}</span>
          </div>
          <div className='position-relative'>
           <Link to={'/cart'}> <i className='fa-solid fa-cart-plus text-light' style={{ fontSize: '1.5rem' }}></i></Link>
            <span className='bg-black text-white rounded-circle position-absolute top-0 start-100 translate-middle p-1'>{userCart?.length}</span>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;