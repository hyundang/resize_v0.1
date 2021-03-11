import axios from "axios";

const baseURL = 'https://api2422.re-size.co.kr';

const userSignup = async (body) => {
    try {
        const {data} = await axios({
            baseURL,
            url: "/account/sign-up/",
            method: 'post',
            data: body,
        });
    console.log("[SUCCESS] SIGN IN", data);
    return {
        data: data,
        success: true,
    };
    } catch (e) {
        console.error("[FAIL] SIGN IN", e);
        return {
            data: e,
            success: false,
        };
    }
};

const PostData = async (body, isMorF, kategorie, apiName) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/${kategorie}_${isMorF}/${apiName}_${isMorF}/`,
            method: 'post',
            data: body,
        });
    console.log("[SUCCESS] POST DATA", data);
    return {
        data: data,
        success: true,
    };
    } catch (e) {
        console.error("[FAIL] POST DATA", e);
        return {
            data: e,
            success: false,
        };
    }
}

const postApi = {
    userSignup,
    PostData,
  };
  
  export default postApi;