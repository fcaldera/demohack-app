import React from 'react'
import {ThemeProvider} from 'styled-components'
import {HashRouter as Router} from 'react-router-dom'

// primer
import {BaseStyles} from '@primer/components'

// components
import Layout from './components/layout'

// contexts
import {AppStateProvider} from './state'

//theme
import theme from './theme'

// stylesheet
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseStyles style={{height: '100%'}}>
        <AppStateProvider>
          <Router>
            <Layout/>
          </Router>
        </AppStateProvider>
      </BaseStyles>
    </ThemeProvider>
  )
}

export default App
