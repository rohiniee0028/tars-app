import { Box, Input, Text, useColorModeValue } from "@chakra-ui/react";
import "./HomePage.css";
import { IoSearchOutline } from "react-icons/io5";
import { AllImages } from "./AllImages";
import { useEffect, useState } from "react";
import { getAllImages } from "../api/api";
import Navbar from "./Navbar";
import {Pagination} from "./Pagination";

export const HomePage = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    
    useEffect(() => {
        handleImages();
    }, [searchValue, page])


    const handleImages = async () => {
        let res = await getAllImages(searchValue, page);
        setData(res.results);
        setTotalPage(res.total_pages)
    }

    
    return (
        <>
            <Navbar  data={data} searchValue={searchValue} setSearchValue={setSearchValue} handleImages={handleImages} />
            <br />
            <br />
            <Box mt={"15px"}>
                <Box
                    bgImage="url('https://images.unsplash.com/photo-1541296434114-65d3360d5772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&h=594')"
                    bgPosition="0"
                    bgRepeat="no-repeat"
                    width={"100vw"}
                    height={"60vh"}
                    className="bg-box"

                >
                    <Box className="headers-box">
                        <Text className="heading">Download High Quality Images by creators</Text>
                        <Text className="text-heading">Over 2.4 million+ stock Images by our talented community</Text>
                        <Box className="search-box" color={useColorModeValue('gray.600', 'white')} bg={useColorModeValue('white', 'gray')} >
                            <IoSearchOutline />
                            <Input variant='unstyled' placeholder='Search high resolution images,categories,wallpaper' />
                        </Box>
                    </Box>
                </Box>
                <AllImages data={data} />
                <br/>
                <Pagination totalPage={totalPage} page={page} onChange={(val)=>setPage(val)} />
                <br/>
                <br/>
            </Box>
        </>
    )
}   
