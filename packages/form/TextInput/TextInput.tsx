import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function ShineTextInput({
  methods,
  name,
}: {
  methods: any;
  name: string;
}) {
  return (
    <Controller
      name={name}
      control={methods.control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
        />
      )}
    />
  );
}
