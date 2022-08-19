import { createContext, useState, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === productToAdd.id){
            cartItems[i].quantity++;
            return [...cartItems];
        }
    }
    productToAdd.quantity = 1;
    return [...cartItems, productToAdd];
}

const decrementItemQuantity = (cartItems, productToChange) => {
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === productToChange.id){
            if(cartItems[i].quantity > 1){
                cartItems[i].quantity--;
            }else{
                cartItems = cartItems.filter((cartItem) => {
                    return cartItem.id != productToChange.id;
                })
            }
            return [...cartItems];
        }
    }
}

const incrementItemQuantity = (cartItems, productToChange) => {
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].id === productToChange.id){
            cartItems[i].quantity++;
            return [...cartItems];
        }
    }
}

export const CartDropdownContext = createContext({
    statusDropdown: false,
    setStatusDropdown: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartItemsAmount: 0,
    changeItemQuantity: () => {},
    total: 0,
    deleteCartItem: () => {}
})

export const CartDropdownProvider = ({ children }) => {

    const [statusDropdown, setStatusDropdown] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsAmount, setCartItemsAmount] = useState(0);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const amount = cartItems.reduce((amount, cartItem) => {
            return amount + cartItem.quantity;
        }, 0)
        setCartItemsAmount(amount);

        const newTotal = cartItems.reduce((price, cartItem) => {
            return price + (cartItem.price * cartItem.quantity);
        }, 0)
        setTotal(newTotal);
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const changeItemQuantity = (increment, productToChange) => {
        if(increment){
            setCartItems(incrementItemQuantity(cartItems, productToChange))
        }else{
            setCartItems(decrementItemQuantity(cartItems, productToChange))
        }
    }

    const deleteCartItem = (productToDelete) => {

        const filteredCartItems = cartItems.filter((cartItem) => {
            return cartItem.id !== productToDelete.id;
        })

        setCartItems([...filteredCartItems])
    }

    const value = {statusDropdown, setStatusDropdown, cartItems, addItemToCart, cartItemsAmount, changeItemQuantity, total, deleteCartItem}

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}