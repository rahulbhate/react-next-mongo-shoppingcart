import { useReducer, useState, useEffect } from 'react';
import axios from 'axios';
import AuthHelperMethods from '../../../utils/AuthHelperMethods';
const useForm = (callback) => {
  useEffect(() => {
    console.log("Checkoutform useEffect Hook Called");
    const data = localStorage.getItem("MyCart");
    console.log(data);
   
  })
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
    console.log(inputValues, localStorage.getItem('localStorageCart'));
    //Auth.checkout(inputValues);
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
