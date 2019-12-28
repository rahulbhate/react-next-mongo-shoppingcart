import React, { Component } from 'react';
import Router from 'next/router';
import AuthHelperMethods from './AuthHelperMethods';

export default function withAuthInitial(AuthComponent) {
  const Auth = new AuthHelperMethods();
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      // Check if Page has a `getInitialProps`; if so, call it.
      console.log('withAuthInitial method called');
      const pageProps =
        AuthComponent.getInitialProps &&
        (await AuthComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      if (!Auth.loggedIn()) {
        Router.push('/login');
      }
      this.setState({ isLoading: false });
    }

    render() {
      return (
        <div>
          {this.state.isLoading ? (
            <div>LOADING....</div>
          ) : (
            <AuthComponent {...this.props} auth={Auth} />
          )}
        </div>
      );
    }
  };
}
