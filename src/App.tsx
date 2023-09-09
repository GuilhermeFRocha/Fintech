import { DataContextProvider } from "./Context/DataContext";
import { Header } from "./components/Header";
import { Sidenav } from "./components/Sidenav";
import Sales from "./pages/Sales";
import { Summary } from "./pages/Summary";
import "./style.css";

export const App = () => {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Summary />
          <Sales />
        </main>
      </div>
    </DataContextProvider>
  );
};
