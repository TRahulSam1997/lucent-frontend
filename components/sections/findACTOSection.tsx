import React from 'react'
import { SubscribeForm } from './subscribeForm'

export const FindACTOSection = () => {
  return (
    <div>
        <img 
            src="https://res.cloudinary.com/dkd4xa60a/image/upload/v1676799850/Lucent/20945347_1_d3eyv2.png" 
            alt="Programmer flat image" 
            title="Source: Slack (https://Slack.com)"
        />
        <h1>
            Find a CTO
        </h1>
        <h3>
            Work with potential candidates from our list before making any commitments.
        </h3>
        <SubscribeForm />
    </div>
  )
}
