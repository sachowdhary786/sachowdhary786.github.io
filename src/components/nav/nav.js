import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "../nav/nav.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav>
        <div>&nbsp;</div>
        <div className={styles["styled-links"]}>
          <ol>
            <li>
              <Link href="#about" target="_self" rel="noopener noreferrer">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" target="_self" rel="noopener noreferrer">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#footer" target="_self" rel="noopener noreferrer">
                Contact
              </Link>
            </li>
          </ol>
          <div className={styles.resume}>
            <Link
              href="/Saad_Chowdhary_Resume.pdf"
              locale={false}
              target="_blank"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
