import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { emptyCart, quantitydecrement, quantityIncrement, removeCartItem } from '../Redux/slices/Cartslice';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa'; // For the green checkmark

const Cart = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);
  const userCart = useSelector(state => state.cartReducer);

  useEffect(() => {
    if (userCart?.length > 0) {
      setCartTotal(userCart?.map(item => item.totalprice).reduce((a, b) => a + b));
    }
  }, [userCart]);

  const handleDecrementQuantity = (product) => {
    if (product?.quantity > 1) {
      dispatch(quantitydecrement(product.id));
    } else {
      dispatch(removeCartItem(product.id));
    }
  };

  const checkout = () => {
    dispatch(emptyCart());
    setTimeout(() => {
      setShow(false);
    }, 3000);

    setShow(true);
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="container">
        <div className="row">
          {userCart?.length > 0 ? (
            <>
              {/* Cart Table Section */}
              <div className="col-lg-8 col-md-12 mb-4">
                <div className="card shadow-sm border-0">
                  <div className="card-header bg-dark text-white">
                    <h5 className="mb-0">Your Shopping Cart</h5>
                  </div>
                  <div className="card-body">
                    <div style={{ overflowX: 'auto' }}>
                      <table className="table table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {userCart?.map(products => (
                            <tr key={products.id}>
                              <td>
                                <img
                                  src={products?.images}
                                  alt="Product"
                                  className="img-fluid rounded"
                                  style={{ width: '60px', height: '60px' }}
                                />
                              </td>
                              <td>{products?.title}</td>
                              <td>{products?.totalprice}</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button onClick={() => handleDecrementQuantity(products)} className="btn btn-sm btn-outline-secondary">
                                    -
                                  </button>
                                  <span className="mx-2">{products?.quantity}</span>
                                  <button onClick={() => dispatch(quantityIncrement(products?.id))} className="btn btn-sm btn-outline-secondary">
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>
                                <button onClick={() => dispatch(removeCartItem(products?.id))} className="btn btn-sm btn-danger">
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cart Summary Section */}
              <div className="col-lg-4 col-md-12">
                <div className="card shadow-sm border-0">
                  <div className="card-header bg-dark text-white">
                    <h5 className="mb-0">Cart Summary</h5>
                  </div>
                  <div className="card-body">
                    <p className="d-flex justify-content-between">
                      <span>TOTAL:</span>
                      <strong>$ {cartTotal}</strong>
                    </p>
                    <hr />
                    <button onClick={checkout} className="btn btn-primary btn-block w-100">
                      Proceed to Checkout
                    </button>
                    <Link to={'/view'}>
                      <button style={{ marginTop: '10px' }} className="btn btn-outline-secondary btn-block w-100">
                        Continue Shopping
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center">
              <img
                style={{ maxHeight: '400px', width: '100%' }}
                className="img-fluid"
                src="https://schoolville.com/assets/img/empty-cart-illustration.gif"
                alt="Empty Cart"
              />
              <h2 className="text-danger mt-3">YOUR CART IS EMPTY</h2>
            </div>
          )}
        </div>
      </div>
      <Footer />

      {/* Modal */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        size="sm"
      >
        <Modal.Body className="text-center">
          <FaCheckCircle size={60} color="green" />
          <h4 className="mt-3">Order Confirmed!</h4>
          <p className="text-success">Thank you for shopping with us. Your order is being processed.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="w-100">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
