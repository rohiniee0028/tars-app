import { ReactNode, useContext, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Link,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Image,
    Popover,
    PopoverTrigger,
    Input,
    Text,
    Heading,
    useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from "react-router-dom";
import { Context } from '../Context/Context';

const Links = [
    {
        label: 'Explore',
    },
    {
        label: 'Collection',
    },
    {
        label: 'Community',
    }
]

const NavLink = ({ children }) => (
    <Link
        px={5}
        py={2.5}
        rounded={'xl'}
        fontWeight={'bold'}
        fontSize={'18px'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('red.500', 'red.700'),
            color: 'white'
        }}
    >
        {children}
    </Link>
);

export default function Navbar({ data, searchValue, setSearchValue, handleImages }) {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();
    const { searchData, getSearchData } = useContext(Context);


    const handler = (e) => {
        if (e.key == "Enter") {
            console.log(searchValue);
            getSearchData(searchValue);
            handleImages()
            navigate("/search")
        }
    }

    const gotoSearch = () => {
        getSearchData(searchValue);
        handleImages()
        navigate("/search")
    }

    return (
        <>
            <Box bg={useColorModeValue('white', 'gray.800')} px={4} style={{ position: "fixed", zIndex: "100", width: "100%" }} >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} gap={"20px"}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        border={'4px solid lightblue'}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={'center'}>
                        <Heading
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            color={useColorModeValue('#333333', 'white')}
                            fontSize={"20px"}
                            mt={-2}>
                            𝕴𝖒𝖆𝖌𝖊 𝖌𝖆𝖑𝖑𝖊𝖗𝖞
                        </Heading>

                        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                            <DesktopNav data={data} gotoSearch={gotoSearch} handler={handler} searchValue={searchValue} setSearchValue={setSearchValue} />
                        </Flex>
                    </HStack>
                    <Button onClick={toggleColorMode} border={'4px solid lightblue'}>
                        {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    </Button>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }} >
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.label} href={link.href}>
                                    <Box onClick={onClose}>{link.label}</Box>
                                </NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}




const DesktopNav = ({ data, searchValue,gotoSearch, setSearchValue, handler }) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const text = useColorModeValue('gray','black')

    return (
        <Stack direction={'row'} spacing={{ base: "5", sm: "5", md: "10", lg: "10" }} >
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={'sm'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>
                    </Popover>
                </Box>
            ))}

            {/*-------------------------------Search----------------------------------------- */}

            <Box display={'flex'} gap={"10px"} width={{ base: "100px", sm: "100px", md: "200px", lg: "500px" }} padding={"5px 10px"} borderRadius={"10px"} alignItems={"center"} border={"1px solid gray"} color={useColorModeValue('gray.600', 'white')} bg={useColorModeValue('#fafafa', 'gray.800')} >
                <IoSearchOutline />
                <Input
                    variant='unstyled'
                    placeholder='Search images here'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={(e) => handler(e)}
                />
            </Box>
            {
                data.length == 0 || searchValue == "" ? <Box display={"none"}></Box> :
                    <Box position={"absolute"} left={"495px"} color={text}  onClick={gotoSearch} top={"50px"} border={'1px solid lightgray'} borderBottomRadius={"10px"} overflow={'scroll'} height={"xs"} backgroundColor={"white"} padding={"10px"} width={{ base: '180px', md: '400px', lg: '495px', xl: "495px" }} css={{
                        '&::-webkit-scrollbar': {
                            width: '4px',
                        }
                        
                    }}>
                        {
                            data && data.map((el) => (
                                <Link key={el._id} style={{ textDecoration: 'none' }} >
                                    <Box style={{ marginBottom: '5px', display: 'flex', justifyContent: 'space-between' }} _hover={{ backgroundColor: 'red', color: 'white' }}>
                                        <Text align="left" paddingLeft={'3px'}>{el.alt_description}</Text>
                                        <Image src={el.urls.raw} style={{ width: '50px', height: '27px' }} />
                                    </Box>
                                </Link>
                            )
                            )
                        }
                    </Box>
            }
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'Explore',
    },
    {
        label: 'Collection',
    },
    {
        label: 'Community',
    }
];