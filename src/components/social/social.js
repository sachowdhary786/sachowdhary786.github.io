import styles from "./social.module.scss";
import {FiGithub} from "react-icons/fi";
import {FiTwitter} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
import Link from "next/link";

export default function Social() {
  return (
    <>
      <div orientation="left" className={styles["sideElement-left"]}>
        <ul className={styles.socials}>
          <li>
            <Link
              href="https://github.com/sachowdhary786"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub />
            </Link>
          </li>
          <li>
            <Link
              href="https://twitter.com/saadchowdhary"
              aria-label="Twitter"
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/saadchowdhary"
              aria-label="Linkedin"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin />
            </Link>
          </li>
        </ul>
      </div>
      <div orientation="right" className={styles["sideElement-right"]}>
        <div className={styles["linked-wrapper"]}>
          <a href="mailto:sachowdhary786.com">sachowdhary786@gmail.com</a>
        </div>
      </div>
    </>
  );
}
