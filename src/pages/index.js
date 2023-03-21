import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/home.module.scss";

import Hero from "@/components/hero/hero";
import Nav from "@/components/nav/nav";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Social from "@/components/social/social";

export default function Home() {
  return (
    <>
      <Head>
        <title>Saad Ahmed Chowdhary</title>
        <meta name="description" content="Saad Ahmed Chowdhary Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className={[styles.main, styles.fillHeight].join(" ")}>
        <Social/>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
