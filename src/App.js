import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import MenuBar from './components/MenuBar'
import Portfolio from './components/Portfolio'
import NoMatch from './components/NoMatch'
import PrivacyPolicy from './components/PrivacyPolicy'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './assets/style/theme'

class App extends Component {

  constructor(props) {
    super(props)
    this.sstate = {
      isJapanese: true,
    }
  }


  switchLang = () => {
    this.setState((prevState) => ({
      isJapanese: !prevState.isJapanese
    }))
  }

  componentWillMount(){
    const lang = (window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage;
    const isJapanese = lang === 'ja' ? true : false
    this.setState({
      isJapanese: isJapanese
    })
  }

  render() {
    const { isJapanese } = this.state
    return (
      <React.Fragment>
        <CssBaseline />
          <Router>
            <MuiThemeProvider theme={theme}>
              <MenuBar switchLang={this.switchLang} />
              <Switch>
                <Route
                  path='/portfolio'
                  exact
                  render={() => <Portfolio isJapanese={isJapanese} />}
                />
                <Route
                  path='/portfolio/praivacy_policy'
                  render={() => <PrivacyPolicy isJapanese={isJapanese} />}
                />
                <Route component={NoMatch} />

              </Switch>
            </MuiThemeProvider>
         </Router>
      </React.Fragment>
    );
  }
}

library.add(fab, fas)
export default App;
