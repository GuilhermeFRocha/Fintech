import { useData } from "../Context/DataContext";
import SaleItem from "../components/SaleItem";

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;

  return (
    <ul>
      {data.map((sale) => (
        <li id={sale.id}>
          <SaleItem sale={sale} />
        </li>
      ))}
    </ul>
  );
};
export default Sales;
