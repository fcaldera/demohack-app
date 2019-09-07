import React from "react";
import { BaseStyles, Box, Heading, Button } from "@primer/components";
import { theme } from "@primer/components";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Discovery from './discovery';
import Initiative from './initiative';
import Party from './party';
import Login from './auth/login';
import Signup from './auth/signup';

theme.colors.primary = '#0D30E1';

function App() {
  return (
    <BaseStyles>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Route exact path="/" component={Discovery} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/parties/:id" component={Party} />
            <Route exact path="/initiatives/:id" component={Initiative} />
          </div>
        </Router>
      </ThemeProvider>
    </BaseStyles>
  );
}

export default App;
