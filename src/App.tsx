import { UseFetch } from "./UseFetch";

interface ProductProps {
  id: string;
  data: string | number | Date;
  nome: string;
  status: string;
  preco: string;
  quantidade: string;
  descricao: string;
}

export const App = () => {
  const { data, error, loading } = UseFetch(
    "https://data.origamid.dev/produtos"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      {data.map((product: ProductProps) => (
        <div key={product.id}>
          <p>{product.nome}</p>
          <p>{product.preco}</p>
          <p>{product.quantidade}</p>
          <p>{product.descricao}</p>
        </div>
      ))}
    </>
  );
};
