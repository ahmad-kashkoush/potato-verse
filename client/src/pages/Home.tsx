import Navbar from "@/components/Navbar";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundImageContainer>
      </BackgroundImageContainer>
    </div>
  );
}
/*---------------------style-----------*/
/** TODO:
 * * [x] add overlay to the image
 */
const BackgroundImageContainer = styled.div`
    background-color: #bea67d;
    opacity: 0.4;
    width: 100vw;
    height: 100vh;
  
  
`;
