import { useContext } from 'react';

import './cart-dropdown.styles.scss'

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts' 

const CartDropdown = () => {
    const { cartItems } = useContext(CartDropdownContext);

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem cartItem={item} key={item.id}/>)}
            </div>
            <Button> GO TO CHECKOUT </Button>
        </div>
    )
}

export default CartDropdown;