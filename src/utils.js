import hash from 'hash-sum'

export const omit = (obj, blacklist) => {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key]) => !blacklist.includes(key))
  )
}

export const hashItem = (item) => {
  // Hash should not be changed if submenu items changes, so ignore `items`
  // Also ignore `hash` field, but don't ignore `parentHashes`
  return hash(omit(item, ['items', 'hash']))
}

export const hashItems = (items, parentHashes = []) => {
  for (const item of items) {
    item.hash = hashItem(item)

    item.parentHashes = [...parentHashes]

    if (Array.isArray(item.items)) {
      item.items = hashItems(
        item.items, [item.hash, ...item.parentHashes]
      )
    }
  }

  return items
}

export const mapPathsToHashes = (items) => {
  const mapOfPaths = {}

  for (const item of items) {
    if (Array.isArray(item.items)) {
      Object.assign(mapOfPaths, mapPathsToHashes(item.items))
    }

    const { to } = item
    if (!to) continue

    mapOfPaths[to] = [item.hash, ...item.parentHashes]
  }

  return mapOfPaths
}

export const findActiveItems = (pathsToHashes, pathname, highlightNested) => {
  const sortedKeys = Object.keys(pathsToHashes).sort((a, b) => b.length - a.length)

  let bestMatchRank = Number.MAX_VALUE
  let bestMatchHashes = []

  for (const key of sortedKeys) {
    // If keys is longer than selected path - ignore it
    if (key.length > pathname.length) continue

    if (!highlightNested) {
      // Search for exact match if we don't highlight parents on nested routes
      if (key === pathname) {
        bestMatchHashes = pathsToHashes[key]
        break
      }
    } else {
      // If path does not start with the key - we are not interested
      if (!pathname.startsWith(key)) continue

      // The we need rank to be as log as possible (the lower is rank - the longer is key)
      const rank = pathname.length - key.length

      if (rank < bestMatchRank) {
        bestMatchRank = rank
        bestMatchHashes = pathsToHashes[key]
      }
    }
  }

  return bestMatchHashes
}
