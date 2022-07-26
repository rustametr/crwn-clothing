import './directory.scss'
import CategoryItem from '../category_item/category_item'

const Directory = ({categories}) => {
    
    return(
        <div className='categories_container'>
            {categories.map((category) => {
                return <CategoryItem key={category.id} category={category} />
            })}
        </div>
    )
}

export default Directory;