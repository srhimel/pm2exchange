import { HStack, Skeleton, SkeletonCircle, Td, Tr } from '@chakra-ui/react';
import React from 'react';

const CurrencyListSkaleton = () => {
  return (
    <>
      <Tr>
          <Td>
            <SkeletonCircle size='8' />
          </Td>
          <Td>
            <Skeleton height='20px' width={36} />
          </Td>
          <Td>
            <Skeleton height='20px' width={'2xl'} />
          </Td>
          <Td>
            <HStack>
              <Skeleton height='24px' width={20} />
              <Skeleton height='24px' width={20} />
            </HStack>
          </Td>
        </Tr>
    </>
  );
};

export default CurrencyListSkaleton;