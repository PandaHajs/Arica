import Image from "next/image";
import styles from "./page.module.scss";
import Links from "./ui/links/links";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Image
          src="/Makima.jpg"
          alt="To na pewno ja"
          width={923}
          height={923}
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <h1>Paulina Bukczyńska</h1>
          <p>
            Nazywam się Paulina Bukczyńska, obecnie studiuję Game Development na
            Collegium da Vinci w Poznaniu. Specjalizuję się w grafice 2d i 3d.
            Głównie interesuje mnie tworzenie concept artów postaci, a w
            szczególności ich strojów.
          </p>
          <Links />
        </div>
      </section>
    </main>
  );
}
