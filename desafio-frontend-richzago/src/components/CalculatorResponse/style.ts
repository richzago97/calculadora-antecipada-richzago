import styled from "styled-components";

export const StyledContainerCalculatorResponse = styled.div`
  display: flex;
  flex-direction: column;

  .sectionTwo {
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #d3d3d3;

    margin: 1rem 0;
    padding: 1rem;
    gap: 5px;

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
