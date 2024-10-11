import Logo from "@/components/Logo";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Navbar() {
  return (
    <StyledNavbar>
      <Logo />
      <HiOutlineShoppingCart />
    </StyledNavbar>
  );
}
export default Navbar;

// ------------------Style-----------
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  & svg {
    width: 40px;
    height: 40px;
    color: #2d0b07;
    stroke-width: 2;
  }

  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 750px) {
    & {
      max-width: 700px;
    }
    & svg {
      width: 70px;
      height: 70px;
    }
  }
  @media (min-width: 992px) {
    & {
      max-width: 950px;
    }
  }
  @media (min-width: 1080px) {
    & {
      max-width: 1050px;
    }
  }
`;
