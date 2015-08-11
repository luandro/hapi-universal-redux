import Router from 'react-router';
import Transmit from 'react-transmit';
import routes from 'views/Routes';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/**
 * Fire-up React Router.
 */
Router.run(routes, Router.HistoryLocation, (Handler) => {
  const initialState = window.__reactTransmitPacket || {};
  Transmit.render(Handler, {initialState}, document.getElementById('react-root'));
});

/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (process.env.NODE_ENV !== 'production') {
  const reactRoot = window.document.getElementById('react-root');

  if (!reactRoot || !reactRoot.firstChild || !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}
