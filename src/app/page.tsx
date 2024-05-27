import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>MEME</h1>
      <p><Link href="/about">ABOUT US</Link></p>
    </main>
  );
}
