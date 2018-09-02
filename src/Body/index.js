import React from 'react'

import { CreatureBody, Face } from './style'

const Body = ({children}) => {
  return (
    <CreatureBody>
      <Face>
        {children}
      </Face>
    </CreatureBody>
  )
}

export default Body
