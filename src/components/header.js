import {Link} from "react-router-dom";
import Logo from '../assets/images/logo.png'
import {BsBookmark} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {RiSearch2Line} from 'react-icons/ri'

const Header = () =>{
  return <>
    <header>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="nav-b-ic-section">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="booking-conv">
          <BsBookmark className="booking-icon" />
          BOOK A CONSULTATION
        </button>
        <span className="store-icon">
          <span className="item-number">2</span>
          <AiOutlineShoppingCart className="shop-icon" />
        </span>
        <button className="search"><RiSearch2Line/></button>
      </div>
    </header>
  </>
}

export default Header
