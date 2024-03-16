import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <main className={styles.landing}>
      <Image
        src="/Team6HeroImg.png"
        alt="Women Hand Crafting"
        width={1200}
        height={800}
        className={styles.landingImg}
      />
      <div className={styles.logo}>
      <Image
        src="/Artisan.png"
        alt="Women Hand Crafting"
        width={50}
        height={50}
        className={styles.landingImg}
      />
      </div>
      <div className={styles.landingBanner}>
        <h1 className={styles.heroTitle}>Raise your brand to new heights</h1>
        <Link href="/dashboard" className={styles.loginBtn}>
          <span>Login</span>
        </Link>
      </div>
    </main>
  );
}
