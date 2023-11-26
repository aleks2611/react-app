import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import useAuth from "../../../hooks/UseAuth";
import EditUserModal from "../../../shared/Modal/Modal";
import crateContext from "../../../context/Provider";
import classes from "./EditUser.module.scss";

function EditUser({ open, handleClose }) {
  const { updateUser } = useAuth();
  const { state } = useContext(crateContext);

  const formValues = {
    firstName: state?.user?.firstName || "",
    lastName: state?.user?.lastName || "",
  };

  const form = useForm({
    defaultValues: { ...formValues },
    mode: "onChange",
  });

  const { register, handleSubmit, formState, setValue } = form;
  const { errors } = formState;

  useEffect(() => {
    setValue("firstName", state?.user?.firstName || "");
    setValue("lastName", state?.user?.lastName || "");
  }, [state?.user?.firstName, state?.user?.lastName, setValue]);

  const onSubmit = (data) => {
    updateUser(data, state?.user?.id);
  };

  return (
    <EditUserModal open={open} handleClose={handleClose}>
      <form
        className={classes["update-form"]}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <Stack spacing={2} width={400}>
          <TextField
            label="First Name"
            type="text"
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            
            {...register("firstName", {
              required: "First Name is required",
            })}
          />

          <TextField
            label="Last Name"
            type="text"
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!formState.isValid}
          >
            Update User Data
          </Button>
        </Stack>
      </form>
    </EditUserModal>
  );
}

export default EditUser;
