// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Input = ({ nameLabel, htmlFor, name, id, ...props }: any) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{nameLabel}</label>
      <input type="text" id={id} name={name} {...props} />
    </div>
  );
};
