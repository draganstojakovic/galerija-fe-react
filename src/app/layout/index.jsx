import { Header } from "../common/Header";

const Pages = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Pages;
