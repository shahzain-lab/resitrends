import React from 'react'
import {
    Box,
    Flex,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    IconButton
  } from '@chakra-ui/react';
import DesktopNav from '@/views/Navbar/DesktopNav';
import MobileNav from '@/views/Navbar/MobileNav';
import Image from '@/views/Customs/Image';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'end'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <RxCross1 /> : <HiOutlineMenuAlt2 />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>

          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
              <Image 
               src='/assets/home/logo.webp'
               alt='Dan Abramov'
               width={167}
               height={91}
               />
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack

            // flex={{ base: 0, md: 1 }}
            justify={'flex-end'}
            direction={'row'}
            pb={2}
            spacing={6}>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'flex' }}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}>
              Sign In
            </Button>

            <Button
              as={'a'}
              display={{ base: 'flex', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.primary'}
              href={'#'}
              _hover={{
                bg: 'red.700',
              }}>
              Join Resitrend
            </Button>
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
}

export default Navbar