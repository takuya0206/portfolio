import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Icon from '@material-ui/core/Icon'
import { skills, introduction } from '../data/text'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.component,
    marginBottom: theme.spacing.component,
    padding: theme.padding.component,
  },
  chip: {
    margin: theme.spacing.unit,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  inlineIcon: {
    marginRight: theme.spacing.icon,
  },
  para_container: {
    marginTop: theme.spacing.para,
    marginBottom: theme.spacing.para,
  },
})

class Experience extends Component {

  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'

    return (
      <div className={classes.root}>
        <Grid container="container" spacing={24}>

          <Grid item="item" xs={12} sm={4}>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.row}>
                  <Icon className={classes.inlineIcon}>explore</Icon>
                  <Typography color="textPrimary" variant="title" component="p" gutterBottom={true}>
                    Project Management
                  </Typography>
                </div>
                <Typography component="p" className={classes.para_container}>
                  {introduction['Project Management'][lang]}
                </Typography>
                  {
                    skills['Project Management'][lang].map((skill) => {
                      return (<Chip key={skill} label={skill} color="secondary" className={classes.chip} variant="outlined" />)
                    })
                  }
              </CardContent>
            </Card>
          </Grid>

          <Grid item="item" xs={12} sm={4}>
            <Card>
              <CardContent>
                <div className={classes.row}>
                  <Icon className={classes.inlineIcon}>desktop_mac</Icon>
                  <Typography color="textPrimary" variant="title" component="p" gutterBottom={true}>
                    Software Engineering
                  </Typography>
                </div>
                <Typography component="p" className={classes.para_container}>
                  {introduction['Software Engineering'][lang]}
                </Typography>
                {
                  skills['Software Engineering'][lang].map((skill) => {
                    return (<Chip key={skill} label={skill} color="secondary" className={classes.chip} variant="outlined" />)
                  })
                }
              </CardContent>
            </Card>
          </Grid>

          <Grid item="item" xs={12} sm={4}>
            <Card>
              <CardContent>
                <div className={classes.row}>
                  <Icon className={classes.inlineIcon}>business</Icon>
                  <Typography color="textPrimary" variant="title" component="p" gutterBottom={true}>
                    Entrepreneurship
                  </Typography>
                </div>
                <Typography component="p" className={classes.para_container}>
                  {introduction['Entrepreneurship'][lang]}
                </Typography>
                {
                  skills['Entrepreneurship'][lang].map((skill) => {
                    return (<Chip key={skill} label={skill} color="secondary" className={classes.chip} variant="outlined" />)
                  })
                }
              </CardContent>
            </Card>
          </Grid>

        </Grid>
    </div>
  )
 }
}

export default withStyles(styles)(Experience)
