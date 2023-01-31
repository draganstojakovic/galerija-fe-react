import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

const Pages = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Pages;
