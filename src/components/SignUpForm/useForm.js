import { useReducer } from 'react';
import axios from 'axios';
import AuthHelperMethods from '../../../utils/AuthHelperMethods';
const useForm = (callback) => {
  const Auth = new AuthHelperMethods();
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );

  const handleSubmit = (event) => {
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    Auth.signup(inputValues);
    callback();
  };

  const handleChange = (event) => {
    event.persist();
    console.log(event.target.value);
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