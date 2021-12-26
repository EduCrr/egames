import styled from "styled-components";

export const FooterArea = styled.footer`
  max-width: 1200px;
  margin: 4rem auto;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .footerInfo {
    strong {
      color: white;
    }
    color: rgb(85, 197, 122);
  }
  @media (max-width: 768px) {
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
