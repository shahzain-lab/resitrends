import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    HStack,
    Stack,
    Heading,
    useColorModeValue,
    Select,
  } from '@chakra-ui/react';
  
  export default function PersonalDetails() {
    const jobType = [
      'Semi custom new homes',
      'Fully custom new homes',
      'Production homes',
      'Modular homes',
      'Multi-family homes',
      'Whole-home remodels for a client',
      'Home additions',
      'Kitchen/Bath/Basement remodels',
      'Insurance restoration',
      'Specialty trade/sub-contracted work',
      'Commercial (New construction and/or renovation)',
      'Pools/Outdoor Living',
      'Renovate/Resell',
      'Other'
    ]

    const revenue = [
      'Semi custom new homes',
      'Fully custom new homes',
      'Production homes',
      'Modular homes',
      'Multi-family homes',
      'Whole-home remodels for a client',
      'Home additions',
      'Kitchen/Bath/Basement remodels',
      'Insurance restoration',
      'Specialty trade/sub-contracted work',
      'Commercial (New construction and/or renovation)',
      'Pools/Outdoor Living',
      'Renovate/Resell',
      'Other'
    ]
  
    return (
      <Flex
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}
        p={{base: 2, lg: 4}}
        borderRadius={'10px'}
        >
            <Stack width="100%">
              <Heading size={'md'}>Personal Information</Heading>

              <HStack>
                  <FormControl id="firstName" isRequired>
                    <FormLabel fontSize={'14px'}>First Name</FormLabel>

                    <Input type="text" />
                  </FormControl>

                  <FormControl id="lastName">
                    <FormLabel fontSize={'14px'}>Last Name</FormLabel>

                    <Input type="text" />
                  </FormControl>
              </HStack>

              <FormControl id="email" isRequired>
                <FormLabel fontSize={'14px'}>Email address</FormLabel>

                <Input type="email" />
              </FormControl>

              <FormControl id="number" isRequired>
                <FormLabel fontSize={'14px'}>Phone</FormLabel>

                <Input type="number" />
              </FormControl>

              <Heading size={'md'}>Business Information</Heading>

              <FormControl id="businessName" isRequired>
                <FormLabel fontSize={'14px'}>Business Name</FormLabel>

                <Input type="text" />
              </FormControl>

              <FormControl id="businessWebsite">
                <FormLabel fontSize={'14px'}>Website</FormLabel>

                <Input type="text" />
              </FormControl>

              <FormControl id="businessWebsite" isRequired>
                <FormLabel fontSize={'14px'}>Job Type</FormLabel>

              <Select placeholder='Select Job Type'>
                {jobType.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Select>
              </FormControl>

              <FormControl id="businessWebsite" isRequired>
                <FormLabel fontSize={'14px'}>Estimated Annual Revenue</FormLabel>

              <Select placeholder="Select Annual Revenue">
                {revenue.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </Select>
              </FormControl>

              <Heading size={'md'}>Business Address</Heading>

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

                  <FormControl id="timezone" isRequired>
                  <FormLabel fontSize={'14px'}>State</FormLabel>

                  <Select placeholder="Select timezone">
                    {timezones.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </Select>
                  </FormControl>
            </Stack>
      </Flex>
    );
  }

  const timezones = [
    'Newfoundland Standard Time [GMT-3.5]',
    'Atlantic Standard Time [GMT-4]',
    'Eastern Standard Time [GMT-5]',
    'Central Standard Time [GMT-6]',
    'Mountain Standard Time [GMT-7]',
    'Pacific Standard Time [GMT-8]',
    'Alaskan Standard Time [GMT-9]',
    'Australian Central Daylight Time [GMT+9.5]',
    'Brisbane [GMT+10]',
    'Hawaiian Standard Time [GMT-10]',
    'W. Australia Standard Time [GMT+8]',
    'New Zealand Standard Time [GMT+12]',
    'Canberra, Melbourne, Sydney [GMT+10]',
    'E. European Time (EET) [GMT+2]',
    'Ghana Standard Time [GMT+0]',
    'W. Europe Standard Time [GMT+0]',
    'Egypt Standard Time [GMT+2]',
    'E. South America Standard Time [GMT-3]',
    'GMT Standard Time [GMT+0]',
    'Central European Standard Time [GMT+1]',
    'S.A. Pacific Standard Time (COT) [GMT-5]',
    'Nigeria Standard Time [GMT+1]',
    'Philippine Time (PHT) [GMT+8]',
    'Indonesia Standard Time [GMT+8]',
    'Puerto Rico Standard Time [GMT-4]',
  ]

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
