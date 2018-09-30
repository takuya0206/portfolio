import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { titles } from '../data/text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { exposure } from '../data/text'


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
  modal: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
  },
  myButton: {
    textTransform: 'none',
  }
})


function ExposureModal(props){
  const { classes, open, onClose, path, title } = props
  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <div style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }} className={classes.modal}>
          <img src={path} style={{ height: 600 }} alt={title} />
        </div>
      </Modal>
    </div>
  )
}



class Exposure extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      open: false,
      path: null,
      title: null,
    }
  }

  handleOpen = (path, title) => {
    this.setState({
      open: true,
      path: path,
      title: title,
    })
  };

  handleClose = () => {
    this.setState({ open: false });
  }

  handleURL = (URL) => {
    window.open(URL)
  }


  render () {
    const { classes, isJapanese } = this.props
    const lang = isJapanese ? 'ja' : 'en'

    return (
      <div className={classes.root}>
        <Typography variant='display2' component='h2' gutterBottom={true} >{titles['Media Exposure'][lang]}</Typography>
        {
          Object.keys(exposure).map((key) => {
            const method = exposure[key].image ? this.handleOpen : this.handleURL
            const title = exposure[key].title[lang]
            const path = exposure[key].image ? exposure[key].image : exposure[key].URL

            return (
              <div key={title} className={classes.row}>
                <Button onClick={() => method(path, title)} className={classes.myButton} >
                  <div className={classes.inlineIcon}>
                    <FontAwesomeIcon icon={exposure[key].icon} size="lg" />
                  </div>
                  <Typography color="textPrimary" variant="subheading" component="p" gutterBottom={true}>
                    {title}
                  </Typography>
                </Button>
              </div>
            )
          })
        }
        <ExposureModal classes={classes} open={this.state.open} title={this.state.path} path={this.state.path} onClose={this.handleClose} />
      </div>
    )
  }
}

export default withStyles(styles)(Exposure)
