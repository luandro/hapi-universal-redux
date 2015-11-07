![logo](http://i.imgur.com/r8IegDK.jpg)
![dependencies](https://img.shields.io/david/luandro/hapi-universal-redux.svg?style=flat-square)
![devDependencies](https://img.shields.io/david/dev/luandro/hapi-universal-redux.svg?style=flat-square)

Isomorphic starterkit with server-side React rendering using
[npm](https://www.npmjs.com/),
[piping](https://github.com/mdlawson/piping),
[webpack](https://webpack.github.io/),
[webpack-dev-server](https://github.com/webpack/webpack-dev-server),
[react-transform](https://gaearon.github.io/react-hot-loader),
[hapi.js](http://www.hapijs.com/),
[babel.js](http://babeljs.io/),
[react.js](https://facebook.github.io/react),
[redux](https://github.com/gaearon/redux),
[react-router](https://github.com/rackt/react-router).

![screenshot](http://i.imgur.com/njzGkwc.png)

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

BSD 3-Clause license. Copyright © 2015, Luandro. All rights reserved.
