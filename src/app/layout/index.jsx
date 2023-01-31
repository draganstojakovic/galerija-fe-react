import { Header } from "../common/Header";

const Pages = ({ children }) => {
  return (
    <>
      <Header />
      <br />
      <div className="card mx-5">{children}</div>
    </>
  );
};

export default Pages;
