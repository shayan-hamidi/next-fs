"use client";
import React from "react";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { ShineTextInput } from "@shine/form";

const SignUpForm = () => {
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
          Sign Up
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ShineTextInput methods={methods} name="UserName" />
            <Controller
              name="email"
              control={methods.control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="password"
              control={methods.control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Controller
              name="rePassword"
              control={methods.control}
              defaultValue=""
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Re-enter Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
              )}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Sign Up
            </Button>
          </form>
        </FormProvider>
      </Paper>
    </Container>
  );
};

export default SignUpForm;
