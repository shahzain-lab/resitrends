import { NavItem } from '@/interfaces/Navitems.interface';
import {
    Box,
    Flex,
    Text,
    Stack,
    Icon,
    Link,
    useColorModeValue,
  } from '@chakra-ui/react'; 
  import { BsArrowRight } from 'react-icons/bs'

 
 const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'brand.primary' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'brand.primary'} w={5} h={5} as={BsArrowRight} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  export default DesktopSubNav;