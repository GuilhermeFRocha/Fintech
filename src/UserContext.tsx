import { UseFetch } from "./UseFetch";
import React from "react";

interface UserContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]; // Substitua 'any' pelo tipo apropriado para seus dados
  error: string;
  loading: boolean;
}
export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, error, loading } = UseFetch(
    "https://data.origamid.dev/usuarios/1"
  );

  return (
    <UserContext.Provider value={{ data, error, loading }}>
      {children}
    </UserContext.Provider>
  );
};
