import React, { useState } from 'react'
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Heading,
    useColorModeValue,
    Divider,
    Box,
    Icon,
    RadioGroup,
    Radio,
    Select,
    Text
  } from '@chakra-ui/react';

  // icons
  import { BsCreditCard2Back } from 'react-icons/bs'

  function cc_expires_format(string: string) {
    return string.replace(
        /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
      ).replace(
        /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
      ).replace(
        /^1([3-9])$/g, '01/$1' // 13 > 01/3 //UPDATED by NAVNEET
      // ).replace(
      //   /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
      ).replace(
        /^0\/|0+$/g, '0' // 0/ > 0 and 00 > 0 //UPDATED by NAVNEET
      ).replace(
        /[^\d|^]*/g, '' // To allow only digits and `/` //UPDATED by NAVNEET
      ).replace(
        /\/\//g, '/' // Prevent entering more than 1 `/`
      );
}

const Billing = () => {
    const [ccExpiry, setCcExpiry] = useState('')
    const [addressCheck, setAddressCheck] = useState('1')

  return (
    <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
    p={{base: 2, lg: 4}}
    borderRadius={'10px'}
    >
        <Stack width="100%">
          <Heading size={'md'}>Billing Information</Heading>

          <Box width={{base: '100%', lg:"50%"}} alignSelf={'center'} p={6} borderRadius={'8px'} border={'1px solid #e2e8f0'}>
            <Flex pb={4}>
                <Icon
                    as={BsCreditCard2Back}
                    transition={'all .25s ease-in-out'}
                    w={6}
                    h={6}
                    />

                    <Text pl={2}>Pay with Card</Text>
            </Flex>

          <FormControl id="Name" isRequired>
            <FormLabel fontSize={'14px'}>Name on Card</FormLabel>

            <Input placeholder="John Doe" type="text" />
          </FormControl>

          <FormControl my={4} id="number" isRequired>
            <FormLabel fontSize={'14px'}>Card Number</FormLabel>

            <Input placeholder="XXXX-XXXX-XXXX-XXXX" type="number" />
          </FormControl>

          <HStack>
              <FormControl id="expiry" isRequired>
                <FormLabel fontSize={'14px'}>Expiry Date</FormLabel>

                <Input value={ccExpiry} onChange={(e: any) => setCcExpiry(cc_expires_format(e.target.value))} placeholder="MM/YY" type="text" />
              </FormControl>

              <FormControl id="cvc" isRequired>
                <FormLabel fontSize={'14px'}>CVC</FormLabel>

                <Input placeholder="123" type="text" />
              </FormControl>
          </HStack>
         </Box>

         <Divider />

         <Heading size={'md'}>Billing Address</Heading>

         <RadioGroup onChange={setAddressCheck} value={addressCheck}>
            <Stack >
                <Radio value='1'>Same as Business Address</Radio>

                <Radio value='2'>Use a different address</Radio>
            </Stack>
            </RadioGroup>

            {addressCheck === '2' && (
                <>
                 <FormControl id="country" isRequired>
                 <FormLabel fontSize={'14px'}>Country</FormLabel>

                 <Input type="text" />
               </FormControl>

               <FormControl id="street" isRequired>
                 <FormLabel fontSize={'14px'}>Street Address</FormLabel>

                 <Input type="text" />
               </FormControl>

               <FormControl id="city" isRequired>
                 <FormLabel fontSize={'14px'}>City</FormLabel>

                 <Input type="text" />
               </FormControl>

               <HStack>
                   <FormControl id="state" isRequired>
                   <FormLabel fontSize={'14px'}>State</FormLabel>

                   <Select placeholder="Select state">
                     {states.map((type, index) => (
                       <option key={index} value={type}>{type}</option>
                     ))}
                   </Select>
                   </FormControl>

                   <FormControl id="zipCode">
                     <FormLabel fontSize={'14px'}>ZIP Code</FormLabel>

                     <Input type="text" />
                   </FormControl>
              </HStack>
                   </>
            )}

         {/* <Heading size={'md'}>Account Review</Heading>  */}
                       
        </Stack>
  </Flex>
  )
}

export default Billing


const states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ]
