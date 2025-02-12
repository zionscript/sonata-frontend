import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>
            <div className={styles.imageArea}>
              <Image alt="exemplo autor - Editora Sonata" src="/autor-bw.png" width={2800} height={2100} />
            </div>
            <p className={styles.firstHeading}>É um <i className={styles.pHighlight}>Autor</i> independente e precisa de uma <i className={styles.pHighlight}>edição profissional</i> para <i className={styles.pHighlight}>seu livro</i>? <br></br>Fale conosco!</p>
            <hr></hr>
            <p className={styles.pDescription}>Diagramação profissional, design de capas e revisão digital</p>
            <div className={styles.ctas}>
              <a
                className={styles.primary}
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Entrar em contato
              </a>
            </div>
          </h1>
        </div>
        <div className="card-list"></div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.paragraph}>Construído e mantido pela &copy;Editora Sonata</p>
      </footer>
    </div>
  );
}
