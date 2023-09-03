import React, { useState } from "react";

interface IuContext {
  dark: boolean;
  setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UiContext = React.createContext<IuContext | null>(null);

export const UiContextProvider = ({ children }: React.PropsWithChildren) => {
  const [dark, setDark] = useState(false);

  return (
    <UiContext.Provider value={{ dark, setDark }}>
      {children}
    </UiContext.Provider>
  );
};
