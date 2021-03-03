import React from "react";
import {
  Nav,
  Container,
  Logo,
  MobileIcon,
  Menu,
  Item,
  Link,
  BtnWrapper,
  BtnLink,
} from "./styles/Navbar";

export default function Navbar({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>;
}

Navbar.Container = function NavbarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function NavbarLogo({ to, children, ...restProps }) {
  return (
    <Logo to={to} {...restProps}>
      {children}
    </Logo>
  );
};

Navbar.MobileIcon = function NavbarMobileIcon({
  setIsOpen,
  children,
  ...restProps
}) {
  return (
    <MobileIcon onClick={() => setIsOpen((isOpen) => !isOpen)} {...restProps}>
      {children}
    </MobileIcon>
  );
};

Navbar.Menu = function NavbarMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Navbar.Link = function NavbarLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Navbar.BtnWrapper = function NavbarBtnWrapper({ children, ...restProps }) {
  return <BtnWrapper {...restProps}>{children}</BtnWrapper>;
};

Navbar.BtnLink = function NavbarBtnLink({ children, ...restProps }) {
  return <BtnLink {...restProps}>{children}</BtnLink>;
};
