import React from 'react'

export function Error({ error }) {
  if (!error) return null

  return <p className="error">{error}</p>
}
