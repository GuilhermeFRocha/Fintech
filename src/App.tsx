import { Content } from "./Content";
import { Header } from "./Header";
import { UserContextProvider } from "./UserContext";

export const App = () => {
  return (
    <UserContextProvider>
      <Header />
      <Content />
    </UserContextProvider>
  );
};
