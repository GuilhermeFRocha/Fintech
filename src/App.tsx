import { useState, useEffect, ChangeEvent } from "react";

interface DataProps {
  id: string;
  data: string | number | Date;
  nome: string;
  status: string;
}

export const App = () => {
  const [selectedDateInit, setSelectedInitDate] = useState("");
  const [selectedDateEnd, setSelectedEndDate] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchVendasData() {
      try {
        const response = await fetch("https://data.origamid.dev/vendas/");

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados da API");
        }

        const vendasData = await response.json();

        const filteredData = vendasData.filter((item: DataProps) => {
          const vendaDate = new Date(item.data).getTime();
          const startDate = new Date(selectedDateInit).getTime();
          const endDate = new Date(selectedDateEnd).getTime();
          return vendaDate >= startDate && vendaDate <= endDate;
        });

        setData(filteredData);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    }

    fetchVendasData();
  }, [selectedDateInit, selectedDateEnd]);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedInitDate(event.target.value);
  };

  const handleDateEndChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedEndDate(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="datePicker">Escolha uma data de Inicio:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDateInit}
          onChange={handleDateChange}
        />
      </div>

      <div>
        <label htmlFor="datePicker">Escolha uma data de Fim:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDateEnd}
          onChange={handleDateEndChange}
        />
      </div>

      <div>
        {data.map((item: DataProps) => (
          <ul key={item.id} style={{ display: "flex", gap: "8px" }}>
            <li>{item.nome}:</li>
            <li style={{ listStyle: "none" }}>{item.status}</li>
          </ul>
        ))}
      </div>
    </>
  );
};
