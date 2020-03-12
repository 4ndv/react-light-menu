import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LightMenu from 'react-router-light-menu'

export default class App extends Component {
  render () {
    return (
      <div>
        <LightMenu items={[ { hello: 'world' } ]} />
      </div>
    )
  }
}
