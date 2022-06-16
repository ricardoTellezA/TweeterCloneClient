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
              height={"941rem"}
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
          <button className={styles.boton}>
            <Image
              height={"20rem"}
              width={"20rem"}
              src="/img/apple-logo.png"
              alt="Apple"
            />
            Registrate con Apple
          </button>
          <div className={styles.lineas}>
            <hr className={styles.linea} />{" "}
            <p className={styles.linea_parrafo}>o</p>{" "}
            <hr className={styles.linea} />
          </div>
          <button className={styles.boton2}>
            Registrate con el número de teléfo...
          </button>
          <p className={styles.privacidad}>
            Al registrarte, aceptas los{" "}
            <span className={styles.spans}>Términos de servicio</span> y la{" "}
            <span className={styles.spans}>Política de privacidad</span>,
            incluida la política de{" "}
            <span className={styles.spans}> Uso de Cookies</span>.
          </p>
          <h2 className={styles.cuenta}>¿Ya tienes una cuenta?</h2>
            <Link href="/login"><a className={styles.boton3}>Iniciar sesión</a></Link>
        </div>
        <footer className={styles.footer}>
          <div>
            <a href="#">Información</a>
          </div>

          <div>
            <a href="#">Centro de ayuda</a>
          </div>

          <div>
            <a href="#">Condiciones de Servicio</a>
          </div>

          <div>
            <a href="#">Política de Privacidad</a>
          </div>

          <div>
            <a href="#">Política de Cookies</a>
          </div>

          <div>
            <a href="#">Accesibilidad</a>
          </div>

          <div>
            <a href="#">Información de anuncios</a>
          </div>

          <div>
            <a href="#">Blog</a>
          </div>

          <div>
            <a href="#">Estado</a>
          </div>

          <div>
            <a href="#">Empleos</a>
          </div>

          <div>
            <a href="#">Recursos para empresas</a>
          </div>

          <div>
            <a href="#">Publicidad</a>
          </div>

          <div>
            <a href="#">Marketing</a>
          </div>

          <div>
            <a href="#">Twitter clon para empresas</a>
          </div>

          <div>
            <a href="#">Desarrolladores</a>
          </div>

          <div>
            <p>© 2022 Twitter Clon, Inc. Axel And Ricardo</p>
          </div>
        </footer>
      </div>
    </Layout>
  );
}
