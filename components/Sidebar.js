import { style } from 'glamor'

import RaisedButton from 'material-ui/RaisedButton'
import Slider from 'material-ui/Slider'
import Paper from 'material-ui/Paper'
import Checkbox from 'material-ui/Checkbox'
import FlatButton from 'material-ui/FlatButton'

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FlatButton style={{width: '100%'}} label='« Back' />
        <RaisedButton style={{width: '100%'}} label='« Back' />
      </div>
    )
  }
}

const styles = {
  buttonBlock: style({
    'width': '100%',
  }),
  sidebar: style({
    'width': '250px',
    'padding': '20px',
  }),
}
