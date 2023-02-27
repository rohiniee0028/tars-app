import axios from "axios";

export const getAllImages = async (searchValue,page=1) => {
    // console.log("page111", page);
    // c
    if(searchValue==""){
        searchValue="nature"
    }
    // console.log(searchValue,page);


        try{
            let res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchValue}&client_id=EFAnbNRN2oRi4hF4wvIryVehmJ-mnk6I_cxjI2c53l0`);
            let data = res.data;
            return data;
        }
        catch(err){
            console.log(err);
        }
  
}

export const getResults = async (searchData,page) => {
    try{
        let res = await axios.get(`https://api.unsplash.com/search/photos?page=${page}&query=${searchData}&client_id=EFAnbNRN2oRi4hF4wvIryVehmJ-mnk6I_cxjI2c53l0`);
        let data = res.data;
        return data;
    }
    catch(err){
        console.log(err);
    }
}