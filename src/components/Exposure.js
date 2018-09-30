import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { titles } from '../data/text'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component,
    marginBottom: theme.spacing.component,
    padding: theme.padding.component,
  }
})


class Exposure extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }


  render () {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'

    return (
      <div className={classes.root}>
        <Typography variant='display2' component='h2' gutterBottom={true} >{titles['Media Exposure'][lang]}</Typography>
      </div>
    )
  }
}


export default withStyles(styles)(Exposure)
