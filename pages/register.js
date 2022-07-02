import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../schemas/gql/QuerysAndMutation";
import { basicSchema } from "../schemas";
import { useFormik } from "formik";
import styles from "../styles/Register.module.css";
import Layout from "../components/Layout";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Register = () => {
  const [registerUser] = useMutation(REGISTER_USER);
  const router = useRouter();

  const onSubmit = async (values) => {
    const { email, password, nombre, usuario } = values;

    try {
      await registerUser({
        variables: {
          input: {
            email,
            password,
            name: nombre,
            username: usuario,
          },
        },
      });
      toast.success("Usuario registrado correctamente");
      setTimeout(() => {
        router.push("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.message.replace("GraphQL error: ", ""));
    }
  };

  const { handleChange, errors, touched, handleBlur, values, handleSubmit } =
    useFormik({
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
          <form className={styles.form} onSubmit={handleSubmit}>
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
            <h2 className={styles.title}>Registrate en Twitter Clon</h2>
            <p className={styles.parrafo}>
              <label className={styles.label}>Name: </label>
              <input
                id="nombre"
                className={
                  errors.nombre && touched.nombre ? styles.error : styles.inputs
                }
                placeholder="Nombre y Apellido."
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors.nombre && touched.nombre && (
              <p className={styles.errorParrafo}>{errors.nombre}</p>
            )}

            <p className={styles.parrafo}>
              <label className={styles.label}>User name: </label>
              <input
                className={
                  errors.usuario && touched.usuario
                    ? styles.error
                    : styles.inputs
                }
                id="usuario"
                value={values.usuario}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors.usuario && touched.usuario && (
              <p className={styles.errorParrafo}>{errors.usuario}</p>
            )}

            <p className={styles.parrafo}>
              <label className={styles.label}>Email: </label>
              <input
                className={
                  errors.email && touched.email ? styles.error : styles.inputs
                }
                placeholder="example@example.com"
                id="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors.email && touched.email && (
              <p className={styles.errorParrafo}>{errors.email}</p>
            )}

            <p className={styles.parrafo}>
              <label className={styles.label}>Password: </label>
              <input
                id="password"
                type="password"
                className={
                  errors.password && touched.password
                    ? styles.error
                    : styles.inputs
                }
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </p>
            {errors.password && touched.password && (
              <p className={styles.errorParrafo}>{errors.password}</p>
            )}

            <p className={styles.parrafo}>
              <label className={styles.label}>Repeat Password: </label>
              <input
                id="password2"
                type="password"
                value={values.password2}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password2 && touched.password2
                    ? styles.error
                    : styles.inputs
                }
              />
            </p>
            {errors.password2 && touched.password2 && (
              <p className={styles.errorParrafo}>{errors.password2}</p>
            )}
            <button type="submit" className={styles.btn}>
              Registrar
            </button>
            <div className={styles.cuenta}>
              <p className={styles.crear}>¿Ya tienes una Cuenta?</p>
              <Link href="/login">
                <a className={styles.link}>Inicia Sesion</a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
