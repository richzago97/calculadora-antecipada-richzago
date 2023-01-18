import { useContext } from "react";
import { CalculatorContext } from "../../providers/Calculator";
import { CalculatorResponseContainer } from "./style";

export const CalculatorResponse = () => {
  const { day } = useContext(CalculatorContext);
  console.log(day);
  return (
    <CalculatorResponseContainer>
      <div className="sectionTwo">
        <h3>VOCÊ RECEBERÁ: </h3>
        <hr></hr>
        <p>Amanhã: R$ {day[1]}</p>
        <p>Em 15 dias: R$ {day[15]}</p>
        <p>Em 30 dias: R$ {day[30]}</p>
        <p>Em 90 dias: R$ {day[90]}</p>
      </div>
    </CalculatorResponseContainer>
  );
};
