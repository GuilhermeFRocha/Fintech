import { IVenda } from "../Context/DataContext";

const SaleItem = ({ sale }: { sale: IVenda }) => {
  return (
    <div className="sale box">
      <a style={{ fontFamily: "monospace" }} href="">
        {sale.id}
      </a>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
