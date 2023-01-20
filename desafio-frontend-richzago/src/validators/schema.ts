import * as yup from "yup";

export const calculatorFormSchema = yup.object().shape({
  amount: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Digite um número")
    .min(1000, "O valor mínimo é de R$ 1.000,00"),
  installments: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Digite um número")
    .max(12, "O máximo de parcelas é de 12x")
    .min(1, "O mínimo de parcelas é de 1x"),
  mdr: yup
    .number()
    .required("Campo obrigatório")
    .typeError("Digite um número")
    .max(99, "O MDR tem que menor que 100"),
});
