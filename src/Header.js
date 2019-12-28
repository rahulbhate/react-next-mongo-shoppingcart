// This is the Link API
import React, { useContext }  from 'react';
import Link from 'next/link';
import Input from '../src/components/Input/Input';
function Header (props) {
  return (
    <>
    <div className="site-wrap">
  <header className="site-navbar" role="banner">
      <div className="site-navbar-top">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
              <div className="site-block-top-search">
                <span className="icon icon-search2"></span>
                <Input type={'text'} className={"form-control border-0"} placeholder={'Search....'}onChange={() =>{}}/>
              </div>
            </div>
            <div className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
              <div className="site-logo">
                <a href="/" className="js-logo-clone">Shopping Cart</a>
              </div>
            </div>

            <div className="col-6 col-md-4 order-3 order-md-3 text-right">
              <div className="site-top-icons">
                <ul>
                  <li><a href="/user/profile"><span className="icon icon-person"></span></a></li>
                  <li><a href="#"><span className="icon icon-heart-o"></span></a></li>
                  <li>
                  <Link href="/shoppingcart">
                    <a href="#" className="site-cart">
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">{props.length}</span>
                    </a>
                  </Link>
                  </li>
                  <li className="d-inline-block d-md-none ml-md-0"><a href="#" className="site-menu-toggle js-menu-toggle"><span className="icon-menu"></span></a></li>
                </ul>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="has-children">
              <a href="/">Home</a>
              <ul className="dropdown">
              <li><a className="dropdown-item" href="/shoppingcart">Shopping Cart</a></li>
              
              <Link href="/signup">
                <a className="nav-link dropdown-item">SignUp</a>
              </Link>
              <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
              <li className="nav-item">
              <Link href={{pathname: "/logout"}} as={`/logout`}>
                <a className="nav-link dropdown-item">Logout</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/checkout">
                <a className="nav-link">Checkout</a>
              </Link>
            </li>
                <li><a href="#">Menu One</a></li>
                <li><a href="#">Menu Two</a></li>
                <li><a href="#">Menu Three</a></li>
                <li className="has-children">
                  <a href="#">Sub Menu</a>
                  <ul className="dropdown">
                    <li><a href="#">Menu One</a></li>
                    <li><a href="#">Menu Two</a></li>
                    <li><a href="#">Menu Three</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="has-children">
            <Link href="/about-us">
              <a href="#">About</a>
              </Link>
              <ul className="dropdown">
                <li><a href="#">Menu One</a></li>
                <li><a href="#">Menu Two</a></li>
                <li><a href="#">Menu Three</a></li>
              </ul>
            </li>
            <li className="nav-item">
            <Link href="/shoppingcart">
                    <a href="#" className="site-cart">
                      <span className="icon icon-shopping_cart"></span>
                      <span className="count">0</span>
                    </a>
                  </Link>
            </li>
            <li className="nav-item">
              <Link href="/page">
                <a className="nav-link">Shop</a>
              </Link>
            </li>
            <li><a href="#">Catalogue</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><Link href="/contact">
                <a className="nav-link">Contact</a>
              </Link></li>
          </ul>
        </div>
      </nav>
    </header>
    </div>
    </>
  );
}

export default Header;
