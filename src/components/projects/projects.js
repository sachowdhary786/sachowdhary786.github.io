import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./projects.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Projects() {
  return (
    <section id="projects"> 
      <div className={[styles.about, styles.center].join(" ")}>
        <div>
          <h2 className={[styles["big-heading"], inter.className].join(" ")}>
            Projects
          </h2>
          <p className={inter.className}>
            Expecting something here? There's a reason why this is empty right now! <br />
            A little thing called NDA's which could get me in a lot of trouble if I break them ... <br/>
            Don't fret, keep coming back and I'll have something here for you to check out soon! <span class={styles['small-text']}>(That's a promise!)</span>
          </p>
        </div>
      </div>
    </section>
  );
}
