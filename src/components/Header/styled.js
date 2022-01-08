import styled from "styled-components";

export const HeaderArea = styled.header`
  position: fixed;
  z-index: 97;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.menu ? "70px" : "100px")};
  transition: all ease 0.4s;
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
      ul li {
        margin-left: 25px;
      }
      a {
        transition: all ease 0.4s;
        &:hover {
          transition: all ease 0.4s;
          color: #55c57a;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    nav {
      padding: 0px 20px;
    }
  }
`;
