import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function PlaceOrderPage (props) {

  const cart = useSelector(state => state.cart);

  const { cartItems, shipping, payment } = cart;
  if (!shipping) {
    props.history.push("/shipping");
  } else if (!payment) {
    props.history.push("/payment");
  }

  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const totalPrice = itemsPrice + shippingPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // TODO: create order handler
  }

  useEffect(() => {

  }, []);

  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
            </h3>
            <div>
              {cart.shipping.address}, {cart.shipping.city}, {cart.shipping.postalCode}, {cart.shipping.country} 
            </div>
          </div>
          <div>
            <h3>
              Payment
            </h3>
            <div>
              Payment Method: Paypal
            </div>
          </div>
          <div>
          <ul className="placeorder-info-container">
            <li>
              <h3>
                Shopping Cart
              </h3>
            </li>
            {
              cartItems.length === 0
                ? <div>Cart is empty</div>
                : cartItems.map( item =>
                  <li>
                    <div className="placeorder-cart-image">
                      <img src={item.image} alt="product" />
                    </div>
                    <div className="placeorder-cart-name">
                      <div>
                        <Link to={"/product/" + item.product}>
                          {item.name}
                        </Link>
                      </div>
                      <div>
                        Qty: {item.qty}
                      </div>
                    </div>
                    <div className="placeorder-cart-price">
                      £{item.price * item.qty}
                    </div>
                  </li>
                  )
            }
          </ul>
          </div>
        </div>
        <div className="placeorder-action">
          <ul>
            <li>
              <button className="button primary full-width" onClick={placeOrderHandler} >Place Order</button>
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>£{itemsPrice}</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>£{shippingPrice}</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>£{totalPrice}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  )
}

export default PlaceOrderPage;