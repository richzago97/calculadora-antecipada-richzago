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
    background: #daf1f7;
    width: 100vw;

    > h3,
    p {
      color: blue;
      font-weight: bolder;
    }

    > hr {
      border-top: 1px solid blue;
      width: 100%;
    }
  }
`;
