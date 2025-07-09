import { Outlet } from "react-router";
import styles from "../../App.module.css";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
export const Layout = ({ onSearch, onClear }) => {
  return (
    <div className={styles.app}>
      <Header onSearch={onSearch} onClear={onClear} />
      <Outlet />
      <Footer />
    </div>
  );
};
