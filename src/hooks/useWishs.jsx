import { useEffect, useState } from "react";

const DEFAULT_FORM = {
  name: "",
  description: "",
  urlImage: "",
  date: "",
};
export const useWishs = () => {
  const [wishs, setWishs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(DEFAULT_FORM);

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

  return {
    wishs,
    setWishs,
    loading,
    setLoading,
    form,
    setForm,
  };
};
