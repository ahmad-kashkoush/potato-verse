"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BackgroundImageContainer>
        <Image
          src="/bg-home.png"
          alt="background image"
          fill
          className="object-contain object-center bg-[#e7d0a8] -z-[2]"
        />
      </BackgroundImageContainer>
    </div>
  );
}
/*---------------------style-----------*/
/** TODO:
 * * [x] add overlay to the image
 */
const BackgroundImageContainer = styled.div`
  &::before {
    content: "";
    background-color: #bea67d;
    opacity: 0.4;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
