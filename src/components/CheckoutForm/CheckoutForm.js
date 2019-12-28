import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import Label from '../Label/Label';
import useForm from './useForm';

const CheckoutForm = () => {
  const { inputValues, handleChange, handleSubmit } = useForm(login);
  function login() {
    //console.log(inputValues);
  }

  return (
   <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Checkout</h2>
               
                    <div className="alert alert-danger">
                       
                        <p>Checkout</p>
                      
                    </div>
               
          </div>
          <div className="col-md-7">

            <form onSubmit={handleSubmit}>
              
              <div className="p-3 p-lg-5 border">
                 <div className="form-group row">
                  <div className="col-md-12">
                    <Label htmlFor="form_fName" label="FirstName" required />
                    <Input
        type={'text'}
        id={'firstName'}
        name={'firstName'}
        value={inputValues.firstName || ''}
        placeholder={'Enter your First Name'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_address" label="Address" required />
                    <Input
        type={'text'}
        id={'address'}
        name={'address'}
        value={inputValues.address || ''}
        placeholder={'Enter your address'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_cardName" label="Card Holder Name" required />
                    <Input
        type={'text'}
        id={'cardname'}
        name={'cardname'}
        value={inputValues.cardname || ''}
        placeholder={'Enter your address'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_cardnumber" label="Credit Card Number" required />
                    <Input
        type={'text'}
        id={'cardnumber'}
        name={'cardnumber'}
        value={inputValues.cardnumber || ''}
        placeholder={'Enter your cardnumber'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_cardexpirymonth" label="Expiration Month" required />
                    <Input
        type={'text'}
        id={'cardexpirymonth'}
        name={'cardexpirymonth'}
        value={inputValues.cardexpirymonth || ''}
        placeholder={'Enter your card expiry month'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_cardexpiryyear" label="Expiration Year" required />
                    <Input
        type={'text'}
        id={'cardexpiryyear'}
        name={'cardexpiryyear'}
        value={inputValues.cardexpiryyear || ''}
        placeholder={'Enter your card expiry Year'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_ccv" label="CCV Number" required />
                    <Input
        type={'text'}
        id={'ccv'}
        name={'ccv'}
        value={inputValues.ccv || ''}
        placeholder={'Enter your ccv'}
        onChange={handleChange}
      />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                       <Button title={'Buy Now'} />
                  </div>
                </div>
              </div>
               <p>Don't have an account? <a href="/signup">Sign up instead!</a></p>
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

export default CheckoutForm;