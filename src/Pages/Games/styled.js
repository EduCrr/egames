import styled from "styled-components";

export const GamesArea = styled.section`
  .search {
    max-width: 1200px;
    margin: 5rem auto;
    display: flex;
    justify-content: space-between;

    input,
    select {
      margin-top: 20px;
      margin-right: 20px;
    }
  }
  .reset {
    margin-top: 20px !important;
    display: flex;
  }
  .GamesList {
    max-width: 1200px;
    margin: 4rem auto;
  }
  span {
    position: fixed;
    left: 0px;
    top: 50%;
    padding: 8px 12px;
    z-index: 99;
    cursor: pointer;
  }
  .modal {
    z-index: ${(props) => (props.open ? "98" : "-1")};
    transition: all ease 0.6s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    height: 100vh;
    width: 35%;
    background-color: #1f1f1f;
    form {
      display: flex;
      flex-direction: column;
    }
    .genres {
      margin-bottom: 30px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      h1 {
        margin-bottom: 10px;
        text-align: center;
      }
    }
    .year {
      .slider {
        -webkit-appearance: none;
        background: #222;
        border-radius: 20px 5px 20px 20px;
        color: white;
        padding: 10px 20px;
        border: none;
        margin-top: 20px;
        outline: none;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
        font-family: "Kanit", sans-serif;
      }

      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: rgb(85, 197, 122);
        cursor: pointer;
      }

      .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: rgb(85, 197, 122);
        cursor: pointer;
      }
    }
  }
`;
