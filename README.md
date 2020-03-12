# react-router-light-menu

Modern and easy to use menu component for react-router. Heavily inspired by [react-metismenu](https://github.com/alpertuna/react-metismenu)

[![NPM](https://img.shields.io/npm/v/react-router-light-menu.svg)](https://www.npmjs.com/package/react-router-light-menu) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-router-light-menu
```

Or using yarn:

```bash
yarn add react-router-light-menu
```

## Requirements

Because light-menu written completely using hooks, which is a feature of never react and react-router, here's some requirements:

- React v16.8.0+

- React Router v5.0.0+

## Usage

```jsx
import React, { Component } from 'react'

import LightMenu from 'react-router-light-menu'

class Example extends Component {
  render () {
    return (
      <LightMenu items={[ { title: 'Home', to: '/' } ]} />
    )
  }
}
```

## Thanks

H.Alper Tuna - [react-metismenu](https://github.com/alpertuna/react-metismenu), where I took some things like DOM structure and theming

## License

MIT © [Andrey Viktorov](https://github.com/4ndv)
