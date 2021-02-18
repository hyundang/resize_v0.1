import React from "react";
import styled from "styled-components";
// recoil
import { useRecoilState } from "recoil";
import { pageNumState } from "../../states/style_atom";
// components
import { TransitionPage } from "../../components";
import { Question } from "../../components/common";
import {
    PageOne,
    PageEight,
    PageFive,
    PageFour,
    PageNine,
    PageSeven,
    PageTen,
    PageThree,
    PageSix,
    PageTenFi,
    PageTenFo,
    PageTenO,
    PageTenS,
    PageTenTr,
    PageTenTw,
    PageTwo
} from '../../components/style';

const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(pageNumState);

    switch(pageNum){
        case 0:
            return (<TransitionPage 
                        text_one={"이제 당신의 스타일을"}
                        text_two={"알아보러 가볼까요?"}
                        setPageNum={setPageNum}
                    />)
        case 1:
            return (<PageOne 
                lastQuesNum={16}
                quesNum={1}
                setPageNum={setPageNum}
            />)
        case 2:
            return (<PageTwo
                lastQuesNum={16}
                quesNum={2}
                setPageNum={setPageNum}
            />)
        case 3:
            return (<PageThree 
                lastQuesNum={16}
                quesNum={3}
                setPageNum={setPageNum}
            />)
        case 4:
            return (<PageFour
                lastQuesNum={16}
                quesNum={4}
                setPageNum={setPageNum}
            />)
        case 5:
            return (<PageFive 
                lastQuesNum={16}
                quesNum={5}
                setPageNum={setPageNum}
            />)
        case 6:
            return (<PageSix
                lastQuesNum={16}
                quesNum={6}
                setPageNum={setPageNum}
            />)
        case 7:
            return (<PageSeven 
                lastQuesNum={16}
                quesNum={7}
                setPageNum={setPageNum}
            />)
        case 8:
            return (<PageEight
                lastQuesNum={16}
                quesNum={8}
                setPageNum={setPageNum}
            />)
        case 9:
            return (<PageNine
                lastQuesNum={16}
                quesNum={9}
                setPageNum={setPageNum}
            />)
        case 10:
            return (<PageTen
                lastQuesNum={16}
                quesNum={10}
                setPageNum={setPageNum}
            />)
        case 11:
            return (<PageTenO 
                lastQuesNum={16}
                quesNum={11}
                setPageNum={setPageNum}
            />)
        case 12:
            return (<PageTenTw 
                lastQuesNum={16}
                quesNum={12}
                setPageNum={setPageNum}
            />)
        case 13:
            return (<PageTenTr
                lastQuesNum={16}
                quesNum={13}
                setPageNum={setPageNum}
            />)
        case 14:
            return (<PageTenFo
                lastQuesNum={16}
                quesNum={14}
                setPageNum={setPageNum}
            />)
        case 15:
            return (<PageTenFi
                lastQuesNum={16}
                quesNum={15}
                setPageNum={setPageNum}
            />)
        case 16:
            return (<PageTenS
                lastQuesNum={16}
                quesNum={16}
                setPageNum={setPageNum}
            />)
        default:
            return (<TransitionPage 
                text_one={"이제 당신의 스타일을"}
                text_two={"알아보러 가볼까요?"}
            />)
    }
}

export default Start;