import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import { titles, achievement } from '../data/text'



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
  media: {
    // object-fit is not supported by IE11.
    objectFit: 'cover',
  }
})


function AchievementCard (props) {
  const { classes, imagePath, title, role, description, link } = props

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        className={classes.media}
        height="220"
        image={imagePath}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="title" component="h3">
          {title}
        </Typography>
        <Typography gutterBottom variant="subheading" component="p" color="textSecondary">
          {role}
        </Typography>
        <Typography component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={link} target="_blank">
          <Button size="small" color="primary">
            Learn More
          </Button>
        </a>
      </CardActions>
    </Card>
  )

}


class Achievement extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  }

  render () {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'

    return (
      <div className={classes.root}>
        <Typography variant='display2' component='h2' gutterBottom={true} >{titles['Achievement'][lang]}</Typography>
        <div className={classes.row}>
        <Grid container="container" spacing={24}>
          {
            Object.keys(achievement).map((key) => {
              return (
                <Grid item="item" xs={12} sm={4}>
                  <AchievementCard
                    classes={classes}
                    imagePath={achievement[key].imagePath}
                    title={achievement[key].title}
                    role={achievement[key].role[lang]}
                    description={achievement[key].description[lang]}
                    link={achievement[key].link}
                  />
                </Grid>
              )
            })
          }
        </Grid>
        </div>

      </div>
    )
  }
}


export default withStyles(styles)(Achievement)
