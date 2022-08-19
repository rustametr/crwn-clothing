import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, CheckoutBlock, Total } from './checkout.styles';

const Checkout = () => {
    const { cartItems, total } = useContext(CartDropdownContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <CheckoutBlock>
                    <span>Product</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Description</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Quantity</span>
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Price</span> 
                </CheckoutBlock>
                <CheckoutBlock>
                    <span>Remove</span>
                </CheckoutBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                return (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                )
            })}
            <Total>Total: ${total}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;