import { Navbar } from "../components";
import { FaBars } from "react-icons/fa";

export function NavbarContainer() {
  return (
    <Navbar>
      <Navbar.Container>
        <Navbar.Logo to="/">dolla</Navbar.Logo>
        <Navbar.MobileIcon>
          <FaBars />
        </Navbar.MobileIcon>
        <Navbar.Menu>
          <Navbar.Item>
            <Navbar.Link to="about">About</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link to="discover">Discover</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link to="services">Services</Navbar.Link>
          </Navbar.Item>
          <Navbar.Item>
            <Navbar.Link tp="signup">Sign Up</Navbar.Link>
          </Navbar.Item>
        </Navbar.Menu>
        <Navbar.BtnWrapper>
          <Navbar.BtnLink>Sign In</Navbar.BtnLink>
        </Navbar.BtnWrapper>
      </Navbar.Container>
    </Navbar>
  );
}
