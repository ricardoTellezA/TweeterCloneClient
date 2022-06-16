import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Register.module.css";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const Register = () => {
  const onSubmit = () => {
    console.log("Enviando");
  }

  const { handleChange, errors, touched, handleBlur, values, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
      nombre: "",
      usuario: "",
      password2: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <Layout paginas={"Registrar"}>
      <div className={styles.contenedor}>
        <div>
          <form 
            className={styles.form}
            onSubmit={handleSubmit} 
          >
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
            <h2 className={styles.title}>Twitter Clon</h2>
            <p className={styles.parrafo}>
              <label className={styles.label}>Nombre: </label>
              <input
                id="nombre"
                className={ errors.nombre && touched.nombre ? styles.error : styles.inputs}
                placeholder="Nombre y Apellido."
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur} 
              />
            </p>
            {errors.nombre && touched.nombre && (<p className={styles.errorParrafo}>{errors.nombre}</p>)}

            <p className={styles.parrafo}>
              <label className={styles.label}>Usuario: </label>
              <input 
                className={ errors.usuario && touched.usuario ? styles.error : styles.inputs } 
                id="usuario"
                value={values.usuario}
                onChange={handleChange}
                onBlur={handleBlur} 
              />
            </p>
            {errors.usuario && touched.usuario && (<p className={styles.errorParrafo}>{errors.usuario}</p>)}

            <p className={styles.parrafo}>
              <label className={styles.label}>Correo electronico: </label>
              <input
                className={ errors.email && touched.email ? styles.error : styles.inputs}
                placeholder="correo@correo.com"
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
              {errors.email && touched.email && (<p className={styles.errorParrafo}>{errors.email}</p>)}

            <p className={styles.parrafo}>
              <label className={styles.label}>Contraseña: </label>
              <input 
                id="password"
                type="password" 
                className={ errors.password && touched.password ? styles.error : styles.inputs}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur} 
              />
            </p>
              {errors.password && touched.password && (<p className={styles.errorParrafo}>{errors.password}</p>)}

            <p className={styles.parrafo}>
              <label className={styles.label}>Repetir contraseña: </label>
              <input 
                id="password2"
                type="password"
                value={values.password2}
                onChange={handleChange}
                onBlur={handleBlur} 
                className={ errors.password2 && touched.password2 ? styles.error : styles.inputs} 
              />
            </p>
              {errors.password2 && touched.password2 && (<p className={styles.errorParrafo}>{errors.password2}</p>)}
            <button className={styles.btn}>Registrar</button>
            <div className={styles.cuenta}>
              <p className={styles.crear}>¿Ya tienes una Cuenta?</p>
                <Link href="/login"> 
                    <a className={styles.link}>
                    Inicia Sesion
                    </a>
                </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
