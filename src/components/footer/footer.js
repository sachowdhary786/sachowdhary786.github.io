import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer id="footer" className={[styles.footer, styles.fillHeight].join(' ')}>
      <section className={styles.center}>
        <p className={styles['footer-text']}>Designed &amp; Built by Saad Ahmed Chowdhary</p>
      </section>
    </footer>
  );
}
