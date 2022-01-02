import styled from "styled-components";

export const FeaturedArea = styled.section`
  height: 100vh;
  width: 100%;

  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  .info {
    padding-bottom: 20px;
    max-width: 1200px;
    margin: auto;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    .metacritic,
    .desc {
      margin: 10px 0px;
    }
    .name {
      text-shadow: 1px 1px 50px #1c1c1c;
      font-size: 40px;
      max-width: 450px;
      font-weight: bold;
    }
    .developers {
      font-size: 25px;
    }
    .metacritic {
      span {
        color: #55c57a;
      }
    }
    .desc {
      max-width: 450px;
      line-height: 30px;
    }
    a {
      margin: 20px 0px !important;
    }
  }
`;
