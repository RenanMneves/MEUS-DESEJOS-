import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";

const DEFAULT_FORM = {
  name: "",
  description: "",
  urlImage: "",
  date: "",
  id: "",
};

function App({ search }) {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(DEFAULT_FORM);
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedWishs = [...wishs, form];
    setWishs(updatedWishs);
    setForm(DEFAULT_FORM);
  };
  const handleDelete = (indexToDelete) => {
    const updatedWishs = wishs.filter((_, index) => index !== indexToDelete);
    setWishs(updatedWishs);
  };
  useEffect(() => {
    const savedWishs = localStorage.getItem("userWishs");
    console.log(savedWishs);
    if (savedWishs) {
      try {
        const parsedWishs = JSON.parse(savedWishs);
        console.log(parsedWishs);
        setWishs(parsedWishs);
      } catch (error) {
        console.error(error);
      }
    }
    setLoading(false);
  }, []);
  useEffect(() => {
    if (!loading) {
      localStorage.setItem("userWishs", JSON.stringify(wishs));
    }
  }, [wishs]);
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

  return (
    <main className={styles.main}>
      <AddItemForm handleSubmit={handleSubmit} form={form} setForm={setForm} />
      <CardGrid wishs={filtereWishs} handleDelete={handleDelete} />
    </main>
  );
}

export default App;
