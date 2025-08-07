import Link from "next/link";
import Image from "next/image";
import styles from "./styles/not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1>🔍 404 - Página não encontrada</h1>
            <p>A página que você procura não existe.</p>

            <div className={styles.image}>
                <Image className={styles.image} src="/gif/papalegua.gif"
                alt="Página não encontrada"
                width={400}
                height={300} />
            </div>
            
            <div className={styles.buttons}>
                <Link className={styles.link} href="/">🏠 Voltar para Home</Link>
            </div>
        </div>
    )
}