import React from 'react';
import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
  
  render() {
    const { children } = this.props;
    return (
        <div className="container-fluid">
        <React.Fragment>
          <Header />
          {children}
          <Footer />
        </React.Fragment>
        </div>
    );
  }
}
