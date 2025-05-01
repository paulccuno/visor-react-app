import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Login, { loginFields } from "../../../schemas/Login.schema";

import "./styles.css";
import Input from "../../General/Input";
import Button from "../../General/Button";
import apiLosFrutales from "../../../services/apiLosFrutales";
import LoginContext from "../../../contexts/LoginContext";

export default function LoginForm({ loginShowed = false }) {
  const [errorMessage, setErrorMessage] = useState(false);

  const { setToken } = useContext(LoginContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Login) });

  useEffect(() => {
    if (loginShowed) reset();
  }, [loginShowed, reset]);

  const handleSubmitLoginForm = async (values) => {
    const { username, password } = values;
    const data = {
      email: username,
      password,
    };
    const res = await apiLosFrutales.auth.singIn({ data });
    if (!res.success) {
      setErrorMessage(res.message);
      return;
    }
    setErrorMessage("Usuario encontrado");
    setToken(res.data.token);
    localStorage.setItem("token", res.data.token);
  };

  return (
    <>
      <form
        className="Login-form"
        onSubmit={handleSubmit(handleSubmitLoginForm)}
      >
        <Input
          className="Login-form__input"
          label="Usuario"
          {...register(loginFields.username)}
          error={errors[loginFields.username]?.message}
        />
        <Input
          className="Login-form__input"
          label="Contraseña"
          type="password"
          {...register(loginFields.password)}
          error={errors[loginFields.password]?.message}
        />
        <p>{errorMessage}</p>
        <Button type="submit" className="Login-form__submit">
          INICIAR SESIÓN
        </Button>
      </form>
    </>
  );
}
