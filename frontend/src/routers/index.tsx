import { Route, Routes } from "react-router";
import HomeScreen from "../screens/home.screen";
import BaseTemplate from "../template/base.template";

export default function Routers() {
  return (
    <Routes>
      <Route element={<BaseTemplate />}>
        <Route index path="/" element={<HomeScreen />} />
      </Route>
    </Routes>
  );
}
