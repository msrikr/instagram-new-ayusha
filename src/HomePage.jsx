import { Box } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "60px",
        fontWeight: "bold",
        color: "white",
        background: `radial-gradient(circle at center, #ffffff33, #000000dd),
                     linear-gradient(135deg, #ff00cc, #3333ff)` ,
        backgroundBlendMode: "overlay",
        textShadow: "0 0 20px rgba(255,255,255,0.8)",
      }}
    >
      Hi
    </Box>
  );
}