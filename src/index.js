import React, { useEffect, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useLocation, Link } from 'react-router-dom'
import { hashItems, mapPathsToHashes, findActiveItems } from './utils'

import './styles/default.scss'

const LightMenu = (props) => {
  const { items, highlightNested, debug } = props
  const { pathname } = useLocation()
  const [activeItems, setActiveItems] = useState(new Set())

  // Memoing hashes and parents to use when highlighting active items
  const hashedItems = useMemo(() => hashItems(items), [items])

  // Looks like we can depend on another memos, so...
  const pathsToHashes = useMemo(() => mapPathsToHashes(hashedItems), [hashedItems])

  useEffect(() => {
    setActiveItems(new Set(
      findActiveItems(pathsToHashes, pathname, highlightNested)
    ))
  }, [highlightNested, pathsToHashes, pathname])

  // Debug stuff
  useEffect(() => {
    console.log(pathname)
    console.log(activeItems)
    console.log(hashedItems)
    console.log(pathsToHashes)
  }, [pathname, activeItems, hashedItems, pathsToHashes, debug])

  return (
    <div>
      Example Component: {JSON.stringify(items)}
      <Link to='/' as={activeItems ? '/a' : '/b'} />
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
  items: PropTypes.arrayOf(PropTypes.shape(itemShape)).isRequired,
  classNameNamespace: PropTypes.string,
  highlightNested: PropTypes.bool,
  debug: PropTypes.bool
}

LightMenu.defaultProps = {
  classNameNamespace: 'light-menu',
  highlightNested: true,
  debug: false
}

export default LightMenu
