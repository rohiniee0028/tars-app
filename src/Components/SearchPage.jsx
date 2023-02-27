import { Box, Heading } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react';
import { getAllImages, getResults } from '../api/api';
import { Context } from '../Context/Context';
import { AllImages } from './AllImages';
import axios from "axios";
import Navbar from './Navbar';
import { Pagination } from './Pagination';

const SearchPage = () => {
    const { searchData, setSearchData } = useContext(Context);
    const [data, setData] = useState([])
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        //    setData(data.results)
        handleSearchData()
    }, [searchData, page])

    const handleSearchData = async () => {
        let res = await getResults(searchData, page);
        console.log(res);
        setData(res.results)
        setTotalPage(res.total_pages)
    }

    return (
        <>
            <Box width={"95%"} margin={"auto"}>
                <Heading m={"20px"}>{searchData}</Heading>
                <AllImages data={data} />
                <br />
                <Pagination totalPage={totalPage} page={page} onChange={(val) => setPage(val)} />
                <br />
                <br />
            </Box>
        </>
    );
};

export default SearchPage;