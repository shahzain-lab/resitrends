import React from 'react'
import { Flex, Heading, Text, Stack, Button, SimpleGrid, useMediaQuery } from '@chakra-ui/react'
import Image from '@/views/Customs/Image'
import Link from 'next/link'

const Header = () => {
  const [isLargerThan800] = useMediaQuery('(max-width: 960px)')
  const [isLargerThan2100] = useMediaQuery('(min-width: 2100px)')

  return (
    <SimpleGrid columns={{base: 1, lg: 2}}>
        <Stack pl={{base: 4, lg: 10, xl: 20}} pt={20}>
           <Heading as='h2' size='2xl'>PROPERTY SERVICES, <br /> 

           <span style={{ color: '#cd121b' }}>SIMPLIFIED.</span> 
           </Heading>

           <Text pt={{base: 4, lg: 10}} lineHeight={8}>The Resitrend platform connects property owners <br />

            to a nationwide network of vetted professionals <br />

             for renovation, maintenance and turn services. <br /> 
             At scale. Every time.</Text>

             <Link href={'/dashboard'}>
                <Button
                  bg={'#cd121b'}
                  color='white' 
                  _hover={{
                    bg: 'red.700',
                  }}>Become a Resitrend pro</Button>
             </Link>
        </Stack>

        <Stack mt={16} h={{base: '70vh', lg: '70vh', xl: '90vh'}} position={'relative'}>
          <Stack h={'90vh'}>
            <Stack 
             position={'absolute'}
             right={0}
             bottom={0}
              clipPath={'circle(20% at 65% 50%)'}
              bg={'#fa15202e'}
              w={'100%'}
              h={'100%'}
             ></Stack>

            <Stack 
              clipPath={{
                base: 'circle(15% at 20% 55%)',
                md: 'circle(15% at 45% 20%)',
                lg: 'circle(15% at 25% 55%)',
                xl: 'circle(15% at 20% 35%)',
                '2xl': 'circle(15% at 40% 35%)',
                '3xl': 'circle(15% at 40% 35%)'
              }}
              bg={'#1c50a833'}
              w={'100%'}
              h={'100%'}
              ></Stack>
         </Stack>

            <Image 
              src="/assets/home/asese.png"
              alt="Resitrend's construction"
              width={isLargerThan800 ? 320 : isLargerThan2100 ? 620 : 420}
              height={isLargerThan800 ? 300 : isLargerThan2100 ? 620 : 420}
              position={'absolute'}
              top={0}
              right={{base: 10, md: 20, lg: '10%'}}
              boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
              borderRadius={6}
              zIndex={{base: 0, xl: 1}}
            />

            <Image 
              src="/assets/home/ideas.jpg"
              alt="Resitrend's ideas"
              width={isLargerThan2100 ? 420 : 220}
              height={isLargerThan2100 ? 350 : 170}
              position={'absolute'}
              top={{base: 240, lg: 300}}
              left={{base: 20, md: '35%',lg: 20, '2xl':55,'3xl': '20%'}}
              boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
              borderRadius={4}
              zIndex={{base: 1, xl: 0}}
            />
        </Stack>
    </SimpleGrid>
  )
}

export default Header