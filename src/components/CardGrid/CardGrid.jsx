import { Card } from "../Card/Card";
import styles from "./CardGrid.module.css";

export const CardGrid = ({ wishs }) => {
  return (
    <div className={styles.grid}>
      {wishs.map((wish, index) => (
        <Card
          key={`${wish.name}-${index}`}
          name={wish.name}
          description={wish.description}
          image={wish.urlImage}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};
