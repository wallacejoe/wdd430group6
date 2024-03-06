import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.body}>
      <header className={styles.header}>
        <h1>Site Plan</h1>
      </header>
      <section>
        <h2>Site Purpose</h2>
        <hr />
        <p>
          A marketplace for creators & artisans to showcase their work
          A market for those interested in handmade products
          Fosters a sense of community for local artisans
        </p>
      </section>
      <section>
        <h2>Color Palette</h2>
        <a href="https://coolors.co/ececec-69140e-603613-f28123-f30b0b" target="_blank">Color Palette: https://coolors.co/ececec-69140e-603613-f28123-f30b0b</a>
      </section>
      <table className={styles.table}>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}>
            <th>Primary</th>
            <th>Secondary</th>
            <th>Accent 1</th>
            <th>Accent 2</th>
          </tr>
          <tr className={styles.tr}>
            <th className={styles.primary}>#ececec</th>
            <th className={styles.secondary}>#F28123</th>
            <th className={styles.accent1}>#F30B0B</th>
            <th className={styles.accent2}>#69140E</th>
          </tr>
        </tbody>
      </table>
      <section>
        <h2>Typography</h2>
        <h3>Heading Font: Roboto Slab</h3>
        <p>Paragraph Font: Inter</p>
      </section>
      <footer className={styles.footer}>
        {new Date().getFullYear()} | WDD430 Group6 | BYU-I
      </footer>
      </div>
    </main>
  );
}
