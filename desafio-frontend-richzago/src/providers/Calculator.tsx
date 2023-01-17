import { ReactNode, createContext } from "react";
import { IRequestForm } from "../interfaces/requestForm";
import api from "../services/api";

interface ICalculatorProviderProps {
  children: ReactNode;
}

interface ICalculatorProviderData {
  handleSubmitCalculatorForm: (data: IRequestForm) => Promise<void>;
}

export const CalculatorContext = createContext<ICalculatorProviderData>(
  {} as ICalculatorProviderData
);

export const CalculatorProvider = ({ children }: ICalculatorProviderProps) => {
  const handleSubmitCalculatorForm = async (data: IRequestForm) => {
    const amount = +data.amount * 100;
    const dataCalculator = {
      amount: amount,
      installments: +data.installments,
      mdr: +data.mdr,
    };
    await api
      .post("/", dataCalculator)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <CalculatorContext.Provider value={{ handleSubmitCalculatorForm }}>
      {children}
    </CalculatorContext.Provider>
  );
};
