import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === productToAdd.id){
            cartItems[i].quantuty++;
            return [...cartItems];
        }
    }
    productToAdd.quantuty = 1;
    return [...cartItems, productToAdd]
}

export const CartDropdownContext = createContext({
    statusDropdown: false,
    setStatusDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemsAmount: 0
})

export const CartDropdownProvider = ({ children }) => {

    const [statusDropdown, setStatusDropdown] = useState(false);
    const [cartItems, setcartItems] = useState([]);
    const [cartItemsAmount, setCartItemsAmount] = useState(0);

    useEffect(() => {
        const amount = cartItems.reduce((amount, cartItem) => {
            return amount + cartItem.quantuty;
        }, 0)
        setCartItemsAmount(amount);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setcartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {statusDropdown, setStatusDropdown, cartItems, addItemToCart, cartItemsAmount}

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}