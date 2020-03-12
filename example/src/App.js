import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LightMenu from 'react-light-menu'

export default class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <LightMenu items={[ { hello: 'world' } ]} />
        </BrowserRouter>
      </div>
    )
  }
}
