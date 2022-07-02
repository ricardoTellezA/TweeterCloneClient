import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Login.module.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const Login = () => {
  const onSubmit = () => {
    console.log("Enviando");
  };

  const { handleChange, errors, touched, handleBlur, values, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <Layout paginas={"Login"}>
      <div className={styles.contenedor}>
        <div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={styles.icon}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </Link>
            <div className={styles.pajaro}>
              <Image
                src="/img/PajaroTwitter.png"
                width={"40rem"}
                height={"47rem"}
                alt="Twitter"
              />
            </div>
            <h2 className={styles.title}>Inicia Sesión en Twitter Clon</h2>
            <button className={styles.apple}>
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
            <p className={styles.parrafo} type="Name:">
              <input
                className={
                  errors.email && touched.email ? styles.error : styles.inputs
                }
                id="email"
                type="email"
                placeholder="Teléfono, correo electrónico o nom.."
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className={styles.errorParrafo}>{errors.email}</p>
              )}
              <input
                className={
                  errors.password && touched.password
                    ? styles.error
                    : styles.input
                }
                id="password"
                type="password"
                placeholder="Contraseña"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className={styles.errorParrafo}>{errors.password}</p>
              )}
            </p>
            <button className={styles.btn}>Inicia Sesión</button>
            <button className={styles.btn2}>¿Olvidaste tu contraseña?</button>
            <div className={styles.cuenta}>
              <p className={styles.crear}>¿No tienes una Cuenta?</p>
              <Link href="/register">
                <a className={styles.link}>Regístrate</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
