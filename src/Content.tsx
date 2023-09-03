import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const Content = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data }: any = useContext(UserContext);

  return (
    <div>
      <p>Playback: {data.preferencias.playback}</p>
      <p>Qualidade: {data.preferencias.qualidade}</p>
      <p>Volume: {data.preferencias.volume}</p>
    </div>
  );
};
