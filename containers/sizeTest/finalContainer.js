import React, {useState, useCallback} from 'react';
import style from 'styled-components';

const Submit = style.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  border:1px solid black;
  border-color: #dec19f;
  border-radius: 5px;
  box-shadow: 0vw 2vw 7vw 0 rgba(98, 69, 34, 0.15);
  padding: 1vw;
  margin: 2vw;
  background-color: #dec19f;
  cursor : pointer;
  &:hover{
    background-color: #a99174;
    border-color: #a99174;
  }
`;

const Text = style.div`
  color : #fff;
  font-size: 0.9rem;
  font-family: 'Nanum Gothic', sans-serif;
`;

const Status = style.div`
  margin: 10px 0 5px 0;
  color : #a99174;
  font-size: 0.8rem;
`;

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const FinalContainer = (props) => {
    const [mySize, setMySize] = useState(getMySize());

    function getMySize() {
        var size = '';
        if ((props.answers[1] + props.answers[2] + props.answers[3])>1) size += 'W';
        else size += 'N';
        if ((props.answers[4] + props.answers[5] + props.answers[6])>1) size += 'C';
        else size += 'T';
        if (props.answers[7] == 1) size += 'S';
        else size += 'B';
        if ((props.answers[8] + props.answers[9] + props.answers[10])>1) size += 'M';
        else size += 'U';
      
        return size;
    }



    return (
        <>
         <div>{mySize}</div>
        </>
    );
};

export default FinalContainer;