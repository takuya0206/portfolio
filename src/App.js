import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuBar from './components/MenuBar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './assets/theme'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Router>
            <MuiThemeProvider theme={theme}>
              <MenuBar />
            </MuiThemeProvider>
         </Router>
      </React.Fragment>
    );
  }
}

library.add(fab, fas)
export default App;
