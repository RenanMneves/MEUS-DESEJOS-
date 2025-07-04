import styles from "./Card.module.css";

export const Card = ({ name, description, image, onDelete, date }) => {
  const [ano, mes, dia] = date ? date.split("-") : "";
  const convertedDate = new Date(ano, mes - 1, dia);
  const formatedDate = isNaN(convertedDate)
    ? ""
    : Intl.DateTimeFormat("pt-Br").format(convertedDate);
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.description}>{formatedDate}</p>
        <button className={styles.delete} onClick={onDelete}>
          🗑️
        </button>
      </div>
    </div>
  );
};
