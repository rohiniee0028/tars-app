import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../Components/HomePage';
import SearchPage from '../Components/SearchPage';

const AllRoutes = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage/>}/>
            <Route path={"/search"} element={<SearchPage/>}/>
        </Routes>
    );
};

export default AllRoutes;