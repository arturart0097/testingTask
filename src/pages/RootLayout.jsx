import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <h3>123123123</h3>
    </>
  );
}
