import styles from "./statpreviewcard.module.css"
import Image from "next/image"

const StatPreviewCard = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <picture>
            <source media="(min-width: 795px)" srcSet="/images/image-header-desktop.jpg" />
            <img className={styles.image} src="/images/image-header-mobile.jpg" alt="People at the office" />
          </picture>
        </div>

        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Get <span>insights</span> that help your business grow. </h1>
          <p className={styles.description}>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer, experience,
            and overall efficiency. </p>
          <ul className={styles.stats_list}>
            <li>
              <p className={styles.item_stat}>10k+</p>
              <p className={styles.item_info}>COMPANIES</p>
            </li>
            <li>
              <p className={styles.item_stat}>314</p>
              <p className={styles.item_info}>TEMPLATES</p>
            </li>
            <li>
              <p className={styles.item_stat}>12M+</p>
              <p className={styles.item_info}>QUERIES</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StatPreviewCard;
