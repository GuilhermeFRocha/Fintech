import { useEffect, useReducer } from "react";
import { Input } from "./Input";

type State = {
  nome: string;
  email: string;
};

type Action = {
  type: string;
  payload: string;
};

function reducer(state: State, action: Action) {
  if (action.type === "setNome") {
    return {
      ...state,
      nome: action.payload,
    };
  }
  if (action.type === "setEmail") {
    return {
      ...state,
      email: action.payload,
    };
  }

  return state;
}

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, { nome: "", email: "" });

  useEffect(() => {
    dispatch({ type: "setEmail", payload: "dddddd@gmail.com" });
  }, []);

  return (
    <div>
      <Input
        label="Nome"
        value={state.nome}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={({ target }: any) => {
          dispatch({ type: "setNome", payload: target.value });
        }}
      />
      <Input
        label="Email"
        value={state.email}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={({ target }: any) => {
          dispatch({ type: "setEmail", payload: target.value });
        }}
      />
    </div>
  );
};
