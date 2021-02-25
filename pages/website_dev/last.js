import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { TransitionPage } from "../../components";
import { PageOne } from "../../components/last";
// recoil
import { useRecoilState } from "recoil";
import { LastPageNumState } from "../../states/last_atom";


const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(LastPageNumState);

    switch (pageNum) {
        case 1:
            return <PageOne/>
        default:
            return (<TransitionPage 
                text_one={"이제 마무리를"}
                text_two={"하러 가볼까요?"}
                setPageNum={setPageNum}
                kategorie={3}
            />)
    }
}

export default Start;
