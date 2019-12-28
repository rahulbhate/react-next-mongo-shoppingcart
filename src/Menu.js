// This is the Link API
import React  from 'react';
import Link from 'next/link';
function Menu () {
  return (
    <>
    <div className="site-wrap">
  <div className="site-navbar" role="banner">
    <nav className="site-navigation text-right text-md-center" role="navigation">
        <div className="container">
          <ul className="site-menu js-clone-nav d-none d-md-block">
            <li className="has-children">
              <a href="/">Home</a>
              <ul className="dropdown">
              <li><a className="dropdown-item" href="/shoppingcart">Shopping Cart</a></li>
              {!auth.loggedIn ? 
              <Link href="/signup">
                <a className="nav-link dropdown-item">SignUp</a>
              </Link>
              : null}
              {auth.loggedIn ? 
              <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            : null}
            {auth.loggedIn ?
              <li className="nav-item">
              <Link href={{pathname: "/logout"}} as={`/logout`}>
                <a className="nav-link dropdown-item">Logout</a>
              </Link>
            </li>
            : null}
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
      </div>
      </div>
    </>
  );
}

export default Menu;
