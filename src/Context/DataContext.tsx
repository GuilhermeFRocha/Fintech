import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { useFetch } from "../Hooks/useFetch";

interface IDataContext {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  inicio: string;
  final: string;
  setInicio: Dispatch<SetStateAction<string>>;
  setFinal: Dispatch<SetStateAction<string>>;
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

function getDate() {}
getDate();

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState("");
  const [final, setFinal] = useState("");

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`
  );

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  );
};
