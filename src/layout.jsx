import { Outlet } from "react-router-dom";
import Header from "./layout/Header";

const LayoutComponent = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutComponent;
