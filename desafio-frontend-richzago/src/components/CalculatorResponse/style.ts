import styled from "styled-components";

export const CalculatorResponseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .sectionTwo {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background: #f7fafb;
    width: 100vw;

    > h3,
    p {
      color: #219ebc;
      font-weight: bolder;
    }

    > hr {
      border-top: 1px solid #219ebc;
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    background: #f7fafb;
    .sectionTwo {
      background: none;
      height: 50vh;
      width: 20vw;
    }
  }
`;
