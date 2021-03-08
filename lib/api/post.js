import axios from "axios";

const baseURL = 'http://resize-django.eba-tmdshikz.ap-northeast-2.elasticbeanstalk.com';

const userSignup = async (body) => {
    try {
        const {data} = await axios({
            baseURL,
            url: "/account/sign-up/",
            method: 'post',
            data: body,
        });
    console.log("[SUCCESS] USER LOGIN", data);
    return {
        data: data,
        success: true,
    };
    } catch (e) {
        console.error("[FAIL] USER LOGIN", e);
        return {
            data: e,
            success: false,
        };
    }
};


const postApi = {
    userSignup,
  };
  
  export default postApi;