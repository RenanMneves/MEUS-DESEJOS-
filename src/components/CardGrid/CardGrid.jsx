import { Card } from "../Card/Card";
import { EmptyState } from "../EmptyState/EmptyState";
import styles from "./CardGrid.module.css";

export const CardGrid = ({ wishs, handleDelete, search }) => {
  const isSearching = search && search.length > 0;
  const isEmptyList = wishs && wishs.length === 0;

  return (
    <>
      {isEmptyList ? (
        <EmptyState />
      ) : (
        <div className={styles.grid}>
          {wishs.map((wish, index) => (
            <Card
              key={`${wish.name}-${index}`}
              name={wish.name}
              description={wish.description}
              image={wish.urlImage}
              date={wish.date}
              id={wish.id}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};
