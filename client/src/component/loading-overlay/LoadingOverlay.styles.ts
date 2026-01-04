import styled from "styled-components";

export const BlurOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 9999; /* above everything */

  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px); /* Safari support */

  background: rgba(0, 0, 0, 0.2); /* optional dim */
`;