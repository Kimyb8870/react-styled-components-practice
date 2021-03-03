import React from "react";
import {
  Container,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  Link,
  BtnWrapper,
  BtnLink,
} from "./styles/Sidebar";

export default function Sidebar({ isOpen, children, ...restProps }) {
  return (
    <Container isOpen={isOpen} {...restProps}>
      {children}
    </Container>
  );
}

Sidebar.Icon = function SidebarIcon({ children, ...restProps }) {
  return <Icon {...restProps}>{children}</Icon>;
};

Sidebar.CloseIcon = function SidebarCloseIcon({ setIsOpen }) {
  return (
    <CloseIcon
      onClick={() => {
        setIsOpen((isOpen) => !isOpen);
      }}
    />
  );
};

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Menu = function SidebarMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Sidebar.Link = function SidebarLink({ to, children, ...restProps }) {
  return (
    <Link to={to} {...restProps}>
      {children}
    </Link>
  );
};

Sidebar.BtnWrapper = function SidebarBtnWrapper({ children, ...restProps }) {
  return <BtnWrapper {...restProps}>{children}</BtnWrapper>;
};

Sidebar.BtnLink = function SidebarBtnLink({ to, children, ...restProps }) {
  return (
    <BtnLink to={to} {...restProps}>
      {children}
    </BtnLink>
  );
};
