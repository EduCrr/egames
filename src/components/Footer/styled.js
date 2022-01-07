import styled from "styled-components";

export const FooterArea = styled.footer`
  max-width: 1200px;
  margin: 2rem auto;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav {
    ul {
      display: flex;
      a {
        margin-right: 25px;
        transition: all ease 0.4s;
        &:hover {
          transition: all ease 0.4s;
          color: #55c57a;
        }
      }
    }
  }
  .footerInfo {
    strong {
      color: white;
    }
    color: rgb(85, 197, 122);
  }
  @media screen and (max-width: 1024px) {
    .content {
      padding: 0px 20px;
    }
  }
  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ul,
    li {
      flex-direction: column;
      margin: auto;
    }
    ul,
    a {
      text-align: center;
    }
    .footerInfo {
      margin-top: 20px;
    }
  }
`;
