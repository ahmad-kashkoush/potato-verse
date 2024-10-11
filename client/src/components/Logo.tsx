import Image from "next/image";
import styled from "styled-components";

function Logo() {
  return (
    <StyledLogo>
      <p className="relative image-wrapper">
        <Image src="/logo-icon.png" alt="logo icon" fill />
      </p>
      <p className="uppercase">Verse</p>
    </StyledLogo>
  );
}

export default Logo;

/*---------------styled---------------- */

const StyledLogo = styled.div`
  // Positioning
  position: relative;
  display: flex;
  align-items: center;
  // Font style, size and weight
  font-size: 29px;
  color: #2d0b07;
  font-family: Hello-Headline;
  font-weight: 100 !important;
  // others
  z-index: 10;
  & .image-wrapper {
    --size: 60px;
    width: var(--size);
    height: var(--size);
  }
  @media (min-width: 600px) {
    & {
      font-size: 40px;
    }
  }
`;
