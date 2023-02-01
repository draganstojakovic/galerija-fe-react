import { Header } from "../common/Header";

const Pages = ({ children }) => {
  return (
    <>
      <Header />
      <div className="card mx-5">
        <br />
        <br />
        {children}
      </div>
    </>
  );
};

export default Pages;
