import React, {Component} from 'react'
import Profile from './Profile'
import Experience from './Experience'
import Achievement from './Achievement'
import Exposure from './Exposure'
import Publication from './Publication'
import Footer from './Footer'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

class Portfolio extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render () {
    const { classes, isJapanese } = this.props
    return (
      <div className={classes.root}>
        <Profile />
        <Experience isJapanese={isJapanese} />
        <Achievement isJapanese={isJapanese} />
        <Exposure isJapanese={isJapanese} />
        <Publication isJapanese={isJapanese} />
        <Footer isJapanese={isJapanese} / >
      </div>
    )
  }
}


export default withStyles(styles)(Portfolio)
