import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const ItemLink = (props) => {
  const {
    hasActiveChild,
    hasSubItems,
    className,
    external,
    to,
    activateMe,
    active,
    children
  } = props

  let href = to

  if (hasSubItems) href = null

  return (
    hasSubItems || external
      ? (
        <a
          className={
            classnames(
              className,
              active && 'active',
              hasActiveChild && 'has-active-child'
            )
          }
          target={external ? '_blank' : undefined}
          href={href || '#'}
          onClick={activateMe}
        >
          {children}
        </a>
      )
      : (
        <Link
          className={
            classnames(
              className,
              active && 'active'
            )
          }
          to={to}
        >
          {children}
        </Link>
      )
  )
}

ItemLink.propTypes = {
  className: PropTypes.string,
  activateMe: PropTypes.func,
  active: PropTypes.bool.isRequired,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
  external: PropTypes.bool,
  hasSubItems: PropTypes.bool,
  hasActiveChild: PropTypes.bool
}

ItemLink.defaultProps = {
  //
}

export default ItemLink
