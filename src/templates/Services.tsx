import React from 'react'

// chakra-ui
import { Center, Stack, Heading } from '@chakra-ui/react'
import { SimpleGrid, Box, Text, Icon, Flex } from '@chakra-ui/react'
import { MdOutlineFilterCenterFocus } from 'react-icons/md'
import { AiFillDatabase, AiFillHourglass, AiFillSliders } from 'react-icons/ai'
import Image from '@/views/Customs/Image'
import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'


const Services = () => {
  return (
    <Stack py={10}>
        <Center display={'flex'} flexDirection='column'>
        <Heading pb={16}>
           Everything you need to get ahead
        </Heading>

        <SimpleGrid mb={24} p={6} columns={2} gap={6}>
            <Box 
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}
            >
                <Image
                  src={'/assets/home/feat-1.jpg'}
                  alt="feature 1"
                  width={400}
                  height={300}
                  borderRadius={'10px'}
                  boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
                />

                <Image
                  src={'/assets/home/4156512.png'}
                  alt="mockup"
                  position='absolute'
                  right={20}
                  width={200}
                  height={150}
                  boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
                />
            </Box>

            <Box>
                {features.slice(0, 2).map((feat, i) => (
                    <Flex 
                    key={i}
                        p={2}
                        alignItems={'center'}
                        my={10}
                    >
                        <Icon
                            as={i===0?MdOutlineFilterCenterFocus:AiFillDatabase}
                            transition={'all .25s ease-in-out'}
                            w={14}
                            h={14}
                            mr={2}
                            borderRadius={'50%'}
                            border={'2px solid #cd121b'}
                            p={2}
                            color={'brand.primary'}
                        />

                        <div>
                            <Heading pb={.5} size={'md'}>{feat.title}</Heading>

                            <Text size={'sm'} noOfLines={3}>{feat.desc}</Text>

                            <Link href={'#'} style={{display: 'flex', alignItems:'center', color: '#cd121b', fontWeight: 'bold'}}>Learn More 
                            <Icon
                            as={BsArrowRight}
                            w={6}
                            h={6}
                            mt={1}
                            ml={1}
                            color={'brand.primary'}

                        />
                            </Link>
                        </div>
                    </Flex>
                ))}
            </Box>
        </SimpleGrid>

        <SimpleGrid p={6} columns={2} gap={6}>
            <Box pl={10}>
                {features.slice(2).map((feat, i) => (
                    <Flex 
                    key={i}
                        p={2}
                        alignItems={'center'}
                        my={10}
                    >
                        <Icon
                            as={i===0?AiFillHourglass:AiFillSliders}
                            transition={'all .25s ease-in-out'}
                            w={14}
                            h={14}
                            mr={2}
                            borderRadius={'50%'}
                            border={'2px solid #cd121b'}
                            p={2}
                            color={'brand.primary'}
                        />

                        <div>
                            <Heading pb={.5} size={'md'}>{feat.title}</Heading>

                            <Text size={'sm'} noOfLines={3}>{feat.desc}</Text>

                            <Link href={'#'} style={{display: 'flex', alignItems:'center', color: '#cd121b', fontWeight: 'bold'}}>Learn More 
                            <Icon
                            as={BsArrowRight}
                            w={6}
                            h={6}
                            mt={1}
                            ml={1}
                            color={'brand.primary'}

                        />
                            </Link>
                        </div>
                    </Flex>
                ))}
            </Box>

            <Box 
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}
            >
                <Image
                  src={'/assets/home/feat-2.jpeg'}
                  alt="feature 1"
                  width={400}
                  height={300}
                  borderRadius={'10px'}
                  boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
                />

                <Image
                  src={'/assets/home/3152837.png'}
                  alt="mockup"
                  position='absolute'
                  right={20}
                  width={200}
                  height={150}
                  boxShadow={'2px 2px 5px -1px rgba(0,0,0,0.41)'}
                />
            </Box>
        </SimpleGrid>
        </Center>
    </Stack>
  )
}

export default Services

const features = [
    {
        title: 'Bring More Leads',
        desc: 'Manage leads, land more jobs and get faster sign-ups all in one place with our construction tech.'
    },
    {
        title: 'Simplify project planning from start to finish',
        desc: 'Keep all details in order, avoid delays and run jobs smoothly from start to finish with our project management software.'
    },
    {
        title: 'Manage finances simply and precisely',
        desc: 'Buildertrend’s money-saving features allow you to track your cash flow, ensure accurate estimates and manage budgets, down to the last penny.'
    },
    {
        title: 'Run every job site efficiently',
        desc: 'Buildertrend connects your team, clients and subs so they can stay updated throughout the project.'
    }
]