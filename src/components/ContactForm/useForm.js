import { useReducer, useState, useEffect } from 'react';
import AuthHelperMethods from '../../../utils/AuthHelperMethods';
const useForm = (callback) => {
    const [needOptions, SetneedOptions] = useState([
        "Request quotation",
        "Request order status",
        "Request copy of an invoice",
        "Other"
      ]);
      const Auth = new AuthHelperMethods();
  const [inputValues, setInputValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {},
  );
  useEffect(() => {
    console.log('useEffect hook called');
  });

  const handleSubmit = (event) => {
    console.log('Handle Submit Called');
    // Call SERVER USING FETCH METHOD and PASS STATE VALUES TO BACK END WITH POST METHOD..
    if (event) event.preventDefault();
    console.log(inputValues);
    Auth.contact(inputValues);
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
    needOptions,
  };
};

export default useForm;
