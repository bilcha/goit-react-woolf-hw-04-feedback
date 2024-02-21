export const Section = ({ children, title }) => {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
};
