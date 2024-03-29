import {
    Stack,
    useColorModeValue,
  } from '@chakra-ui/react';
import { NAV_ITEMS } from './NAV_ITEMS';
import MobileNavItem from './MobileNavItem';

const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ lg: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };

  export default MobileNav;