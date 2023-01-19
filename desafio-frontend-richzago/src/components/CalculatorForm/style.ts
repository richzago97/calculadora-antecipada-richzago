import styled from "styled-components";

export const StyledContainerCalculator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .title {
    padding: 1rem;

    h2 {
      color: #383838;
    }
  }

  .sectionOne {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    > span {
      font-size: 0.5rem;
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input {
    min-width: 190px;
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
    border-color: #f9f7f7;
    background-color: #ffffff;
    color: #000000;
    border-style: solid;
    border-radius: 0px;
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.22);
  }
  input:focus {
    outline: none;
  }

  .btn {
    margin-top: 1rem;
    font-weight: 0;
    font-size: 14px;
    color: #fff;
    background-color: #0066cc;
    padding: 10px 30px;
    border: 2px solid #0066cc;
    box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
    border-radius: 50px;
    transition: 1000ms;
    transform: translateY(0);
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
  }

  .btn:hover {
    transition: 1000ms;
    padding: 10px 50px;
    transform: translateY(-0px);
    background-color: #fff;
    color: #0066cc;
    border: solid 2px #0066cc;
  }

  @media screen and (min-width: 1024px) {
    width: 30vw;
  }
`;
