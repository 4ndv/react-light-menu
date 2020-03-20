import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Item from './Item'

const Container = (props) => {
  const {
    visible,
    items,
    activeItems,
    setActiveItems,
    hideSubmenu,
    showSubmenu,
    visibleSubmenus,
    setVisibleSubmenus,
    classNameStateIcon
  } = props

  return (
    <ul
      className={classnames(
        'light-menu-container',
        visible && 'visible'
      )}
    >
      {items.map((item) => (
        <Item
          key={item.hash}
          {...item}
          parentHashes={item.parentHashes}
          activeItems={activeItems}
          setActiveItems={setActiveItems}
          visibleSubmenus={visibleSubmenus}
          setVisibleSubmenus={setVisibleSubmenus}
          classNameStateIcon={classNameStateIcon}
          hideSubmenu={hideSubmenu}
          showSubmenu={showSubmenu} />
      ))}
    </ul>
  )
}

Container.propTypes = {
  classNameStateIcon: PropTypes.string,
  hideSubmenu: PropTypes.func.isRequired,
  showSubmenu: PropTypes.func.isRequired,
  visibleSubmenus: PropTypes.array.isRequired,
  setVisibleSubmenus: PropTypes.func.isRequired,
  setActiveItems: PropTypes.func.isRequired,
  activeItems: PropTypes.array.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool.isRequired
}

Container.defaultProps = {
  visible: false
}

export default Container
