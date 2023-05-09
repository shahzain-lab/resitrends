import {
    Box,
    Icon,
    Stack,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
  } from '@chakra-ui/react';
import { NAV_ITEMS } from './NAV_ITEMS';
import { NavItem } from '@/interfaces/Navitems.interface';
import DesktopSubNav from './DesktopSubNav';
import { RxCaretDown } from 'react-icons/rx'


const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
      <Stack direction={'row'} pb={1} alignItems={'end'} spacing={4}>
        {NAV_ITEMS.map((navItem: NavItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  display={'flex'}
                  alignItems={'center'}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}

                  {navItem.children && (
                    <Icon
                      as={RxCaretDown}
                      transition={'all .25s ease-in-out'}
                      w={6}
                      h={6}
                    />
                  )}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'}>
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
export default DesktopNav;