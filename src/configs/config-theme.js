import { createMuiTheme } from '@material-ui/core/styles'
import { getStyles }      from 'core/libs/lib-style-helpers'

const colors = getStyles([
  'red',
  'hotPink',
  'aquaBlue'
])

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.hotPink
    },
    secondary: {
      main: colors.aquaBlue
    },
    error: {
      main: colors.red
    }
  }
})

export default theme
