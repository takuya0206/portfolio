import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  spacing: {
    unit: 4,
    icon: 8,
    para: 12,
    component: 50,
  },
  padding: {
    basic: 5,
    component: 24,
  },
});

export default theme
