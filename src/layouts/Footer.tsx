import React from 'react'
import { Flex, Heading, UnorderedList, ListItem, Stack, Button, Input, Textarea } from '@chakra-ui/react'
import Image from '@/views/Customs/Image'


const Footer = () => {
  return (
    <Flex justifyContent={'space-between'} py={6} px={10}> 
        <Flex px={16} alignItems='center'>
        <Image
            src='/assets/home/logo.webp'
            alt='Dan Abramov'
            width={167}
            height={91}
              />
        </Flex>
        <Stack>
            <Heading>Our Locations</Heading>
            <Flex pt={4} justifyContent={'space-between'}>
            <UnorderedList>
                {locations.slice(0, 7).map((loc) => (
                    <ListItem key={loc}>{loc}</ListItem>
                    ))}
              </UnorderedList>
              <UnorderedList px={20}>
                {locations.slice(7, 14).map((loc) => (
                    <ListItem key={loc}>{loc}</ListItem>
                ))}
                </UnorderedList>
              <UnorderedList>
                {locations.slice(14).map((loc) => (
                    <ListItem key={loc}>{loc}</ListItem>
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
     'Las Vegas, Nevada',
     'Henderson, Nevada',
     'Salt Lake City, Utah',
     'Northern, Utah',
     'Dallas, Texas',
     'Austin, Texas',
     'San Antonio, Texas',
     'San Diego, California',
     'Riverside, California',
     'Los Angeles, California',
     'Jacksonville, Florida',
     'Tampa, Florida',
     'Orlando, Florida',
     'Phoenix, Arizona',
     'Nashville, Tennessee',
     'Chattanooga, Tennessee',
     'Knoxville, Tennessee',
     'Cincinnati, Ohio',
     'Columbus, Ohio',
     'Kansas'
]