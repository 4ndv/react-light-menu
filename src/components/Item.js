import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { isActiveItem, arrayLast } from '../utils'

import Container from './Container'
import ItemLink from './ItemLink'

const Item = (props) => {
  const {
    icon,
    title,
    items,
    activeItems,
    hash,
    parentHashes,
    external,
    to,
    setActiveItems,
    visibleSubmenus,
    setVisibleSubmenus,
    classNameStateIcon,
    hideSubmenu,
    showSubmenu
  } = props

  const hasSubItems = items && items.length > 0

  let active = isActiveItem(activeItems, hash)
  let subMenuVisibility = [...parentHashes, hash].every(h => visibleSubmenus.includes(h))

  let hasActiveChild = null

  // Item with submenu can't be "active", only submenu can be visible
  // And it should be checked not via "active", but via "visibleSubmenus"
  if (hasSubItems && active) {
    if (arrayLast(activeItems) !== hash) {
      active = false
      hasActiveChild = true
    }
  }

  const activateMe = (item, subMenuVisibility, hasSubItems) => {
    return (e) => {
      if (hasSubItems) {
        e.preventDefault()

        if (subMenuVisibility) {
          hideSubmenu(hash)
        } else {
          showSubmenu(parentHashes, hash)
        }

        return false
      }

      if (item.external) {
        return false
      }

      // Reset visible submenus on item select
      setVisibleSubmenus(new Set(item.parentHashes))
      setActiveItems([...parentHashes, item.hash])
    }
  }

  return (
    <li
      className={classnames(
        'light-menu-item',
        active && 'active'
      )}
    >
      <ItemLink
        className='light-menu-link'
        active={active}
        hash={hash}
        to={to}
        title={title}
        external={external}
        hasActiveChild={hasActiveChild}
        hasSubItems={hasSubItems}
        activateMe={activateMe(props, subMenuVisibility, hasSubItems)}
      >
        <i className={classnames('light-menu-icon', icon)} />
        {title}
        {hasSubItems && <i
          className={classnames(
            'light-menu-state-icon',
            subMenuVisibility
              ? [classNameStateIcon, 'rotate-minus-90']
              : classNameStateIcon
          )}
        />}
      </ItemLink>
      {hasSubItems && <Container
        items={items}
        visible={subMenuVisibility}
        activeItems={activeItems}
        setActiveItems={setActiveItems}
        setVisibleSubmenus={setVisibleSubmenus}
        classNameStateIcon={classNameStateIcon}
        visibleSubmenus={visibleSubmenus}
        hideSubmenu={hideSubmenu}
        showSubmenu={showSubmenu}
      />}
    </li>
  )
}

Item.propTypes = {
  classNameStateIcon: PropTypes.string,
  hideSubmenu: PropTypes.func,
  showSubmenu: PropTypes.func,
  setVisibleSubmenus: PropTypes.func,
  visibleSubmenus: PropTypes.array,
  hash: PropTypes.string.isRequired,
  parentHashes: PropTypes.array.isRequired,
  setActiveItems: PropTypes.func.isRequired,
  activeItems: PropTypes.array.isRequired,
  icon: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
  external: PropTypes.bool,
  to: PropTypes.string
}

Item.defaultProps = {
}

export default Item
