import axios from "axios";

const baseURL = 'http://resize-django.eba-tmdshikz.ap-northeast-2.elasticbeanstalk.com';

const getFitType = async (sex) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/size_${sex}/Fit_Type`,
            method: 'get',
        });
    console.log("[SUCCESS] GET Fit Type", data);
    return data;
    } catch (e) {
        console.error("[FAIL] GET Fit Type", e);
        return e;
    }
};

const getFaceType = async (sex) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/size_${sex}/Face_Type`,
            method: 'get',
        });
    console.log("[SUCCESS] GET Face Type", data);
    return data;
    } catch (e) {
        console.error("[FAIL] GET Face Type", e);
        return e;
    }
};

const getSkinTone = async (sex) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/size_${sex}/Skin_Tone`,
            method: 'get',
        });
    console.log("[SUCCESS] GET Skin Tone", data);
    return data;
    } catch (e) {
        console.error("[FAIL] GET Skin Tone", e);
        return e;
    }
};

const getShoulderType = async (sex) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/size_${sex}/Shoulder_Type`,
            method: 'get',
        });
    console.log("[SUCCESS] GET Shoulder Type", data);
    return data;
    } catch (e) {
        console.error("[FAIL] GET Shoulder Type", e);
        return e;
    }
};



const getApi = {
    getFitType,
    getFaceType,
    getSkinTone,
    getShoulderType,
  };
  
  export default getApi;