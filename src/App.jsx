import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";
import { useWishs } from "./hooks/useWishs";

const DEFAULT_FORM = {
  name: "",
  description: "",
  urlImage: "",
  date: "",
};

function App({ search }) {
  const { wishs, setWishs } = useWishs();
  const [form, setForm] = useState(DEFAULT_FORM);

  const filtereWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wish) => {
      const searchower = search.toLowerCase();
      return (
        wish.name.toLowerCase().includes(searchower) ||
        wish.description.toLowerCase().includes(searchower)
      );
    });
  }, [search, wishs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
      wishs.length > 0 ? Math.max(...wishs.map((w) => Number(w.id))) + 1 : 1;
    const newWish = { ...form, id: newId };
    const updatedWishs = [...wishs, newWish];
    setWishs(updatedWishs);
    setForm(DEFAULT_FORM);
  };
  const handleDelete = useCallback(
    (indexToDelete) => {
      const updatedWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updatedWishs);
    },
    [wishs]
  );

  return (
    <main className={styles.main}>
      <AddItemForm handleSubmit={handleSubmit} form={form} setForm={setForm} />
      <CardGrid wishs={filtereWishs} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
