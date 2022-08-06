import { createContext, useState } from 'react';

export const CartDropdownContext = createContext({
    'statusDropdown': false,
    'setStatusDropdown': () => null
})

export const CartDropdownProvider = ({ children }) => {

    const [statusDropdown, setStatusDropdown] = useState(false);

    const value = {statusDropdown, setStatusDropdown}

    return(
        <CartDropdownContext.Provider value={value}>
            {children}
        </CartDropdownContext.Provider>
    )
}