import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./about.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <section id="about">
      <div className={[styles.about, styles.center].join(" ")}>
        <div>
          <h2 className={[styles["big-heading"], inter.className].join(" ")}>
            About
          </h2>
          <p className={inter.className}>
            Hello! My name is Saad and I enjoy creating things that live on the
            internet. My interest in web development started back in 2011 when I
            decided to create a website for a family business, turns out I
            enjoyed it a lot more than I thought I would!
          </p>
        </div>
        <div className={styles["tech"]}>
          <p className={inter.className}>
            Here are some of the technologies that I've used recently:{" "}
          </p>
          <ul className={[inter.className, styles["tech-list"]]}>
            <li>Javascript [ES6+]</li>
            <li>Next.JS</li>
            <li>Node.JS</li>
            <li>TypeScript</li>
            <li>Angular</li>
            <li>WebPack</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
