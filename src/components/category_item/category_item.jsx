import './category_item.scss'

const CategoryItem = ({category}) => {
    const {imageUrl, title} = category;
    return(
        <div className='category_container'>
            <div className='background_image' style={{
            backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className='category_body_container'>
            <h2>{title}</h2>
            <p>Shop now</p>
            </div>
        </div>
    
    )
}

export default CategoryItem;