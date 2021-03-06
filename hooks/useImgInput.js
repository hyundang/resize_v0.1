import React from 'react';
import { useRecoilState } from "recoil";
// axios
import { postApi } from "../lib/api";


export default (recoilState) => {
  const [value, setValue] = useRecoilState(recoilState);

  const onChange = async (e) => {
    // console.log(e.target.files);
    if(value.length < 3){
      const data = await postApi.PostImg(e.target.files[0]);
      setValue(value.concat([data.data]));
    }
  };

  return { value, onChange, setValue};
};
