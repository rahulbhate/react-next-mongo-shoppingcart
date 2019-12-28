import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Label from '../Label/Label';
import useForm from './useForm';

const SignUpForm = () => {
  const { inputValues, handleChange, handleSubmit } = useForm(login);

  function login() {
    console.log(inputValues);
  }

  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Sign Up</h2>
               
                    <div className="alert alert-danger">
                       
                        <p>Register</p>
                      
                    </div>
               
          </div>
          <div className="col-md-7">

            <form onSubmit={handleSubmit}>
              
              <div className="p-3 p-lg-5 border">
                 <div className="form-group row">
                  <div className="col-md-12">
                    <Label htmlFor="form_email" label="Email" required/>
                    <Input
        type={'email'}
        title={'Email'}
        id={'email'}
        name={'email'}
        value={inputValues.email || ''}
        placeholder={'Enter your email'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_password" label="Password" required/>
                    <Input
        type={'password'}
        title={'Password'}
        id={'password'}
        name={'password'}
        value={inputValues.password || ''}
        placeholder={'Enter your password'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                       <Button title={'Sign Up'} />
                  </div>
                </div>
              </div>
               <p>Already Registered? <a href="/login">Login!</a></p>
            </form>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">New York</span>
              <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">London</span>
              <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">Canada</span>
              <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;