import axios from "axios";

const baseURL = 'http://api2422.re-size.co.kr';


// 이미지 데이터 가져오기
const getImgData = async (kate, sex, apiName) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/${kate}_${sex}/${apiName}`,
            method: 'get',
        });
    console.log(`[SUCCESS] GET ${apiName}`, data);
    return data;
    } catch (e) {
        console.error(`[FAIL] GET ${apiName}`, e);
        return e;
    }
};




const getApi = {
    getImgData,
  };
  
  export default getApi;