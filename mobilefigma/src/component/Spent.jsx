import { Flex, Box, Heading, Container, Stack, Skeleton } from '@chakra-ui/react';
import { HiDotsHorizontal } from "react-icons/hi";
import React from 'react'

const Spent = () => {
  return (
<Stack direction={'row'}>
      <Flex
      w={'196px'}
      h={'31px'}
      ml={'30px'}
      mt={'81px'}
      >
<Heading as={'h2'}
w={'83px'}
fontSize={'16px'}
lineHeight={'30.5px'}
fontWeight={400}
fontFamily={'Circular Std'}
letterSpacing={'-0.5%'}
color={'#707480'}
>Last Month</Heading>

<Heading as={'h2'}
w={'83px'}
ml={'30px'}
fontSize={'16px'}
lineHeight={'30.5px'}
fontWeight={400}
fontFamily={'Circular Std'}
letterSpacing={'-0.5%'}
color={'#0466C8'}
>This Month</Heading>
      </Flex>

<Box 
w={'30px'}
h={'16px'}
mt={'84px'}
ml={'95px'}
>
    <Box 
    w={'13px'}
    h={'3px'}
    mt={'7px'}
    ml={'9px'}
    >
    <HiDotsHorizontal/>
    </Box>
</Box>
</Stack>


    
  )
}

export default Spent
