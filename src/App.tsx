import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataContextProvider } from "./Context/DataContext";
import { Header } from "./components/Header";
import { Sidenav } from "./components/Sidenav";
import Sales from "./pages/Sales";
import { Summary } from "./pages/Summary";
import "./style.css";
import Sale from "./pages/Sale";

export const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Summary />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/vendas/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
};
