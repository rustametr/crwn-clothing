import { createContext, useState } from "react";
import SHOP_DATA from '../shop-data.json';

export const ProductsContext = createContext({
    projucts: []
})

export const ProductsProvider = ({ children }) => {
    const [projucts, setProducts] = useState(SHOP_DATA);
    const value = {projucts, setProducts}
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}