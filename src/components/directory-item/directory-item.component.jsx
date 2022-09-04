import { useNavigate } from 'react-router-dom'

import {BackgroundImage, Body, DirectoryItemContainer} from './directory-item.styles';

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNvigateHandler = () => {
    navigate(route);
  }

  return (
    <DirectoryItemContainer onClick={onNvigateHandler}>
      <BackgroundImage
        imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
