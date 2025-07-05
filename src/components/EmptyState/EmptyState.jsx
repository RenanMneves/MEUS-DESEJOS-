import styles from "./EmptyState.module.css";
export const EmptyState = ({ isSearching }) => {
  return (
    <>
      <div className={styles.container}></div>
      {isSearching ? (
        <div className={styles.messageContainer}>
          <p className={styles.icon}>🔎🔍</p>
          <p className={styles.message}>Nenhum desejo encontrado </p>
        </div>
      ) : (
        <div className={styles.messageContainer}>
          <p className={styles.icon}>📦</p>
          <p className={styles.message}>Sem desejos cadrastados</p>
        </div>
      )}
    </>
  );
};
