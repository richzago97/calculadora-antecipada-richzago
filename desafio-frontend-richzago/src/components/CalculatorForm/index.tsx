import { StyledContainerCalculator } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { calculatorFormSchema } from "../../validators/schema";
import { IRequestForm } from "../../interfaces/requestForm";
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
      <form onSubmit={handleSubmit(handleSubmitCalculatorForm)}>
        <div className="sectionOne">
          <label htmlFor="amount">Informe o valor da venda *</label> antigo p
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
            placeholder="R$"
            id="installments"
            {...register("installments")}
          />
          <span>Máximo de 12 parcelas</span>
          <p>{errors.installments?.message}</p>
          <label htmlFor="mdr">Informe o percentual de MDR *</label>
          <input type="number" placeholder="R$" id="mdr" {...register("mdr")} />
          <p>{errors.mdr?.message}</p>
          <button>Calcular</button>
        </div>
      </form>
    </StyledContainerCalculator>
  );
};
