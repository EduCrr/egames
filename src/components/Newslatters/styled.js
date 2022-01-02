import styled from "styled-components";

export const NewsArea = styled.section`
  height: 100vh;
  width: 100%;
  background-image: linear-gradient(to top, #1c1c1c 1%, transparent 50%),
    url("/assets/tlou2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  clip-path: polygon(0 40%, 100% 0, 100% 100%, 0 100%);
  .area {
    height: inherit;
    width: 1200px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex-direction: column;
    margin: auto;
    h1 {
      font-size: 40px;
    }
    .subArea {
      max-width: 470px;
    }
    form {
      margin: 20px 0px;
    }
  }
`;
