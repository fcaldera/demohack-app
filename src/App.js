import React from "react";
import {ThemeProvider} from "styled-components";
import {HashRouter as Router} from 'react-router-dom';

// primer
import {BaseStyles} from "@primer/components";
import {theme} from "@primer/components";
// theme.colors.primary = '#0D30E1';

// contexts
import {AppStateProvider} from './state';

// components
import Layout from "./components/layout";

function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <AppStateProvider>
          <Router>
            <Layout/>
          </Router>
        </AppStateProvider>
      </ThemeProvider>
    </BaseStyles>
  );
}

export default App;
