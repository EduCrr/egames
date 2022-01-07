import styled from "styled-components";

export const CarouselArea = styled.section`
  .area {
    background-color: #222;
    padding: 20px;
    transform: scale(0.9);
    border-radius: 5px 20px 20px 20px;
    transition: all ease 0.4s;

    &:hover {
      transform: scale(1);
    }
    .photo {
      img {
        height: 350px;
        width: 100%;
        object-fit: cover;
        border-radius: 5px 20px 20px 20px;
        margin-bottom: 10px;
        cursor: pointer;
      }
    }
    .desc {
      text-align: center;
      flex: 1;
      display: inline;
      h1 {
        margin-bottom: 10px;
      }
      .info {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .slick-prev:before {
    content: url("/assets/left.png");
  }

  .slick-next:before {
    content: url("/assets/right.png");
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
    .search {
      flex-direction: column;
    }
    .rightSide {
      margin-top: 20px;
    }
  }
`;
