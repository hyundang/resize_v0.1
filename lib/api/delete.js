import axios from "axios";

const baseURL = 'https://api2422.re-size.co.kr';

const DeleteImg = async (id) => {
    try {
      const { data } = await axios({
        baseURL,
        url: `/cody_F/Photo/${id}`,
        method: 'delete',
      });
      console.log("[SUCCESS] DELETE IMAGE", data);
      return data;
    } catch (e) {
      console.log("[FAIL] DELETE IMAGE", e);
      return e;
    }
  };


const deleteApi = {
    DeleteImg,
}

export default deleteApi;