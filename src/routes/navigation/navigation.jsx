import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.scss'

const Navigation = () => {
    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo_container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav_links_container'>
                    <Link className='nav_link' to='/shop'>
                        Shop
                    </Link>
                    <Link className='nav_link' to='/signIn'>
                        Sign In
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;