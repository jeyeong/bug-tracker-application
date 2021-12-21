import React from 'react';
import { createTheme, ThemeProvider } from "@mui/material";

function CustomTheme({ children }) {
  const theme = createTheme({
    typography: {
      fontSize: 12,
      fontFamily: 'sans-serif',
    },
  })

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

export default CustomTheme;