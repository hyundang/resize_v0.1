import axios from "axios";

const baseURL = 'http://resize-django.eba-tmdshikz.ap-northeast-2.elasticbeanstalk.com';


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