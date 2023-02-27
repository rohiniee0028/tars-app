import { Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Image, Stack, Heading, Flex, HStack, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import { SlLike } from "react-icons/sl";
import ModalBox from "./ModalBox";

export const AllImages = ({ data }) => {
    const text = useColorModeValue('#4f4f4f', 'white');

    return (
        <Box width={"80%"} margin={"auto"} mt={"20px"}>
            <SimpleGrid columns={[1, 2, 2, 3]} spacing={"40px"}>
                {
                    data && data.map((el) => (
                        <Box height='auto' padding={"20px"} borderRadius={"20px"} key={el.id} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}>
                            <Image
                                src={el.urls.thumb}
                                alt='nature-img'
                                borderRadius='lg'
                                height={"250px"}
                                width={"100%"}

                            />
                            <Flex mt='6' flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }} spacing='3' justifyContent={"space-between"} alignItems={"center"} >
                                <Flex alignItems={"center"} gap={"10px"} flexDirection={{ base: "column", sm: "column", md: "row", lg: "row", xl: "row" }}>
                                    <Image src={el.user.profile_image.medium} alt={"user-img"} rounded={"full"} />
                                    <Box textAlign={{ base: "center", sm: "center", md: "left", lg: "left", xl: "left" }} >
                                        <Text fontWeight={"700"} color={text} >{el.user.name}</Text>
                                        <Text fontWeight={"600"} color={"#A7A7A7"} fontSize={"14px"}>@{el.user.username}</Text>
                                    </Box>
                                </Flex>
                                <Flex gap={"5px"} alignItems={"center"}>
                                    <SlLike />
                                    <Text>{((el.likes) / 1000).toFixed(1)}K</Text>
                                </Flex>
                            </Flex>

                            {/* ------------------modal box----------------------------*/}

                            <ModalBox data={el} />

                        </Box>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}