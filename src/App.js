import React from "react";
import { BaseStyles, Box, Heading, Button } from "@primer/components";
import { theme } from "@primer/components";
import { ThemeProvider } from "styled-components";

function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <Box m={4}>
          <Heading mb={2}>Hello, world!</Heading>
          <p>This will get Primer text styles.</p>
          <Button>Go!</Button>
        </Box>
      </ThemeProvider>
    </BaseStyles>
  );
}

export default App;
