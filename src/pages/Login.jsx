import { Box, Stack, Container } from "@mui/material";
import loginIllustration from "../assets/loginIllustration.svg";
import LoginForm from "../Components/LoginForm.jsx";
const Login = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Stack direction="row" spacing={12}>
        <LoginForm />
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "block",
              backgroundColor: "#f5faf0",
              borderRadius: 12,
              margin: 12,
            },
          }}
        >
          <img src={loginIllustration} height={400}></img>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;
