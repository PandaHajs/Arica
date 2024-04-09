"use client";
import Link from "next/link";
import styles from "@/app/ui/styles/header.module.scss";
import DropDown from "./dropDown";

export default function Header() {
  return (
    <header className={styles.header}>
      <p>Placeholder</p>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <div className={styles.test}>
          <p>Art</p>
          <DropDown />
        </div>
        <Link href="/">CV</Link>
        <Link href="/Models">3D Models</Link>
      </nav>
    </header>
  );
}
