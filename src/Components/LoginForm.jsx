import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

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
      <Typography variant="h3" fontWeight={600} align="center" margin={1}>
        Welcome Back!
      </Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        marginBottom={1}
      >
        Simplify your workflow and boost your productivity with
        <span>Tuga's App.</span> Get started for free
      </Typography>

      <TextField
        label="Username"
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

      <Divider>or continue with</Divider>
      <Stack direction="row" justifyContent="center">
        <IconButton
          href="#"
          target="_blank"
          sx={{
            backgroundColor: "#000000",
            color: "white",
            borderRadius: 5,
            margin: 2,
            "&:hover": {
              backgroundColor: "#1d1d1d",
            },
          }}
        >
          <GoogleIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <IconButton
          href="#"
          target="_blank"
          sx={{
            backgroundColor: "#000000",
            color: "white",
            borderRadius: 5,
            margin: 2,
            "&:hover": {
              backgroundColor: "#1d1d1d",
            },
          }}
        >
          <AppleIcon sx={{ fontSize: 24 }} />
        </IconButton>
        <IconButton
          href="#"
          target="_blank"
          sx={{
            backgroundColor: "#000000",
            color: "white",
            borderRadius: 5,
            margin: 2,
            "&:hover": {
              backgroundColor: "#1d1d1d",
            },
          }}
        >
          <FacebookOutlinedIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default LoginForm;
