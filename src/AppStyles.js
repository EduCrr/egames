import styled from "styled-components";

export const AppStylesCarousel = styled.div`
  .slick-prev:before {
    font-size: 10px;
    content: url("/assets/left.png");
  }

  .slick-next:before {
    content: url("/assets/right.png");
  }
  .photo {
    margin: 30px 0px;
    width: 20%;
    height: 350px;
    position: relative;
    cursor: pointer;
    transform: scale(0.9);
    transition: all ease 0.4s;
    &:hover {
      transform: scale(1);
    }

    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
      border-radius: 5px 20px 20px 20px;
    }
    .text {
      transform: scale(0.9);
      background: rgb(85, 197, 122);
      background: linear-gradient(
        90deg,
        rgba(85, 197, 122, 1) 60%,
        rgba(126, 213, 111, 1) 100%
      );
      opacity: 0.9;
      position: absolute;
      width: 100%;
      top: 85%;
      left: 50%;
      padding: 0px 20px;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .title {
        font-size: 20px;
        font-weight: bold;
      }
      .details {
        display: flex;
        justify-content: space-between;
        width: inherit;
        margin: 5px 0px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .slick-arrow {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
    h1 {
      text-align: center;
    }
  }
`;

export const AppStylesCarouselResponsive = styled.div`
  @media screen and (max-width: 1024px) {
    .photo {
      width: 25% !important;
    }
  }
  @media screen and (max-width: 950px) {
    .photo {
      width: 33% !important;
    }
  }
  @media screen and (max-width: 768px) {
    .photo {
      width: 50% !important;
    }
  }
  @media screen and (max-width: 465px) {
    .photo {
      width: 100% !important;
    }
  }
`;
