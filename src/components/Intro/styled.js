import styled from "styled-components";

export const IntroArea = styled.div`
  .intro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin-bottom: 4rem;
    .leftSide {
      width: 450px;
      padding-right: 30px;
    }
    .rightSide {
      flex: 1;

      .double {
        display: flex;
        margin-top: 15px;
        justify-content: center;
      }
      .photo2 {
        width: 100%;
        img {
          height: 250px;
          padding-right: 10px;
        }
      }
      .photo3 {
        width: 100%;
        img {
          height: 250px;
          padding-left: 10px;
        }
      }
      img {
        width: 100%;
        border-radius: 5px 20px 20px 20px;
        object-fit: cover;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .intro {
      padding: 0px 20px;
      flex-direction: column;
      .leftSide {
        padding-right: 0px;
        text-align: center;
        p {
          padding: 0px 40px;
        }
      }
      .rightSide {
        margin-top: 4rem;
      }
    }
  }
  @media screen and (max-width: 550px) {
    .double {
      margin-top: 0px !important;
      flex-direction: column;
      .photo2 {
        img {
          padding: 0px !important;
          height: 100% !important;
        }
      }
      .photo3 {
        img {
          padding: 0px !important;
          height: 100% !important;
        }
      }
    }
  }
`;
