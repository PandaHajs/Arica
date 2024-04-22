import Image from "next/image";
import styles from "./page.module.scss";
import Links from "./ui/links/links";

export default function Home() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<Image
					src="https://placewaifu.com/image/200"
					alt="placeholder"
					width={600}
					height={600}
					style={{ width: "100%", height: "auto" }}
				/>
				<div>
					<h1>Paulina Bukczyńska</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
						iusto iure quis esse ipsa, sapiente nesciunt nulla provident laborum
						alias? Repellat consectetur tenetur tempore nobis accusamus mollitia
						totam placeat rerum.
					</p>
					<Links />
				</div>
			</section>
		</main>
	);
}
