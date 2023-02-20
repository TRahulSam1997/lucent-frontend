import React from 'react'
import { BuildSection } from './sections/buildSection'
import { ConnectSection } from './sections/connectSection'
import { FindACTOSection } from './sections/findACTOSection'
import { LearnSection } from './sections/learnSection'

export const RightPanel = () => {
  return (
    <div>
        <h1>Right Panel</h1>
        <div>
          <div style={{ display: 'inline-block', backgroundColor: '#2F3047' }}>
            <BuildSection />
          </div>
          <ConnectSection />
          <FindACTOSection />
          <LearnSection />
        </div>
    </div>
  )
}
