import React from 'react'
import {
    Box,
    Flex,
    Button,
    Stack,
    Collapse,
    useColorModeValue,
    useDisclosure,
    useMediaQuery,
    IconButton,
    SimpleGrid
  } from '@chakra-ui/react';
import DesktopNav from '@/views/Navbar/DesktopNav';
import MobileNav from '@/views/Navbar/MobileNav';
import Image from '@/views/Customs/Image';
import { HiOutlineMenuAlt2 } from 'react-icons/hi'
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link';

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();
    const [isLargerThan960] = useMediaQuery('(max-width: 960px)')

    return (
      <Stack>
        <SimpleGrid
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          gap={4}
          alignItems={'end'}
          columns={{base: 3, lg: 2}}
          >
            <IconButton
            justifySelf={'baseline'}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
              onClick={onToggle}
              icon={
                isOpen ? <RxCross1 /> : <HiOutlineMenuAlt2 />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />

          <Flex ml={-15} flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
              <Image 
               src='/assets/home/logo.webp'
               alt='Dan Abramov'
               width={167}
               height={isLargerThan960 ? 65 : 91}
               />
  
            <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            justify={'flex-end'}
            direction={'row'}
            pb={2}
            spacing={6}>
                <Button
                  as={'a'}
                  display={{ base: 'none', lg: 'flex' }}
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={'link'}
                  href={'/pages/login'}>
                  Sign In
                </Button>

            <Button
              as={'a'}
              display={{ base: 'flex', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.primary'}
              href={"/joinresitrend"}
              minWidth={100}
              _hover={{
                bg: 'red.700',
              }}>
                    Join Resitrend
            </Button>
          </Stack>
        </SimpleGrid>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Stack>
    );
}

export default Navbar