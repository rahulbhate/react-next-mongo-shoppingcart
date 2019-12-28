import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';
import AuthHelperMethods from '../../../utils/AuthHelperMethods';
const useForm = (callback) => {
  
  const [token, setToken] = useState();
  const Auth = new AuthHelperMethods();
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  const handleSubmit = (event) => {
    console.log('Handle Submit Called');
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    //Auth.login(inputValues);
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
        // console.log(res);
        localStorage.setItem('Token', res.token);
        sessionStorage.setItem('Token', res.token);
        Router.push('/page');
      })
      .catch((err) => console.log('Error, with message:', err.statusText));
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    const { name, value } = event.target;
    setInputValues({ [name]: value });
  };

  return {
    handleChange,
    handleSubmit,
    inputValues,
  };
};

export default useForm;
