import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import useAuth from "../../../hooks/UseAuth";
import classes from "./Login.module.scss";

const formValues = {
  username: "",
  password: "",
};

function Login() {
  const { login } = useAuth();

  const form = useForm({
    defaultValues: formValues,
    mode: "onChange",
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <form
      className={classes["login-form"]}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={2} className={classes["login-form-filds"]}>
        <TextField
          label="Username"
          type="username"
          error={!!errors.username}
          helperText={errors.username?.message}
         
          {...register("username", {
            required: "username is required",
          })}
        />
        <TextField
          label="Password"
          type="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", {
            required: "Password  is required",
            minLength: {
              value: 4,
              message: "Password must be at least 4 characters long",
            },
            maxLength: {
              value: 12,
              message: "Password must not exceed 12 characters",
            },
          })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={!formState.isValid}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
}
export default Login;
