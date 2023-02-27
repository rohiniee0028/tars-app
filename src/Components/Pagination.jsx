import { Button, Flex } from "@chakra-ui/react"

export const Pagination = ({totalPage,page,onChange}) => {
    return (
        <Flex gap={"10px"} justifyContent={"center"} alignItems={"center"} marginTop={"30px"}>
            <Button isDisabled={page==1} onClick={()=>onChange(page-1)}>Prev</Button>
            <Button>{page}</Button>
            <Button isDisabled={page==totalPage}  onClick={()=>onChange(page+1)}>Next</Button>
        </Flex>
    )
}
