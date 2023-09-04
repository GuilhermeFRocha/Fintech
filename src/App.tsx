import { DataContextProvider } from "./Context/DataContext";
import { Header } from "./components/Header";
import { Sidenav } from "./components/Sidenav";
import { Summary } from "./pages/Summary";
import "./style.css";

export const App = () => {
  return (
    <DataContextProvider>
      <div>
        <Sidenav />
        <main>
          <Header />
          <Summary />
        </main>
      </div>
    </DataContextProvider>
  );
};
