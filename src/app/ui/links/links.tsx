import CustomLink from "./customLink";
import styles from "../styles/links.module.scss";

export default function Links() {
	return (
		<section className={styles.sec}>
			<CustomLink icon="/linkedin.svg" link="/" alt="LinkedIn link" />
			<CustomLink
				icon="/instagram.svg"
				link="https://www.instagram.com/arica_cosplay/"
				alt="instagram link"
			/>
		</section>
	);
}
