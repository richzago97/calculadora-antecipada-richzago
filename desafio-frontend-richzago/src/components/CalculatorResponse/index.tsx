import { useContext } from "react";
import { CalculatorContext } from "../../providers/Calculator";
import { CalculatorResponseContainer } from "./style";

export const CalculatorResponse = () => {
  const { days } = useContext(CalculatorContext);
  return (
    <CalculatorResponseContainer>
      <div className="sectionTwo">
        <h3>VOCÊ RECEBERÁ: </h3>
        <hr></hr>
        <p>Amanhã: R$ {days['1']}</p>
        <p>Em 15 dias: R$ {days['15']}</p>
        <p>Em 30 dias: R$ {days['30']}</p>
        <p>Em 90 dias: R$ {days['90']}</p>
      </div>
    </CalculatorResponseContainer>
  );
};
