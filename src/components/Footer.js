import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component,
    padding: theme.padding.basic * 3,
    backgroundColor: theme.palette.primary.dark,
  },
  footer: {
    color: theme.palette.primary.contrastText,
  }
})


class Footer extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render () {
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <Link to="portfolio/praivacy_policy">
          <Typography align="center" className={classes.footer}>Privacy Policy</Typography>
        </Link>
        <Typography align="center" className={classes.footer}>© 2018 Takuya Tokiwa</Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Footer)
