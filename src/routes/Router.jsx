import { Routes, Route } from "react-router";
import App from "../App";
import { Layout } from "../components/Layout/Layout";
import { useCallback, useState } from "react";
import { WishDetail } from "../components/WishDetail/WishDetail";
export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });
  const onClear = useCallback(() => {
    setSearch("");
  });
  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/Meus-Desejos" element={<App search={search} />} />
        <Route path="/Meus-Desejos/wish/:id" element={<WishDetail />} />
        <Route path="/*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
