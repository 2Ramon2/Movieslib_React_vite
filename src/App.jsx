import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import "./styles/global.css";

export function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
