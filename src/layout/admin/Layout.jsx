import React, { ReactNode } from 'react'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

const LinkItems = [
  { name: 'Home', icon: FiHome, path: '/admin/dashboard' },
  { name: 'Conversions', icon: FiTrendingUp, path: '/admin/conversions' },
  { name: 'Currencies', icon: FiCompass, path: '/admin/currencies' }
  // { name: 'Settings', icon: FiSettings, path: '/admin/settings' }
]

export default function Layout({ children }) {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { status } = useSession()
  if (status === 'loading') {
    return <>Loading....</>
  }
  if (status === 'unauthenticated') router.push('/admin/login')
  if (status === 'authenticated') {
    return (
      <>
        {' '}
        <Head>
          <title>BTC2USDT- Admin Panel</title>
          <meta name='description' content='Generated by create next app' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Box minH='100vh' bg={'gray.100'}>
          <SidebarContent
            onClose={() => onClose}
            display={{ base: 'none', md: 'block' }}
          />
          <Drawer
            autoFocus={false}
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size='full'>
            <DrawerContent>
              <SidebarContent onClose={onClose} />
            </DrawerContent>
          </Drawer>
          {/* mobilenav */}
          <MobileNav onOpen={onOpen} onClose={onClose} />
          <Box ml={{ base: 0, md: 60 }} p='4'>
            {children}
          </Box>
        </Box>
      </>
    )
  }
}

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter()
  return (
    <Box
      transition='3s ease'
      bg={useColorModeValue('white', 'gray.900')}
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}>
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          <Link href='/'>
            <Image
              src='/btctousdt.png'
              alt='btc2usdt'
              height={40}
              width={150}
            />
          </Link>
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          onClick={onClose}
          key={link.name}
          icon={link.icon}
          href={link.path}
          className={router.pathname === link.path ? 'active' : 'inActive'}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
      {...rest}>
      <Flex
        align='center'
        p='4'
        mx='4'
        borderRadius='lg'
        role='group'
        cursor='pointer'
        _hover={{
          bg: 'green.500',
          color: 'white'
        }}>
        {icon && (
          <Icon
            mr='4'
            fontSize='16'
            _groupHover={{
              color: 'white'
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'>
        <Link href='/'>BTC2USDT</Link>
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size='lg'
          variant='ghost'
          aria-label='open menu'
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition='all 0.3s'
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems='flex-start'
                  spacing='1px'
                  ml='2'>
                  <Text fontSize='sm'>Mr Admin</Text>
                  <Text fontSize='xs' color='gray.600'>
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem
                onClick={() =>
                  signOut({
                    callbackUrl: 'https://btc2usdt.com'
                  })
                }>
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
