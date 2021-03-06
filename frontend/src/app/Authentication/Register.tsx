import { useFormik } from "formik";
import * as api from "../../api/api";
import Input from "../../components/Input";
import { AuthenticationProps } from "../../utils/types";
import { registerValidationSchema } from "../../utils/validation";
import {
  AuthenticationContainer,
  Button,
  Form,
  Linlk,
  Text,
  // Title,
} from "./Authentication.styles";

function Register({ loadProfile }: AuthenticationProps) {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await api.registration({
          name: values.name,
          email: values.email,
          password: values.password,
        });

        await api.authorization({
          email: values.email,
          password: values.password,
        });

        localStorage.setItem("auth", "1");

        await loadProfile();
      } catch (error) {
        console.log(error);
      }

      resetForm();
    },
  });

  const { name, email, password, confirmPassword } = formik.values;

  return (
    <AuthenticationContainer>
      {/* <Title>Регистрация</Title> */}
      <Form onSubmit={formik.handleSubmit}>
        <Input
          formik={formik}
          value={name}
          name="name"
          placeholder="Имя"
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={email}
          name="email"
          placeholder="E-mail"
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={password}
          name="password"
          type="password"
          placeholder="Пароль"
          handleChange={formik.handleChange}
        />
        <Input
          formik={formik}
          value={confirmPassword}
          name="confirmPassword"
          type="password"
          placeholder="Подтверждение пароля"
          handleChange={formik.handleChange}
        />
        <Button
          type="submit"
          aria-label="Зарегистрироваться"
          disabled={!formik.isValid}
        >
          Зарегистрироваться
        </Button>
      </Form>
      <Text>
        Уже зарегистрированы? <Linlk to="/signin">Вход</Linlk>
      </Text>
    </AuthenticationContainer>
  );
}

export default Register;
