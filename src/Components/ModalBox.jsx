import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Image,
    Box,
    Flex,
    Text,
    Heading,
    useColorModeValue
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineExport } from "react-icons/ai";
import { SlLike, SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl'


export default function ModalBox({ data }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const text = useColorModeValue('white','');
    const bg = useColorModeValue('red', 'red.500')

    return (
        <>
            <br />
            <Button onClick={onOpen} m={"auto"} bg={bg} _hover={{ bg: "blue.500" }} color={"white"}>More Details</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody mt={"30px"} pb={"20px"}>
                        <Image src={data.urls.thumb} width={"100%"} />
                        <Heading fontSize={"20px"} m={"10px 0px 10px 0px"}>{data.description == null ? "Nature image" : data.description}</Heading>
                        <Flex mt='6' flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }} spacing='3' justifyContent={"space-between"} alignItems={"center"} >
                            <Flex alignItems={"center"} gap={"10px"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}>
                                <Image src={data.user.profile_image.medium} alt={"user-img"} rounded={"full"} />
                                <Box textAlign={{ base: "center", sm: "center", md: "left", lg: "left", xl: "left" }} >
                                    <Text fontWeight={"700"} color={"#4f4f4f"} >{data.user.name}</Text>
                                    <Text fontWeight={"600"} color={"#A7A7A7"} fontSize={"14px"}>@{data.user.username}</Text>
                                </Box>
                            </Flex>
                            <Flex gap={"5px"} alignItems={"center"}>
                                <SlLike />
                                <Text>{((data.likes) / 1000).toFixed(1)}K</Text>
                            </Flex>
                        </Flex>
                        <Flex gap={"5px"} alignItems={"center"} margin={"10px"}>
                            <SlSocialInstagram /> :
                            <Text>{data.user.social.instagram_username == null ? "@rohini123" : data.user.social.instagram_username}</Text>
                        </Flex>
                        <Flex gap={"5px"} alignItems={"center"} margin={"10px"}>
                            <SlSocialTwitter /> :
                            <Text>{data.user.social.twitter_username == null ? "@tweetrohini123" : data.user.social.twitter_username}</Text>
                        </Flex>
                        <Flex gap={"5px"} alignItems={"center"} margin={"10px"}>
                            <AiOutlineExport /> :
                            <Text overflow={"hidden"}>{data.user.social.portfolio_url == null ? "@https://rk.github.io" : data.user.social.portfolio_url}</Text>
                        </Flex>
                        <Heading fontSize={"16px"}>Related Tags</Heading>
                        <Flex gap={"10px"} mt={"10px"} mb={"10px"}>
                            {
                                data.tags?.map((el, index) => (
                                    <Button overflow={"hidden"} padding={"0px 10px"} key={index + 1}>{el.title}</Button>
                                ))
                            }
                        </Flex>
                    </ModalBody>

                </ModalContent>
            </Modal>
        </>
    )
}