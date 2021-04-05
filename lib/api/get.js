import axios from "axios";

const baseURL = 'https://api2422.re-size.co.kr';


// 이미지 데이터 가져오기
const getImgData = async (kate, sex, apiName) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/${kate}_${sex}/${apiName}/`,
            method: 'get',
        });
    console.log(`[SUCCESS] GET ${apiName}`, data);
    return data;
    } catch (e) {
        console.error(`[FAIL] GET ${apiName}`, e);
        return e;
    }
};

const getColor = async () => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/color/Color/`,
            method: 'get',
        });
    console.log(`[SUCCESS] GET COLOR`, data);
    return data;
    } catch (e) {
        console.error(`[FAIL] GET COLOR`, e);
        return e;
    }
};

const getResult = async (isMorF, id) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/curation/Curation_${isMorF}/${id}/`,
            method: 'get',
        });
    console.log(`[SUCCESS] GET RESULT`, data);
    return data;
    } catch (e) {
        console.error(`[FAIL] GET RESULT`, e);
        return e;
    }
};


const getApi = {
    getImgData,
    getColor,
    getResult,
  };
  
  export default getApi;