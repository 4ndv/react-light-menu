import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import LightMenu from 'react-light-menu'

const items = [
  {
    title: 'Home',
    to: '/'
  },
  {
    title: 'Menu',
    to: '/menu',
    items: [
      {
        title: 'Submenu Item 1',
        items: [
          {
            title: 'Submenu SubItem 1',
            to: '/menu/1/1'
          },
          {
            title: 'Submenu SubItem 1',
            to: '/menu/1/2'
          }
        ]
      },
      {
        title: 'Submenu Item 2',
        to: '/menu/2'
      }
    ]
  }
]

export default class App extends Component {
  render () {
    return (
      <div>
        <BrowserRouter>
          <LightMenu items={items} debug={true} />
        </BrowserRouter>
      </div>
    )
  }
}
