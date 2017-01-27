import { Component } from 'react'
import { style } from 'glamor'
import Block from 'react-blocks'

import {white, indigoA200, cyan500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Sidebar from '../components/Sidebar'

export default class extends Component {
  static async getInitialProps ({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render () {
    const muiTheme = getMuiTheme({
      palette: {
        primary1Color: indigoA200,
      },
    }, {
      //userAgent: this.props.userAgent
      userAgent: 'all'
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Sidebar/>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  common: style({
    'border': 'black 1px solid',
    'backgroundColor': 'red',
    'padding': '20px'
  }),
  container: style({
    'maxWidth': '1320px',
    'margin': '0 auto'
  }),
}
