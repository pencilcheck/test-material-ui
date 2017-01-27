import Head from 'next/head'

/* Material UI need this for onTouchTap */
import injectTapEventPlugin from 'react-tap-event-plugin'

try {
  injectTapEventPlugin()
} catch (e) {
  // Dont do anything here, just
  // prevent the error with HMR
}

import Main from '../components/Main'

export default () => (
  <div>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
    </Head>

    <Main />
  </div>
)
