import styled from "styled-components";

export const GameArea = styled.section`
  .cover {
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    .initialInfo {
      height: inherit;
      width: 1200px;
      display: flex;
      margin: auto;
      justify-content: center;
      align-items: flex-start;
      flex-direction: column;
      h1 {
        max-width: 600px;
        font-size: 40px;
      }
    }
    .vote {
      color: transparent;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: #fff;
      font-size: 120px;
      height: 0vh;
      width: 1200px;
      display: flex;
      margin: auto;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
  .description {
    display: flex;
    width: 1200px;
    margin: 4rem auto;
    align-items: stretch;
    justify-content: space-between;
    .photoSide {
      width: 350px;
      .photo {
        img {
          border-radius: 5px 20px 20px 20px;
          height: 350px;
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
      flex: 1;
      .items {
        margin-top: 20px;
        height: 100%;
      }
      img {
        margin-bottom: 10px;
        height: auto;
        width: 50px;
        border-radius: 5px 20px 20px 20px;
      }
      .slick-prev:before {
        content: url("/assets/up.png");
      }

      .slick-next:before {
        content: url("/assets/down.png");
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
  .desc {
    max-width: 1200px;
    margin: auto;
  }
  .gridParent {
    margin: 4rem auto;
    width: 1200px;
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
`;
