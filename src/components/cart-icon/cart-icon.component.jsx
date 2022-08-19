import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import { useContext } from 'react'

import { ShoppingSvg, CartIconContainer, ItemCount } from './cart-icon.styles'

const CartIcon = () => {
    const { statusDropdown, setStatusDropdown, cartItemsAmount } = useContext(CartDropdownContext);

    const cartIconClickHandler = () => {
        setStatusDropdown(!statusDropdown);
    }
    
    return (
        <CartIconContainer onClick={cartIconClickHandler}>
            <ShoppingSvg />
            <ItemCount>{cartItemsAmount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;