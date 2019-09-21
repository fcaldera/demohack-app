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

// theme
const customTheme = Object.assign(theme, {});

function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={customTheme}>
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
