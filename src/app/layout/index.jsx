import { Header } from "../common/Header";

const Pages = ({ children }) => {
  return (
    <>
      <Header />
      <br />
      <div>{children}</div>
    </>
  );
};

export default Pages;
