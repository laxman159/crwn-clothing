import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector}from 'reselect';
import StripeCheckoutButton from '../../components/strip-button/stripe-button.components';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (

        <div className='checkout-page'>
            <div className ='checkout-header'>
                <div className ='header-blocks'>
                    <span>Product</span>
                </div>
                <div className ='header-blocks'>
                    <span>Description</span>
                </div>
                <div className ='header-blocks'>
                    <span>Quantity</span>
                </div>
                <div className ='header-blocks'>
                    <span>Price</span>
                </div>
                <div className ='header-blocks'>
                    <span>Remove</span>
                </div>
            </div>
            {
             cartItems.map(cartItem =>
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            }
            <div className='total'>
                <span> Total: ${total}</span>
            </div>
            <div className = 'test-warning'>
                *Please use the following test credit cart for payments* 
                <br />
                4242 4242 42424 4242 - Exp 08/20 - cvv: 123
            </div>
            <StripeCheckoutButton price={total} />
        </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);