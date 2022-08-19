import { useContext, Fragment } from 'react';

import { CategoriesContext } from '../../contexts/categories.contexts';

import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);

    return (
        <Fragment>
            {   
                Object.keys(categoriesMap).map((title) => {
                    return (
                        <CategoryPreview key={title} title={title} products={categoriesMap[title]} />
                    )
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview;