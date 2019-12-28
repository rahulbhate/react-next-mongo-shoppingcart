import React from 'react';
import Input from '../Input/Input';
import TextArea from '../TextArea/TextArea';
import Select from '../Select/Select';
import Label from '../Label/Label';
import Button from '../Button/Button';
import useForm from './useForm';
const ContactForm = () => {
    const { inputValues, handleChange, handleSubmit, needOptions} = useForm(login);
    function login() {
      console.log(inputValues);
    }
return(
     <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="h3 mb-3 text-black">Get In Touch</h2>
          </div>
          <div className="col-md-7">

            <form onSubmit={handleSubmit} role="form">
              
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <Label htmlFor="form_name" label="First Name" required/>
                    <Input type={"text"} className="form-control" id={"form_name"} name={"name"} placeholder={'Name'} 
                    onChange={handleChange}  value={inputValues.name || ''}/>
                  </div>
                  <div className="col-md-6">
                    <Label htmlFor="form_lastname" label="Last Name" required/>
                    <Input type={"text"} className="form-control" id={"form_lastname"} name={"surname"}
                    placeholder={'Surname'} 
                    onChange={handleChange}  value={inputValues.surname || ''} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <Label htmlFor="form_email" label="Email" className="text-black" required/>
                    <Input type={"email"} className="form-control" id={"form_email"} name={"email"} 
                    placeholder={'Email'} 
                    onChange={handleChange}  value={inputValues.email || ''} />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_need" label="Please specify your need *" className="text-black"/>
                    {/* <Select  title={'need'}
                            className="form-control" 
                            id={"form_need"}
                            name={"need"}
                            options={needOptions}
                            value={inputValues.need}
                            placeholder={"Select Your Need"}
                            onChange={handleChange}/> */}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                  <Label htmlFor="form_message" label="Message" className="text-black"/>
                    <TextArea name={"message"} id={"form_message"} cols={30} rows={7} className="form-control" value={inputValues.message || ''} onChange={handleChange}></TextArea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                  <Button title={'Submit'} />
                  </div>
                </div>
              </div>
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
export default ContactForm;