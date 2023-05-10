import Header from '@/templates/Header'
import Services from '@/templates/Services'
import { Stack } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  return (
    <Stack>
        <Header />

        <Services />
    </Stack>
  )
}

export default index