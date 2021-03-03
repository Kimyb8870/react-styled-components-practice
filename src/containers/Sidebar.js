import { Sidebar } from "../components";

export function SidebarContainer({ isOpen, setIsOpen }) {
  return (
    <Sidebar isOpen={isOpen}>
      <Sidebar.Icon>
        <Sidebar.CloseIcon setIsOpen={setIsOpen} />
      </Sidebar.Icon>
      <Sidebar.Wrapper>
        <Sidebar.Menu>
          <Sidebar.Link to="about">About</Sidebar.Link>
          <Sidebar.Link to="discover">Discover</Sidebar.Link>
          <Sidebar.Link to="Services">Services</Sidebar.Link>
          <Sidebar.Link to="signup">Sign Up</Sidebar.Link>
        </Sidebar.Menu>
        <Sidebar.BtnWrapper>
          <Sidebar.BtnLink to="/signin">Sign In</Sidebar.BtnLink>
        </Sidebar.BtnWrapper>
      </Sidebar.Wrapper>
    </Sidebar>
  );
}
