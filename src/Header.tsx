import { useContext } from "react";
import { UiContext } from "./UiContext";

export const Header = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { dark, setDark }: any = useContext(UiContext);

  return (
    <div>
      <button onClick={() => setDark(!dark)}>{dark ? "dark" : "light"}</button>
    </div>
  );
};
