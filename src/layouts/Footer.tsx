import React from 'react'
import { Flex, Heading, UnorderedList, ListItem, Stack, Button, Input, Textarea, Divider, Icon } from '@chakra-ui/react'
import Image from '@/views/Customs/Image'
 import {  AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <Flex flexDirection={{base: 'column', lg: 'row'}} justifyContent={'space-between'} py={6} px={10}> 
        <Flex px={16} flexDirection={'column'} justifyContent={'center'} alignItems='center'>
        <Image
            src='/assets/home/logo.webp'
            alt='Dan Abramov'
            width={167}
            height={91}
              />

              <Divider my={2} />

<Flex>
            <a
              target='_blank'
              href={'https://www.instagram.com/resitrend_co/'}
              >
              <Icon
              color={'brand.secondary'}
              as={AiOutlineInstagram}
              width={8}
              height={8}
              />
            </a>

            <a
              target='_blank'
              href={'https://www.linkedin.com/company/resitrend/'}
            >
              <Icon
              ml={4}
              color={'brand.secondary'}
              as={AiFillLinkedin}
              width={8}
              height={8}
            />
            </a>
</Flex>
        </Flex>

        <Stack>
            <Heading size={'md'}>Company</Heading>

            <Flex pt={4} wrap={'wrap'} justifyContent={'space-between'}>
            <UnorderedList>
                {locations.slice(0, 7).map((loc) => (
                    <ListItem py={.5} _hover={{color: 'brand.primary'}} cursor={'pointer'} key={loc}>{loc}</ListItem>
                    ))}
              </UnorderedList>
            </Flex>
        </Stack>

        <Stack>
            <Heading size={'md'}>Product</Heading>

            <Flex pt={4} wrap={'wrap'} justifyContent={'space-between'}>
            <UnorderedList>
                {locations.slice(8).map((loc) => (
                    <ListItem  py={.5} _hover={{color: 'brand.primary'}} cursor={'pointer'} key={loc}>{loc}</ListItem>
                    ))}
              </UnorderedList>
            </Flex>
        </Stack>

        <Stack pt={6}>
         <Input placeholder='Your Email' />

         <Textarea placeholder='Enter Your Message...' />

         <Button 
         bg='brand.primary' 
         color='white'
         _hover={{
            bg: 'red.700',
         }} 
         >Send</Button>
        </Stack>
    </Flex>
  )
}

export default Footer

const locations = [
     '(111) 123-4567',
     'support@resitrend.com',
     'About',
     'News',
     'Careers',
     'Social Impact',
     'Write For US',
     'Pricing',
     'Sale Process',
     'Los Angeles, California',
     'Jacksonville, Florida',
     'Financial Tools',
     'Communication',
     'Project Management',
     'Additional Services',

    //  'Chattanooga, Tennessee',
    //  'Knoxville, Tennessee',
    //  'Cincinnati, Ohio',
    //  'Columbus, Ohio',
    //  'Kansas'
]