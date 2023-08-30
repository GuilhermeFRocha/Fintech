import { useState, useEffect } from "react";

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

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Ocorreu um erro:", error);
      }
    }

    fetchVendasData();
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateChange = (event: any) => {
    setSelectedInitDate(event.target.value);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDateEndChange = (event: any) => {
    setSelectedEndDate(event.target.value);
  };

  return (
    <>
      <div>
        <label htmlFor="datePicker">Escolha uma data:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDateInit}
          onChange={handleDateChange}
        />
        <p>Data selecionada: {selectedDateInit}</p>
      </div>

      <div>
        <label htmlFor="datePicker">Escolha uma data:</label>
        <input
          type="date"
          id="datePicker"
          value={selectedDateEnd}
          onChange={handleDateEndChange}
        />
        <p>Data selecionada: {selectedDateEnd}</p>
      </div>
    </>
  );
};
