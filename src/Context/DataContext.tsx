import { createContext, PropsWithChildren, useContext } from "react";
import { useFetch } from "../Hooks/useFetch";

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
}

interface IVenda {
  id: string;
  nome: string;
  preco: string;
  status: "pago" | "processando" | "falha";
  pagamento: "boleto" | "cartao" | "pix";
  data: string;
  parcelas: number | null;
}

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("UseData ERROR");
  return context;
};

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const { data, loading, error } = useFetch<IVenda[]>(
    "https://data.origamid.dev/vendas/"
  );

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
