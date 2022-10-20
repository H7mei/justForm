import { ThreeBody } from '@uiball/loaders'
import React from 'react'
import { Center } from '../Styled'

function Loading() {
  return (
    <Center>
      <ThreeBody size={35} speed={1.1} color="hotpink" />
    </Center>
  )
}

export default Loading
