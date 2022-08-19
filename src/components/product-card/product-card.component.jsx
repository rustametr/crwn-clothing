import { useContext } from 'react';

import { ProductCartContainer, Footer, Name, Price } from './product-card.styles'

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts' 

const ProductCard = ({ product }) => {
    const { addItemToCart } = useContext(CartDropdownContext);

    const { name, price, imageUrl } = product;
    return (
        <ProductCartContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={() => {addItemToCart(product)}}>Add to card</Button>
        </ProductCartContainer>
    )
}

export default ProductCard;