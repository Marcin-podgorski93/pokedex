import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
