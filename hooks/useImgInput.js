import React from 'react';
import { useRecoilState } from "recoil";
import { SexState } from "../states/website_atom";
// axios
import { postApi } from "../lib/api";


export default (recoilState) => {
  const [value, setValue] = useRecoilState(recoilState);
  const [sex, setSex] = useRecoilState(SexState);

  const onChange = async (e) => {
    // console.log(e.target.files);
    if(value.length < 3){
      if(sex===0){
        const data = await postApi.PostImg(e.target.files[0], 'M');
        setValue(value.concat([data.data]));
      }
      else{
        const data = await postApi.PostImg(e.target.files[0], 'F');
        setValue(value.concat([data.data]));
      }
    }
  };

  return { value, onChange, setValue };
};
