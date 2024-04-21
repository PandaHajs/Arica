import Model from "../ui/modelParts/model";
import styles from "./page.module.scss";
import ModelMenu from "../ui/modelParts/modelMenu";

export default function Models() {
	return (
		<main className={styles.main}>
			<ModelMenu />
			<Model />
		</main>
	);
}
