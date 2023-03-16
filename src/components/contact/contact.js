import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./contact.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section id="contact">
      <div className={[styles.contact, styles.center].join(" ")}>
        <h2 className={[styles["big-heading"], inter.className].join(" ")}>
          Get in Touch
        </h2>
        <p className={inter.className}>
          I&apos;m currently looking for any new opportunities, big or small!
          <br />
          Whether you have a question or just want to say hi, my inbox is always
          open!
          <br />
          I&apos;ll try my best to get back to you!
        </p>
        <Link href="mailto:sachowdhary786@gmail.com">
          <button>Say Hi!</button>
        </Link>
      </div>
    </section>
  );
}
