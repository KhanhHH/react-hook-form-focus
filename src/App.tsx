import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Controller, useForm } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const defaultValues = {
  common: {
    phoneNumber: "",
    postCode: "",
    address: ""
  }
};

const validationSchema = yup.object({
  common: yup.object({
    phoneNumber: yup.string().required("Required"),
    postCode: yup.string().required("Required"),
    address: yup.string()
  }),
});

const TestForm = () => {
  const { handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  });
  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <div>
          <Controller
            control={control}
            name="common.phoneNumber"
            rules={{ required: true }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error }
            }) => (
              <TextField
                error={!!error}
                label="Phone Number"
                margin="normal"
                helperText={error?.message}
                value={value}
                onChange={onChange}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="common.postCode"
            rules={{ required: true }}
            render={({
              field: { onChange, value, ref },
              fieldState: { error }
            }) => (
              <TextField
                error={!!error}
                label="Post Code"
                margin="normal"
                helperText={error?.message}
                value={value}
                onChange={onChange}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div>
          <Controller
            control={control}
            name="common.address"
            render={({
              field: { onChange, value, ref },
              fieldState: { error }
            }) => (
              <TextField
                error={!!error}
                label="Address"
                margin="normal"
                helperText={error?.message}
                value={value}
                onChange={onChange}
                inputRef={ref}
              />
            )}
          />
        </div>
        <div style={{ marginTop: 600 }}>
          <Button type="submit" variant="contained">
            Submit Form
          </Button>
        </div>
      </form>
    </>
  );
};

function App() {
  return (
    <div style={{ padding: 100 }}>
      <div>
        <h1>Test Form</h1>
        <TestForm />
      </div>
    </div>
  );
}

export default App;
