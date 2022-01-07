import styled from "styled-components";

export const HomeArea = styled.div`
  max-width: 1200px;
  margin: 4rem auto;

  .search {
    margin: 4rem auto 2rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .leftSide {
      font-size: 40px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 1024px) {
    .search {
      justify-content: space-around !important;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }
    .search {
      flex-direction: column;
    }
    .rightSide {
      margin-top: 20px;
    }
  }
`;
