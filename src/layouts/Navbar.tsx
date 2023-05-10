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

          // align={'end'}
          alignItems={'end'}
          columns={{base: 3, lg: 2}}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', lg: 'none' }}
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

          <Flex flex={{ base: 1 }} justify={{ base: 'center', lg: 'start' }}>
              <Image 
               src='/assets/home/logo.webp'
               alt='Dan Abramov'
               width={167}
               height={isLargerThan960 ? 78 : 91}
               />
  
            <Flex display={{ base: 'none', lg: 'flex' }} ml={10}>
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
                  display={{ base: 'none', lg: 'flex' }}
                  fontSize={'sm'}
                  fontWeight={400}
                  variant={'link'}
                  href={'#'}>
              <Link href={'/pages/login'}>
                  Sign In
              </Link>
                </Button>

            <Button
              as={'a'}
              display={{ base: 'flex', lg: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'brand.primary'}
              href={'#'}
              _hover={{
                bg: 'red.700',
              }}>
                <Link href="/joinresitrend">
                    Join Resitrend
                </Link>
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