import { ComponentProps } from "react";

interface IDateInput extends ComponentProps<"input"> {
  label: string;
}

export const DateInput = ({ label, ...props }: IDateInput) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type="date" name={label} id={label} />
    </div>
  );
};
