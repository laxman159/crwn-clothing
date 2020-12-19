import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I04IXCdW3Pn6qdhZpuLpNHwghA9Cl4QnWOjCv5Xn5ByZQvtWHrnLjVg0bQljAu9XDmj7xjuScMmcHKOELtcXMiD00rzrTY5B4'

  const onToken =token => {
     console.log(token);
     alert('Successful');
 }

    return (
        <StripeCheckout
        currency = "INR"
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description={ `Your toatal is ${price} INR`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}

        />
    );
};

export default StripeCheckoutButton;