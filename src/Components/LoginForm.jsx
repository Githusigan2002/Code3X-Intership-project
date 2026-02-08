import { useState } from "react";
import { Box, Button, TextField, Typography, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form valid (no backend required)");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: 400 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <Typography variant="h5" fontWeight={600}>
        Welcome Back
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Please login to your account
      </Typography>

      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={Boolean(errors.email)}
        helperText={errors.email}
      />

      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={Boolean(errors.password)}
        helperText={errors.password}
      />

      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ mt: 1 }}
      >
        Login
      </Button>

      <Divider>OR</Divider>

      <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
        Continue with Google
      </Button>
    </Box>
  );
};

export default LoginForm;
