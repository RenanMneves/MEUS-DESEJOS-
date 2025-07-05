import { useCallback, useState } from "react";
import styles from "./Header.module.css";

export const Header = ({ onSearch, onClear }) => {
  const [searchValue, setSearchValue] = useState();
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(searchValue);
    },
    [searchValue, onSearch]
  );
  const handleChange = useCallback((e) => {
    const value = e.target.value;
    setSearchValue(value);
  }, []);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Meus desejos</h1>
        <form className={styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.searchGroup}>
            <input
              type="text"
              placeholder="Pesquisar desejos...."
              value={searchValue}
              onChange={handleChange}
              className={styles.input}
            />
            <div className={styles.actions}>
              <button type="submit" className={styles.button}>
                Pesquisar
              </button>
              <button type="button" onClick={onClear} className={styles.clear}>
                Limpar
              </button>
            </div>
          </div>
        </form>
      </div>
    </header>
  );
};
