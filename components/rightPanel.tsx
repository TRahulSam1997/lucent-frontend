import React from 'react'
import { BuildSection } from './sections/buildSection'

export const RightPanel = () => {
  return (
    <div>
        <h1>Right Panel</h1>
        <div style={{ backgroundColor: '#2F3047' }}>
          <BuildSection />
        </div>
    </div>
  )
}
