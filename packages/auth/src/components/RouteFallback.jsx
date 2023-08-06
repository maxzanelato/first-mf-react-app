import React from 'react'

export const RouteFallback = () => {
  return (
    <div
        style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}
    >
        <div>Carregando...</div>
    </div>
  )
}
