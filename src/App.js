import React from 'react'
import { ThemeProvider } from 'styled-components'
import { HashRouter as Router } from 'react-router-dom'
// primer
import { BaseStyles } from '@primer/components'

// components
import Layout from './components/layout'

// contexts
import { AppStateProvider } from './state'

//theme
import theme from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles>
        <AppStateProvider>
          <Router>
            <Layout />
          </Router>
        </AppStateProvider>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
