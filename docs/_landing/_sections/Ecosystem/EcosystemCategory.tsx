import styles from "./Ecosystem.module.css";

type EcosystemCategoryProps = {
  title: string;
  items: string[];
};

export const EcosystemCategory = ({ title, items }: EcosystemCategoryProps) => {
  return (
    <div className={styles.content}>
      <p>{title}</p>

      <div className={styles.items}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <img src={item} alt={`Ecosystem content ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};
