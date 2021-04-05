import React from "react";
// recoil
import { useRecoilState } from "recoil";
import { InvitationPageNumState } from "../states/invitation_atom";
// components
import { DefaultPage, PageOne, PageTwo } from '../components/invitation';


const Start = () => {
    const [pageNum, setPageNum] = useRecoilState(InvitationPageNumState);

    switch(pageNum){
        case 1:
            return <PageOne setPageNum={setPageNum}/>
        case 2:
            return <PageTwo/>
        default:
            return <DefaultPage setPageNum={setPageNum}/>
    }
}

export default Start;