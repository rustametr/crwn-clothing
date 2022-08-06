import { ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import { useContext } from 'react'

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { statusDropdown, setStatusDropdown } = useContext(CartDropdownContext);

    const cartIconClickHandler = () => {
        setStatusDropdown(!statusDropdown);
    }
    
    return (
        <div className='cart-icon-container' onClick={cartIconClickHandler}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
}

export default CartIcon;