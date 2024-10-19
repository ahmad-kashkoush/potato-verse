import Logo from "@/components/Logo";
import styled from "styled-components";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function Navbar() {
  return (
    <StyledNavbar className="container">
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
`;
