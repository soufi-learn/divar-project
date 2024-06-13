import Header from "./Header";
import BottomHeader from "./BottomHeader";

const Layout = ({ children }) => {
  return (
    <>
      <BottomHeader />
      {children}
      <Header />
    </>
  );
};

export default Layout;
