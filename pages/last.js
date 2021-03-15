import React, { useEffect } from "react";
import styled from "styled-components";
// components
import { TransitionPage } from "../components";
import { PageOne } from "../components/last";
// recoil
import { useRecoilState } from "recoil";
import { LastPageNumState } from "../states/last_atom";
// data
import user_datas_M from "../data/userdata/user_datas_M";


const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(LastPageNumState);

    switch (pageNum) {
        case 1:
            return <PageOne user_datas={user_datas_M.userInfo_M[0].answers}/>
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
