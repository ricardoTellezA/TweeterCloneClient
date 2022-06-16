import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 dígito numérico.

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("El email no es válido.")
    .required("Por favor ingresa tu correo"),
    nombre: yup
    .string()
    .max(30,"El Nombre debe tener al menos 30 caracteres.")
    .required("Su nombre es requerido"),
  usuario: yup
    .string()
    .max(10,"El Usuario debe tener al menos 15 caracteres.")
    .required("Su usuario es requerido"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, "La contraseña debe tener al menos 5 caracteres, 1 letra mayúscula, 1 letra minúscula, 1 dígito numérico.")
    .required("Por favor ingresa tu contraseña"),
    password2: yup
    .string()
    .oneOf([yup.ref("password"), null], "La contraseña no coincide")
    .required("Las contraseñas no coinciden")
});
