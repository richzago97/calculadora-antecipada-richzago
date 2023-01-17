import * as yup from "yup";

export const calculatorFormSchema = yup.object().shape({
  amount: yup.number().required("Campo obrigatório"),
  installments: yup.number().required("Campo obrigatório"),
  mdr: yup.number().required("Campo obrigatório"),
});
