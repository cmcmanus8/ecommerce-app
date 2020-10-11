import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './containers/HomePage';
import ProductPage from './containers/ProductPage';
import CartPage from './containers/CartPage';
import SigninPage from './containers/SigninPage';
import { useSelector } from 'react-redux';
import RegisterPage from './containers/RegisterPage';
import ProductsPage from './containers/ProductsPage';
import ShippingPage from './containers/ShippingPage';
import PaymentPage from './containers/PaymentPage';
import PlaceOrderPage from './containers/PlaceOrderPage';

function App() {

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/" >Calum & Barrett</Link>
          </div>
          <div className="header-links">
            <Link to="/cart">Cart</Link>
            {
              userInfo
                ? <Link to="/profile">{userInfo.name}</Link>
                : <Link to="/signin">Sign In</Link>
            }
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
          <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/vitamins">Vitamins</Link>
            </li>
            <li>
              <Link to="/supplements">Supplements</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin" component={SigninPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={PlaceOrderPage} />
            <Route path="/" exact={true} component={HomePage} />
          </div>

        </main>
        <footer className="footer">
          All rights reserved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
