import { Box, Stack, Container } from "@mui/material";
import loginIllustration from "../assets/loginIllustration.svg";
import LoginForm from "../Components/LoginForm.jsx";
const Login = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <LoginForm />
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <img src={loginIllustration} height={400} widt></img>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
