import { UserContext } from "./UserContext";
import { useContext } from "react";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: any = useContext(UserContext);

  return (
    <div>
      <h2>Nome: {data.nome}</h2>
    </div>
  );
};
