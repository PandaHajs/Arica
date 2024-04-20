"use client";
import { Link } from "react-transition-progress/next";
import styles from "@/app/ui/styles/header.module.scss";
import DropDown from "./dropDown";

export default function Header() {
	return (
		<header className={styles.header}>
			<p>Placeholder</p>
			<nav className={styles.nav}>
				<Link href="/">Home</Link>
				<div tabIndex={0} role="button" className={styles.art}>
					<p>Art</p>
					<DropDown />
				</div>
				<Link href="/">CV</Link>
				<Link href="/Models">3D Models</Link>
			</nav>
		</header>
	);
}
