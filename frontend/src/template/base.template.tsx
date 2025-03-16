import { Outlet } from "react-router";

export default function BaseTemplate() {
  return (
    <div id="App">
      <Outlet />
    </div>
  );
}
