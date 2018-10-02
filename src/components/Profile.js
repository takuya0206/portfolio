import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import profile from '../assets/img/profile.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  profile: {
    borderRadius: '50%',
    marginTop: 120,
    marginBottom: 40,
    width: 240,
    height: 240,
  }
})

class Profile extends Component {

  // constructor(props) {
  //   super(props)
  // }


  render(){
    const { classes } = this.props

    return (
      <div className={classes.root}>
        <div className={classes.row}>
          <img src={'.'+profile} alt="profile" className={classes.profile} />
        </div>
        <Typography variant="display3" align="center" color="primary" component="h1">Takuya Tokiwa</Typography>
        <Typography variant="display1" align="center" color="primary" component="p" >Project Manager in EdTech Startup</Typography>
      </div>
    )
  }
}


export default withStyles(styles)(Profile)
