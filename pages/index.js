import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout paginas={"Home"}>
      <div className={styles.contenedor}>
        <div className={styles.imagenes}>
          <div>
            <Image
              width={"1040rem"}
              height={"836rem"}
              src="/img/ImagenAzul.png"
              alt="Imagen Azul"
            />
          </div>
          <div className={styles.pajaro}>
            <Image
              src="/img/PajaroTwitter.png"
              width={"400rem"}
              height={"470rem"}
              alt="Twitter"
            />
          </div>
        </div>

        <div className={styles.contenido}>
          <div>
            <Image
              src="/img/PajaroTwitter.png"
              width={"50rem"}
              height={"50rem"}
              alt="Twitter"
            />
          </div>
          <h1 className={styles.title}>Lo que está pasando ahora</h1>
          <p className={styles.parrafo}>Únete a Twitter Clon hoy mismo.</p>
          <div className={styles.cuenta}>
            <Link href="/register">
              <button className={styles.boton2}>
                Registrate con el número de teléfo...
              </button>
            </Link>
          </div>
          <Link href="/login">
            <a className={styles.boton3}>Iniciar sesión</a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
