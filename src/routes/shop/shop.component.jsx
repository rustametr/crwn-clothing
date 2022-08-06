import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.contexts';

import ProductCard from '../../components/product-card/product-card.component'
import './shop.styles.scss'

const Shop = () => {
    const {projucts} = useContext(ProductsContext);

    return (
        <div className='products-container'>
            {projucts.map((product) => {
                return (
                    <ProductCard key={product.id} product={product} />
                )
            })}
        </div>
    )
}

export default Shop;