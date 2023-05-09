import React from 'react'
import { Flex, Heading, Text, Stack, Button } from '@chakra-ui/react'
import Image from '@/views/Customs/Image'
import Link from 'next/link'

const Header = () => {
  return (
    <Flex>
        <Stack pl={20} pt={20}>
           <Heading as='h2' size='2xl'>PROPERTY SERVICES, <br /> 

           <span style={{ color: '#cd121b' }}>SIMPLIFIED.</span> 
           </Heading>

           <Text>The Resitrend platform connects property owners <br />

            to a nationwide network of vetted professionals <br />

             for renovation, maintenance and turn services. <br /> 
             At scale. Every time.</Text>

             <Link href={'/dashboard'}>
                <Button
                  bg='#cd121b'
                  color='white' 
                  _hover={{
                    bg: 'red.700',
                  }}>Become a Resitrend pro</Button>
             </Link>
        </Stack>

        <Stack h={'100vh'} w={'100%'} position={'relative'}>
          <Stack h={'100vh'} w={'100%'}>
            <Stack 
             position={'absolute'}
             right={0}
             top={0}
              clipPath={'circle(20% at 70% 50%)'}
              bg={'#fa15202e'}
              w={'100%'}
              h={'100%'}
             ></Stack>

            <Stack clipPath={'circle(15% at 50% 32%)'} bg={'#1c50a833'} w={'100%'} h={'100%'}></Stack>
         </Stack>

            <Image 
              src="/assets/home/asese.png"
              alt="Resitrend's construction"
              width={450}
              height={350}
              position={'absolute'}
              top={0}
              right={20}
              boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
              borderRadius={6}
              zIndex={1}
            />

            <Image 
              src="/assets/home/ideas.jpg"
              alt="Resitrend's ideas"
              width={220}
              height={170}
              position={'absolute'}
              top={300}
              left={'40%'}
              boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
              borderRadius={4}
            />
        </Stack>
    </Flex>
  )
}

export default Header