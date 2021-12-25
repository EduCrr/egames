import styled from "styled-components";

export const HeaderArea = styled.header`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  max-width: 1200px;
  margin: auto;

  nav {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      font-size: 30px;
    }
    .menu,
    ul {
      display: flex;
      a {
        transition: all ease 0.4s;
        &:hover {
          transition: all ease 0.4s;
          color: #55c57a;
        }
      }
    }
  }
`;
