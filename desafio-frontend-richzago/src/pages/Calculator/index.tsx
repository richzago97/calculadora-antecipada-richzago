import { CalculatorForm } from "../../components/CalculatorForm";
import { CalculatorResponse } from "../../components/CalculatorResponse";
import { StyledContainerPageCalculator } from "./style";

export const CalculatorPage = () => {
  return (
    <StyledContainerPageCalculator>
      <CalculatorForm />
      <CalculatorResponse />
    </StyledContainerPageCalculator>
  );
};
