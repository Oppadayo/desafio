export interface IInvestiment {
  nome: string;
  objetivo: string;
  saldoTotal: number;
  indicadorCarencia: string;
  acoes: [
    {
      id: string;
      nome: string;
      percentual: number;
    },
  ];
}
