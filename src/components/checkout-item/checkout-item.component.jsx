import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import {CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Arrow, Value, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { changeItemQuantity, deleteCartItem } = useContext(CartDropdownContext);

    return(
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={() => {changeItemQuantity(false, cartItem)}}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => {changeItemQuantity(true, cartItem)}}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={() => {deleteCartItem(cartItem)}}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;