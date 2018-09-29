import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoreIcon from '@material-ui/icons/MoreVert'
import link from '../data/link'

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('xs')]: {
      display: 'block',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
})

const Icon = (props) => {
  const method = props.link ? () => window.open(props.link) : props.method
  return (
    <IconButton color='inherit' onClick={method}>
      <FontAwesomeIcon icon={[props.type, props.title]} />
    </IconButton>
  )
}




class MenuBar extends Component {

  constructor(props) {
    super(props)
    this.props = props
    this.state = {
      anchorEl: null,
      mobileMoreAnchorEl: null,
    }
  }




  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
    this.handleMobileMenuClose()
  }

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget })
  }

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null })
  }


  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state
    const { classes, switchLang } = this.props
    const isMenuOpen = Boolean(anchorEl)
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}
      >
        <MenuItem>
          <Icon type='fab' title='github' link={link.github} />
        </MenuItem>
        <MenuItem>
          <Icon type='fab' title='linkedin' link={link.linkedin} />
        </MenuItem>
        <MenuItem>
          <Icon type='fab' title='twitter' link={link.twitter} />
        </MenuItem>
        <MenuItem>
          <Icon type='fas' title='language' method={switchLang}/>
        </MenuItem>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit"  className={classes.title}>
              Portfolio
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <Icon type="fab" title="github" link={link.github} />
              <Icon type="fab" title="linkedin" link={link.linkedin} />
              <Icon type="fab" title="twitter" link={link.twitter} />
              <Icon type="fas" title="language" method={switchLang} />
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}

      </div>
    )
  }
}

export default withStyles(styles)(MenuBar)
