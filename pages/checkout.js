import React from 'react';
import CheckoutForm from '../src/components/CheckoutForm/CheckoutForm';
import withAuthInitial from '../utils/withAuthInitial';
function Checkout ()  {
    return (
      <div>
      <CheckoutForm />
      </div>
    );
}
export default withAuthInitial(Checkout);
