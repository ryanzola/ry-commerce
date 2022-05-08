import React from 'react';
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';


function Header() {
  const navigate = useNavigate()
  const [{ basket, user }, dispatch] = useStateValue()

  const signOut = () => {
    dispatch({
      type: 'REMOVE_USER'
    })
    navigate('/login')
  }

  return (
    <header className='header'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className='header__logo'>
          <StorefrontIcon className='header__logoImage' fontSize='large'/>
          <h2 className='header__logoTitle'>eShop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input className='header__searchInput' type="text"/>
        <SearchIcon className='header__searchIcon'/>
      </div>

      <nav className="header__nav">
        {
          user ?
            <button className='nav__signOutButton' onClick={signOut}>
              <div className="nav__item">
                <span className="nav__itemline1">Hello { user.displayName ? user.displayName : 'User'}</span>
                <span className="nav__itemline2">Sign Out</span>
              </div>
            </button>
          :
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <div className="nav__item">
              <span className="nav__itemline1">Hello Guest</span>
              <span className="nav__itemline2">Sign In</span>
            </div>
          </Link>
        }

        <div className="nav__item">
          <span className="nav__itemline1">Your</span>
          <span className="nav__itemline2">Shop</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="nav__itemBasket">
              <ShoppingBasketIcon/>
              <span className="nav__itemLineTwo nav__basketCount">{ basket.length }</span>
          </div>
        </Link>
      </nav>
  </header>
  )
}

export default Header