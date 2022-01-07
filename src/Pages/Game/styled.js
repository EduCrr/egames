import styled from "styled-components";

export const GameArea = styled.section`
  .cover {
    height: 100vh;
    width: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    .initialInfo {
      height: inherit;
      max-width: 1200px;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      h1 {
        text-shadow: 1px 1px 50px #1c1c1c;
        font-size: 40px;
        max-width: 450px;
        font-weight: bold;
      }
    }
    .vote {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      font-size: 120px;
      height: 0vh;
      width: 100%;
      display: flex;
      margin: auto;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 70px;
    }
  }
  .description {
    display: flex;
    max-width: 1200px;
    margin: 4rem auto;
    align-items: stretch;
    justify-content: space-between;
    .photoSide {
      width: 350px;
      .photo {
        img {
          border-radius: 5px 20px 20px 20px;
          height: 230px;
          width: 300px;
          margin-bottom: 20px;
          object-fit: cover;
        }
      }
    }
    .descSide {
      flex: 1;
      padding-right: 10px;

      h3 {
        color: #555;
      }
    }
    .achievements {
      width: 450px;
      .slick-slide {
        height: 230px !important;
        margin: auto !important;
        display: flex !important;
        justify-content: center !important;
        align-content: center !important;
        align-items: center !important;
      }
      .achievementsItems {
        border-radius: 5px 20px 20px 20px;
        margin: 20px auto;
        background-color: #222;
        .items {
          padding: 20px;
          text-align: center;
          img {
            margin: auto;
            margin-bottom: 10px;
            width: 100px;
            border-radius: 5px 20px 20px 20px;
          }
          .slick-prev:before {
            content: url("/assets/left.png");
          }

          .slick-next:before {
            content: url("/assets/right.png");
          }
          .slick-prev {
            margin: auto 0px;
          }
          .slick-next {
            margin: auto 0px;
            margin-left: 70px;
          }
        }
      }
    }
  }
  .desc {
    max-width: 1200px;
    margin: 4rem auto;
  }
  .gridParent {
    margin: 4rem auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(10, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 15px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px 20px 20px 20px;
    }
  }

  .div1 {
    grid-area: 1 / 1 / 5 / 4;
  }
  .div2 {
    grid-area: 1 / 4 / 5 / 7;
  }
  .div3 {
    grid-area: 5 / 1 / 11 / 7;
  }
  .div4 {
    grid-area: 1 / 7 / 7 / 13;
  }
  .div5 {
    grid-area: 7 / 7 / 11 / 10;
  }
  .div6 {
    grid-area: 7 / 10 / 11 / 13;
  }

  .sameGames {
    max-width: 1200px;
    margin: 4rem auto;
    h2 {
      text-align: center;
    }
  }
  .items {
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1024px) {
    .initialInfo {
      padding: 0px 20px;
    }
    .desc {
      padding: 0px 20px;
    }
    .description {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    .achievements {
      margin-top: 20px;
    }
    .gridParent {
      padding: 0px 20px;
      display: flex;
      flex-direction: column;
    }
  }
  @media screen and (max-width: 550px) {
    h1 {
      font-size: 35px;
    }
  }
`;
