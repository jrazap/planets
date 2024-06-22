import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footetr";

const LayoutComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutComponent;
