import { Link } from "react-router-dom";
import {
  Head,
  Logo,
  SecendPart,
  Nav,
  NavUl,
  NavLi,
  UserTool,
  Button,
  ImgButton,
} from "./styles/header.style";
import LogoImage from "../assets/images/logo.png";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";

const Header = () => {
  return (
    <>
      <Head>
        <Logo>
          <img src={LogoImage} alt="/" />
        </Logo>
        <SecendPart>
          <Nav>
            <NavUl>
              <NavLi>
                <Link to="/">Home</Link>
              </NavLi>
              <NavLi>
                <Link to="/pages">Pages</Link>
              </NavLi>
              <NavLi>
                <Link to="/projects">Projects</Link>
              </NavLi>
              <NavLi>
                <Link to="/blog">Blog</Link>
              </NavLi>
              <NavLi>
                <Link to="/shop">Shop</Link>
              </NavLi>
              <NavLi>
                <Link to="/contact">Contact</Link>
              </NavLi>
            </NavUl>
          </Nav>
          <UserTool>
            <ImgButton>
              <RiShoppingCartLine />
            </ImgButton>
            <ImgButton>
              <BiSearch />
            </ImgButton>
            <Button>GET A QUOTE</Button>
          </UserTool>
        </SecendPart>
      </Head>
    </>
  );
};

export default Header;
