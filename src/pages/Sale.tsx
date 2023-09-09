import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { IVenda } from "../Context/DataContext";
import Loading from "../components/Loading";

type SaleWithoutDate = Omit<IVenda, "data">;

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<SaleWithoutDate>(
    `https://data.origamid.dev/vendas/${id}`
  );

  if (loading === true) return <Loading />;
  if (data === null) return null;

  return (
    <div>
      <div className="box mb">Id: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{" "}
        {data.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Pagamento: {data.pagamento}</div>
    </div>
  );
};

export default Sale;
