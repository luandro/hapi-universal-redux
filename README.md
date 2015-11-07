![screenshot](http://i.imgur.com/njzGkwc.png)
# Hapi Universal Redux
![dependencies](https://img.shields.io/david/luandro/hapi-universal-redux.svg?style=flat-square)
![devDependencies](https://img.shields.io/david/dev/luandro/hapi-universal-redux.svg?style=flat-square)


Fork from Rick Wong's [React Isomorphic Starterkit](https://github.com/RickWong/react-isomorphic-starterkit), with [Redux](https://github.com/gaearon/redux) added to the isomorphic mix.

Isomorphic starterkit with server-side React rendering using
[npm](https://www.npmjs.com/),
[piping](https://github.com/mdlawson/piping),
[webpack](https://webpack.github.io/),
[webpack-dev-server](https://github.com/webpack/webpack-dev-server),
[hapi.js](http://www.hapijs.com/),
[babel.js](http://babeljs.io/),
[react.js](https://facebook.github.io/react),
[redux](https://github.com/gaearon/redux),
[react-router](https://github.com/rackt/react-router),
[react-transform](https://gaearon.github.io/react-hot-loader),
[react-transmit](https://github.com/RickWong/react-transmit),

## Features

- Fully automated with npm run scripts
- Server hot reloads with piping and Hapi.js
- Webpack for watch + production builds
- React.js + Router on the client and server
- React Transform for instant client updates
- Babel.js automatically compiles ES6 + ES7
- React Transmit to preload on server to client
- Redux for managing app state

It just works out-of-the-box.

## Installation

Make sure you're using Node >= 4.0.0.

```bash
	git clone https://github.com/luandro/hapi-universal-redux.git
	cd hapi-universal-redux

	npm install
	npm run dev     # start Hapi server and webpack-dev-server hot server

	# production build and run
	NODE_ENV=production npm run build
	NODE_ENV=production npm run start
```

## Usage

Run `npm run dev` in your terminal and play with `views/Main.js` to get a feel of
the server-side rendering and client-side hot updates.


## License

BSD 3-Clause license. Copyright © 2015, Rick Wong and Luandro. All rights reserved.
