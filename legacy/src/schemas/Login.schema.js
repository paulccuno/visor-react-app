import * as yup from "yup";

export const loginFields = {
  username: "username",
  password: "password",
};

const Login = yup.object().shape({
  username: yup
    .string()
    .required("Este campo es requerido"),
  password: yup.string().required("Este campo es requerido"),
});

export default Login;
