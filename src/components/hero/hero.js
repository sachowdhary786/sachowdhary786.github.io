import { Inter } from "@next/font/google";
import styles from "./hero.module.scss";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <section className={[styles.hero, styles.center].join(" ")}>
      <h2 className={[styles["big-heading"], inter.className].join(" ")}>
        Saad Ahmed Chowdhary
      </h2>
      <h3 className={[styles["big-heading"], inter.className].join(" ")}>
        Web &nbsp;Builder
      </h3>
      <p className={inter.className}>
        A software engineer that builds digital experiences! <br />
        Currently working on building a CMS to make your life much easier
        at&nbsp;
        <Link
          href="https://curatecoders.com"
          target="_blank"
          className={styles["hero-link"]}
        >
          Curate Coders
        </Link>
      </p>
    </section>
  );
}
