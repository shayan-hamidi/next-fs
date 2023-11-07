"use client";

import React from "react";
import { Container, Paper, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { ShineTextInput } from "@shine/form";
import { ShineButton } from "../../../packages/core/Button";

export default function LogIn() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Log In
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ShineTextInput name="UserName" />
            <ShineTextInput name="password" />
            <ShineButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              i18nKey="settings"
            />
          </form>
        </FormProvider>
      </Paper>
    </Container>
  );
}
