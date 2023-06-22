import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../components/Header';


function Cart() {
    const [cart, setCart] = useState([]);
  
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem('cart'));
      setCart(storedCart || []);
    }, []);
    
    const removeItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
      };
      

  return (
    <>
      <Header />
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="text-center">My Cart</h1>
          </div>
          <br />
          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <td style={{ padding: '0px 100px 0px 10px' }}>
                  <b>Product</b>
                </td>
                <td style={{ padding: '0px 100px 0px 10px' }}>
                  <b>Name</b>
                </td>
                <td style={{ padding: '0px 50px 0px 0px' }}>
                  <b>Price</b>
                </td>
                <td style={{ padding: '0px 50px 0px 0px' }}>
                  <b>Quantity</b>
                </td>
              </tr>
              {cart?.map((cartItem, cartIndex) => (
                <tr key={cartItem.id}>
                  <td style={{ padding: '0px 100px 0px 10px' }}>
                    <img src={cartItem.image} alt={cartItem.name} style={{ height: '7rem',width: '8rem' }} />
                  </td>
                  <td style={{ padding: '0px 100px 0px 10px' }}>{cartItem.name}</td>
                  <td style={{ padding: '0px 50px 0px 0px' }}>₹{cartItem.price}</td>
                  <td style={{ padding: '0px 50px 0px 0px' }}>{cartItem.quantity}</td>
                  <td>
                    <button
                      style={{ border: '2px solid #fcba03' }}
                      className="btn btn-light ms-2"
                      onClick={() => {
                        const updatedCart = cart.map((item, index) => {
                          if (cartIndex === index) {
                            return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
                          }
                          return item;
                        });
                        setCart(updatedCart);
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                      }}
                    >
                      -
                    </button>
                    <button
                      style={{ border: '2px solid red' }}
                      className="btn btn-light ms-2"
                      onClick={() => {
                        const updatedCart = cart.map((item, index) => {
                          if (cartIndex === index) {
                            return { ...item, quantity: item.quantity + 1 };
                          }
                          return item;
                        });
                        setCart(updatedCart);
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                      }}
                    >
                      +
                    </button>
                    Rs. {cartItem.price * cartItem.quantity}
                    <button
                      className="btn btn-dark ms-2"
                      onClick={() => {
                        removeItem(cartItem.id);
                      }}
                    >
                      Remove Item
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <br />
        <div className="col-auto ms-auto">
          <h3 className="text-center">
            Total Price : RS.
            {cart.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)}
          </h3>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-primary m-2">Pay Now</button>
        </div>
      </section>
      
    </>
  );
}

export default Cart;
