import React from 'react'
import { InProgressCube } from '../icons/inProgressCube'

export const LearnSection = () => {
  return (
    <div>
        <div>
            <h3>Learn</h3>
            <p>Gain a comprehensive understanding of startup engineering with structured courses and mentorship.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
            <InProgressCube />
            <div>
                <h3>In Progress</h3>
                <p>Let us know if you're in <u>joining</u> as a contributor.</p>
            </div>
        </div>
    </div>
  )
}
