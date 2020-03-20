import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { hashItems, mapPathsToHashes, findActiveItems } from './utils'

import Container from './components/Container'

import './styles/default.scss'

const LightMenu = (props) => {
  const { items, highlightNested, debug, className } = props
  const { pathname } = useLocation()
  const [activeItems, setActiveItems] = useState([])
  // Wrapper Set in array because otherwise Set will not be working in the
  const [visibleSubmenus, setVisibleSubmenus] = useState([])

  // Memoing hashes and parents to use when highlighting active items
  const hashedItems = useMemo(() => hashItems(items), [items])

  // Looks like we can depend on another memos, so...
  const pathsToHashes = useMemo(() => mapPathsToHashes(hashedItems), [hashedItems])

  useEffect(() => {
    const foundActiveItems = findActiveItems(
      pathsToHashes,
      pathname,
      highlightNested
    )

    setActiveItems(foundActiveItems)

    if (foundActiveItems.length > 1) {
      // If last is active and there is more than one - set everything else as an active
      setVisibleSubmenus(foundActiveItems.slice(0, -1))
    }
  }, [highlightNested, pathsToHashes, pathname])

  // Debug stuff
  useEffect(() => {
    if (!debug) return

    console.log(pathname)
    console.log(activeItems)
    console.log(hashedItems)
    console.log(pathsToHashes)
  }, [pathname, activeItems, hashedItems, pathsToHashes, debug])

  const hideSubmenu = (hash) => {
    setVisibleSubmenus(visibleSubmenus.filter(h => h !== hash))
  }

  const showSubmenu = (parentHashes, hash) => {
    setVisibleSubmenus([...parentHashes, hash])
  }

  return (
    <div className={className}>
      <Container
        items={items}
        setActiveItems={setActiveItems}
        activeItems={activeItems}
        visibleSubmenus={visibleSubmenus}
        setVisibleSubmenus={setVisibleSubmenus}
        hideSubmenu={hideSubmenu}
        showSubmenu={showSubmenu} />
    </div>
  )
}

const itemShape = {
  icon: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
  uniq: PropTypes.string,
  external: PropTypes.bool
}

// Recursive PropTypes for children items
itemShape.items = PropTypes.arrayOf(PropTypes.shape(itemShape))

LightMenu.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
  highlightNested: PropTypes.bool,
  debug: PropTypes.bool
}

LightMenu.defaultProps = {
  className: 'light-menu',
  highlightNested: true,
  debug: false
}

export default LightMenu
