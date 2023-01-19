export interface IRequestForm extends IDays {
  amount: number;
  installments: number;
  mdr: number;
  days?: number[];
}

export interface IDays {
  '1': number;
  '15': number;
  '30': number;
  '90': number;
}
