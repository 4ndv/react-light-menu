# react-light-menu

Modern and easy to use menu component for react-router. Heavily inspired by [react-metismenu](https://github.com/alpertuna/react-metismenu)

[![NPM](https://img.shields.io/npm/v/react-light-menu.svg)](https://www.npmjs.com/package/react-light-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**[Demo](https://madeby.lynx.pink/react-light-menu)**

## Install

```bash
npm install --save react-light-menu
```

Or using yarn:

```bash
yarn add react-light-menu
```

## Requirements

Because light-menu written completely using hooks, which is a feature of never react and react-router, here's some requirements:

- React v16.8.0+

- React Router v5.1.0+

## Usage

```jsx
import React, { Component } from 'react'

import LightMenu from 'react-light-menu'

class Example extends Component {
  render () {
    return (
      <LightMenu items={[ { title: 'Home', to: '/' } ]} />
    )
  }
}
```

## TODO

- Move active items info into context
- Class names configuration
- Tests
- Move `react-router` part in separate library
- Next.js router support

## Development

To run examples locally, you will need to `npm link` react in `example` folder, otherwise everything will fail:

```bash
cd example
npm link ../node_modules/react
```

## Thanks

H.Alper Tuna - [react-metismenu](https://github.com/alpertuna/react-metismenu), where I took some things like DOM structure and default style

## License

MIT © [Andrey Viktorov](https://github.com/4ndv)
