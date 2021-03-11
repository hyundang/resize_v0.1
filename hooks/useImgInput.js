import React from 'react';
import { useRecoilState } from "recoil";

export default (recoilState) => {
  const [value, setValue] = useRecoilState(recoilState);

  const onChange = e => {
    console.log(e.target.files);
    // console.log(value.length)
    if(value.length < 3){
        const file = e.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        setValue(value.concat([imgUrl]));
    }  
  };

  return { value, onChange, setValue };
};
