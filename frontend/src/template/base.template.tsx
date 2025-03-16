import { Outlet } from "react-router";
import Menu from "../components/menu";

export default function BaseTemplate() {
  return (
    <div id="App">
      <Menu />
      <Outlet />
    </div>
  );
}
