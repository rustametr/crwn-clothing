import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { UserContext } from '../../contexts/users.contexts';
import { CartDropdownContext } from '../../contexts/cart-dropdown.contexts';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { singOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { statusDropdown } = useContext(CartDropdownContext);

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {currentUser ? (
            <span className='nav-link' onClick={singOutUser}>SING OUT</span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {statusDropdown ? (
          <CartDropdown />
        ) : (
          ''
        )}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
