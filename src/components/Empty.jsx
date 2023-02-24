import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Td,
  Tr
} from '@chakra-ui/react'
import React from 'react'

const Empty = () => {
  return (
    <Tr>
      <Td colSpan={4}>
        <Alert
          status='error'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'>
          <AlertIcon boxSize='40px' mr={0} />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Nothing Found
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Add your currency list to start the action!
          </AlertDescription>
        </Alert>
      </Td>
    </Tr>
  )
}

export default Empty
