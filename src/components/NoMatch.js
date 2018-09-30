import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component *3,
    marginBottom: theme.spacing.component *5,
    padding: theme.padding.component,
  }
})

class NoMatch extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant="display2" component="h2" gutterBottom >404 Error</Typography>
        <Typography component="p" gutterBottom >
          Sorry. The page you are looking for does not exist.
        </Typography>
      </div>
    )
  }
}


export default withStyles(styles)(NoMatch)
