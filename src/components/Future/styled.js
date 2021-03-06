import styled from "styled-components";

export const FutureArea = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #222;
  clip-path: polygon(0 0, 100% 40%, 100% 80%, 0 100%);
  margin-bottom: -40vh;
  .area {
    max-width: 1200px;
    margin: auto !important;
    display: flex;
    align-items: center;
    height: inherit;

    .singleGame {
      display: flex;
      flex-direction: column;
      width: 100%;
      .info {
        display: flex;
        justify-content: flex-start;
        margin: 2rem 0px;
        align-items: center;
        .photo,
        .desc,
        .video {
          padding-right: 20px;
        }
        .photo {
          img {
            height: 300px;
            width: 200px;
            object-fit: cover;
            border-radius: 5px 20px 20px 20px;
          }
        }
        .desc {
          max-width: 350px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .info {
      justify-content: center !important;
    }
  }
  @media screen and (max-width: 768px) {
    height: 130vh;
    .info {
      flex-direction: column;
      text-align: center;
      margin: auto;
      .genres {
        justify-content: center;
      }
    }
  }
  @media screen and (max-width: 450px) {
    height: 160vh;
    h2 {
      font-size: 20px;
    }
  }
`;
