import styles from "./skeleton.module.scss";

export default function Skeleton() {
	return (
		<main className={styles.skeleton}>
			{Array.from({ length: 9 }).map((_, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: This is a skeleton screen, so we don't need to worry about the key
				<Card key={index} />
			))}
		</main>
	);
}

function Card() {
	return <div className={styles.card} />;
}
