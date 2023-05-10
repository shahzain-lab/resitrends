import MultiStepper from '@/templates/stepper'
import Image from '@/views/Customs/Image'
import { Center, Flex } from '@chakra-ui/react'
import React from 'react'

const index = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
        <Image
            src="/assets/home/logo.webp"
            alt="Resitrends dashboard"
            width={200}
            height={106}
          />

        <MultiStepper variant='circles' />
    </Flex>
  )
}

export default index