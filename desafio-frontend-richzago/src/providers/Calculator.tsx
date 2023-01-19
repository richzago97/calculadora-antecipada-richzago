import React, { ReactNode, createContext, useState } from "react";
import { IDays, IRequestForm } from "../interfaces/calculator";
import api from "../services/api";

interface ICalculatorProviderProps {
  children: ReactNode;
}

interface ICalculatorProviderData {
  handleSubmitCalculatorForm: (data: IRequestForm) => void;
  setDay: React.Dispatch<React.SetStateAction<IDays>>;
  day: IDays;
}

export const CalculatorContext = createContext<ICalculatorProviderData>(
  {} as ICalculatorProviderData
);

export const CalculatorProvider = ({ children }: ICalculatorProviderProps) => {
  const [day, setDay] = useState({
    "1": 0,
    "15": 0,
    "30": 0,
    "90": 0,
  });
  const handleSubmitCalculatorForm = (data: IRequestForm) => {
    api
      .post("/", {
        amount: data.amount,
        installments: data.installments,
        mdr: data.mdr,
      })
      .then((res) => setDay(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <CalculatorContext.Provider
      value={{
        handleSubmitCalculatorForm,
        day,
        setDay,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};
