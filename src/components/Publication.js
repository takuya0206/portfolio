import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { titles, publication } from '../data/text'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component,
    marginBottom: theme.spacing.component,
    padding: theme.padding.component,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  inlineIcon: {
    marginRight: theme.spacing.icon,
  },
  myButton: {
    textTransform: 'none',
  }
})

class Publication extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render () {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'

    return (
      <div className={classes.root}>
        <Typography variant='display2' component='h2' gutterBottom={true} >{titles['Publication'][lang]}</Typography>
          {
            Object.keys(publication).map((key) => {
              const title = publication[key].title[lang]
              const link = publication[key].link

              return (
                <div key={title} className={classes.row}>
                  <Button onClick={() => window.open(link)} className={classes.myButton} >
                    <div className={classes.inlineIcon}>
                      <FontAwesomeIcon icon={publication[key].icon} size="lg" />
                    </div>
                    <Typography color="textPrimary" variant="subheading" component="p" gutterBottom={true}>
                      {title}
                    </Typography>
                  </Button>
                </div>
              )
            })
          }

      </div>
    )
  }
}

export default withStyles(styles)(Publication)
