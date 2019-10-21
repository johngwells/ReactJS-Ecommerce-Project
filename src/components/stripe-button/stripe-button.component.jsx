import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // stripe wants dollars into cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_3qPooZElqsgrXql7HJCyWWei00eUKhrhEe';


  // doing it this way for now. Used to charge payments on backend. 
  // Once backend is set. configure this.
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout 
      label='Pay Now'
      name='Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
