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

const PostImg = async (body) => {
    const formData = new FormData();
    formData.append("photo", body);
    try {
        const {data} = await axios({
            baseURL,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            url: `/cody_F/Photo/`,
            method: 'post',
            data: formData,
        });
    console.log("[SUCCESS] POST IMG", data);
    return {
        data: data,
        success: true,
    };
    } catch (e) {
        console.error("[FAIL] POST IMG", e);
        return {
            data: e,
            success: false,
        };
    }
}

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

const postReview = async (body, isMorF) => {
    try {
        const {data} = await axios({
            baseURL,
            url: `/review/Review_${isMorF}/`,
            method: 'post',
            data: body,
        });
    console.log("[SUCCESS] POST REVIEW", data);
    return {
        data: data,
        success: true,
    };
    } catch (e) {
        console.error("[FAIL] POST REVIEW", e);
        return {
            data: e,
            success: false,
        };
    }
}


const postApi = {
    userSignup,
    PostData,
    PostImg,
    postReview,
  };
  
  export default postApi;