import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import LightMenu from 'react-light-menu'

const items = [
  {
    title: 'Home',
    to: '/',
    icon: 'fa fa-home'
  },
  {
    title: 'Menu',
    icon: 'fa fa-bars',
    items: [
      {
        title: 'Submenu Item 1',
        icon: 'fa fa-adjust',
        items: [
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-book',
            to: '/menu/1/1'
          },
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-bug',
            to: '/menu/1/2'
          }
        ]
      },
      {
        title: 'Submenu Item 2',
        icon: 'fa fa-bus',
        items: [
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-bell',
            to: '/menu/2/1'
          },
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-check',
            to: '/menu/2/2'
          }
        ]
      },
      {
        title: 'Submenu Item 3',
        icon: 'fa fa-child',
        to: '/menu/3'
      }
    ]
  },
  {
    title: 'Menu 2',
    icon: 'fa fa-area-chart',
    items: [
      {
        title: 'Submenu Item 1',
        icon: 'fa fa-cog',
        items: [
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-plane',
            to: '/menu_2/1/1'
          },
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-plug',
            to: '/menu_2/1/2'
          }
        ]
      },
      {
        title: 'Submenu Item 2',
        icon: 'fa fa-star',
        items: [
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-user',
            to: '/menu_2/2/1'
          },
          {
            title: 'Submenu SubItem 1',
            icon: 'fa fa-tag',
            to: '/menu_2/2/2'
          }
        ]
      },
      {
        title: 'Submenu Item 3',
        icon: 'fa fa-square',
        to: '/menu_2/3'
      }
    ]
  },
  {
    title: 'External',
    to: 'https://google.com',
    icon: 'fa fa-external-link',
    external: true
  }
]

export default function App (props) {
  return (
    <BrowserRouter>
      <div className='row'>
        <div className='col-lg-2 col-md-4 col-xs-12'>
          <LightMenu items={items} debug={true} />
        </div>
        <div className='col-lg-10 col-md-8 col-xs-12'>
          <div className='content'>
            <h1>react-light-menu demo</h1>
            <p>Source for this menu:</p>
            <pre>{JSON.stringify(items, null, 2)}</pre>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}
