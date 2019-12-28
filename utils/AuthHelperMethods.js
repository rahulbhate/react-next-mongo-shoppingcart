import decode from 'jwt-decode';
import Router from 'next/router';
import 'isomorphic-unfetch';

export default class AuthHelperMethods {
  // Initializing important variables
  constructor(domain) {
    //THIS LINE IS ONLY USED WHEN YOU'RE IN PRODUCTION MODE!
    // this.domain = domain || 'http://localhost:3000'; // API server domain
  }
  login = (inputValues) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(inputValues),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
    };
    fetch(`/login`, options)
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.json());
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((res) => {
        console.log(res);
        this.setToken(res.token);
        Router.push('/page');
      })
      .catch((err) => console.log('Error, with message:', err.statusText));
  };
contact = (inputValues) =>{
  const options = {
    method: 'POST',
    body: JSON.stringify(inputValues),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };
  fetch(`/contact`, options)
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.json());
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((res) => {
        console.log(res);
        Router.push('/contact');
      })
      .catch((err) => console.log('Error, with message:', err.statusText));
};
signup = (inputValues) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(inputValues),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
  };
  fetch(`/signup`, options)
      .then((res) => {
        if (res.ok) {
          return Promise.resolve(res.json());
        } else {
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
      })
      .then((res) => {
        console.log(res);
        Router.push('/login');
      })
      .catch((err) => console.log('Error, with message:', err.statusText));
};
checkout = (inputValues) =>{
  console.log(inputValues);
}
  loggedIn = () => {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken(); // Getting token from localstorage
    console.log(!!token && !this.isTokenExpired(token));
    return token; // handwaiving here
  };

  isTokenExpired = (token) => {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        // Checking if token is expired.
        console.log('isToken Expired function called');
        return true;
      } else return false;
    } catch (err) {
      console.log('expired check failed! Line 42: AuthService.js');
      return false;
    }
  };

  setToken = (idToken) => {
    // Saves user token to localStorage
    localStorage.setItem('Token', idToken);
    sessionStorage.setItem('Token',idToken);
  };

  getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('Token');
  };

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('Token');
    sessionStorage.removeItem('Token');
    Router.push('/login');
  };

  getConfirm = () => {
    // Using jwt-decode npm package to decode the token
    let answer = decode(this.getToken());
    console.log('Recieved answer!');
    return answer;
  };

  _checkStatus = (response) => {
    // raises an error in case response status is not a success
    if (response.status == 200) {
      // Success status lies between 200 to 300
      return response;
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  };
}
