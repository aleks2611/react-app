import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import classes from "./SignIn.module.scss";
import useAuth from "../../../hooks/UseAuth";

const formValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  username: "",
};

function SignIn() {
  const form = useForm({
    defaultValues: formValues,
    mode: "onChange",
  });

  const { signUp } = useAuth();

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <form
      className={classes["login-form"]}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={2}>
        <TextField
          label="firstName"
          type="firstName"
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          {...register("firstName", {
            required: "firstName is required",
          })}
        />

        <TextField
          label="lastName"
          type="lastName"
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          {...register("lastName", {
            required: "lastName is required",
          })}
        />

        <TextField
          label="username"
          type="username"
          error={!!errors.username}
          helperText={errors.username?.message}
          {...register("username", {
            required: "username is required",
          })}
        />
        <TextField
          label="email"
          type="email"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", {
            required: "email is required",
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

export default SignIn;
