import styles from "./TariffItem.module.css";

function TariffItem({ tariff, isHighlighted }) {
  return (
    <div className={`${styles.tariffItem} ${isHighlighted ? styles.highlighted : ''}`}>
      <h3 className={styles.tariffName}>{tariff.name}</h3>
      <p className={styles.tariffPrice}>{tariff.price}</p>
      <p className={styles.tariffDescription}>{tariff.description}</p>
    </div>
  );
}

export default TariffItem;