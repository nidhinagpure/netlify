import './Navbar.css';
import logo from './../../assets/logo.png';
import search from './../../assets/search_icon.svg';
import bellicon from './../../assets/bell_icon.svg';
import profile from './../../assets/profile_img.png';
import caret from './../../assets/caret_icon.svg';
import { useState } from 'react';

const Navbar = () => {
  const [signout, setSignout] = useState(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-right'>
          <img src={logo} />
          <ul className='navbar-menu'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>News & Popular</li>
            <li>My list</li>
            <li>Browse by Lanuguages</li>
          </ul>
        </div>

        <div className='navbar-left'>
          <img src={search} className='icon' />
          <p>Children</p>
          <img src={bellicon} className='icon' />

          <div className='navbar-profile'>
            <img src={profile} alt='' className='profile' />
            <img src={caret} alt='' className='icon'/>
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar