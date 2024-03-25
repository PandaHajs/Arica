import Link from "next/link";
import styles from "@/app/ui/styles/header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Placeholder</p>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Projects</Link>
      </nav>
    </header>
  );
}
