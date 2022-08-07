import { useContext } from 'react';

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;

    const { changeItemQuantity, deleteCartItem } = useContext(CartDropdownContext);

    return(
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => {changeItemQuantity(false, cartItem)}}>
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => {changeItemQuantity(true, cartItem)}}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => {deleteCartItem(cartItem)}}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;