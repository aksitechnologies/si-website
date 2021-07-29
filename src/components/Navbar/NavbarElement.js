import { DiScala } from "react-icons/Di"
import { Link } from "gatsby"
import styled from "styled-components"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#313537"
      : "linear-gradient (to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 100% )"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    background: "#313537";
    transition: 0.8s all ease;
    position: sticky;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 90%;
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

export const NavIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    tansition: all 0.2s ease;
    background: #313537;
  }
`
export const NavItem = styled.li`
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  font-family: "Ubuntu", sans-serif;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #ff4040;
      transition: all 0.3s ease;
    }
  }
`
