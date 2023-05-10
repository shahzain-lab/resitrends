import React from 'react'
import {
    Flex,
    Stack,
    Heading,
    useColorModeValue,
    Divider,
    Box,
    Checkbox,
    Text
  } from '@chakra-ui/react';

const Review = () => {
  return (
    <>
    <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
    p={4}
    borderRadius={'10px'}
    >
        <Stack direction={'column'} width="100%">
          <Box my={4}>
            <Heading size={'md'}>Business Details</Heading>

            <Flex py={4} justifyContent={'space-between'}>
                <Text>Name</Text>

                <Text>John Doe</Text>
            </Flex>

            <Divider />

            <Flex py={4} justifyContent={'space-between'}>
                <Text>Company</Text>

                <Text>Resitrend</Text>
            </Flex>

            <Divider />

            <Flex py={4} justifyContent={'space-between'}>
                <Text>Address</Text>

                <Text>123 , Alaska, United State</Text>
            </Flex>

            <Divider />

            <Flex py={4} justifyContent={'space-between'}>
                <Text>Email</Text>

                <Text>Example@company.com</Text>
            </Flex>

            <Divider />

            <Flex py={4} justifyContent={'space-between'}>
                <Text>Phone</Text>

                <Text>+1-202-555-0180</Text>
            </Flex>
          </Box>
        </Stack>
  </Flex>

  <Flex
    align={'center'}
    justify={'center'}
    bg={useColorModeValue('gray.50', 'gray.800')}
    p={4}
    borderRadius={'10px'}
    mt={4}
    >
      <Stack width="100%">
      <Heading size={'md'}>Review Pricing</Heading>

      <Flex py={4} justifyContent={'space-between'}>
                <Text>Plan</Text>

                <Text>Basic</Text>
         </Flex>

       <Divider />

      <Flex py={4} justifyContent={'space-between'}>
                <Text>Pricing</Text>

                <Text>$99</Text>
         </Flex>

       <Divider />

       <Checkbox mt={6}>I Agree to Buildertrend Terms & Conditions *</Checkbox>

       <Checkbox>I Agree to Buildertrend Privacy Policy *</Checkbox>
      </Stack>
    </Flex>
</>
  )
}

export default Review