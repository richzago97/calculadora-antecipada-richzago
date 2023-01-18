import { StyledContainerCalculator } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculatorFormSchema } from "../../validators/schema";
import { IRequestForm } from "../../interfaces/calculator";
import { useContext } from "react";
import { CalculatorContext } from "../../providers/Calculator";

export const CalculatorForm = () => {
  const { handleSubmitCalculatorForm } = useContext(CalculatorContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRequestForm>({
    resolver: yupResolver(calculatorFormSchema),
  });

  return (
    <StyledContainerCalculator>
      <div className="title">
        <h2>Simule sua Antecipação</h2>
      </div>
      <form onSubmit={handleSubmit(handleSubmitCalculatorForm)}>
        <div className="sectionOne">
          <label htmlFor="amount">Informe o valor da venda *</label>
          <input
            type="number"
            placeholder="R$"
            id="amount"
            {...register("amount")}
          />
          <p>{errors.amount?.message}</p>
          <label htmlFor="installments">Em quantas parcelas *</label>
          <input
            type="number"
            id="installments"
            {...register("installments")}
          />
          <span>Máximo de 12 parcelas</span>
          <p>{errors.installments?.message}</p>
          <label htmlFor="mdr">Informe o percentual de MDR *</label>
          <input type="number" id="mdr" {...register("mdr")} />
          <p>{errors.mdr?.message}</p>
          <button className="btn">Calcular</button>
        </div>
      </form>
    </StyledContainerCalculator>
  );
};
