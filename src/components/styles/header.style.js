import styled from "styled-components";

export const Head = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
`;

export const Nav = styled.nav``;

export const NavUl = styled.ul`
  display: flex;
  justify-content: flex-start;
`;

export const NavLi = styled.li`
  list-style-type: none;
  padding: 0 22px;
  & a {
    font-family: "Baloo2";
    font-size: 16px;
    color: #909090;
    text-decoration: none;
    transition-duration: 0.3s;
    &:hover {
      color: #000;
    }
  }
`;

export const SecendPart = styled.div`
  display: flex;
  align-items: center;
`;

export const UserTool = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
  margni-right: 30px;
`;

export const Logo = styled.div``;

export const Button = styled.button`
  margin-left: 15px;
  padding: 10px 20px;
  background-color: red;
  font-family: "Baloo2";
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const ImgButton = styled.button`
  margin: 3px 5px 0;
  font-size: 19px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
