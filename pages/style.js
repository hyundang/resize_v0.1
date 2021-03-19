import React, { useEffect } from "react";
import styled from "styled-components";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { StylePageNumState } from "../states/style_atom";
import { SexState } from "../states/website_atom";
// components
import { TransitionPage } from "../components";
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
    PageTenTr,
    PageTenTw,
    PageTwo
} from '../components/style';
// data
import user_datas_F from "../data/userdata/user_datas_F";
import user_datas_M from "../data/userdata/user_datas_M";



const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(StylePageNumState);
    const sex = useRecoilValue(SexState); // 0: 남자, 1: 여자

    // 페이지 새로고침 막기
    useEffect(()=>{
        window.addEventListener('beforeunload', (e)=>{
            e.preventDefault();
            e.returnValue='refresh';
        })
    },[])

    switch(pageNum){
        case 0:
            return (<TransitionPage 
                        text_one={"이제 당신의 스타일을"}
                        text_two={"알아보러 가볼까요?"}
                        setPageNum={setPageNum}
                        kategorie={0}
                    />)
        case 1:
            return (<PageOne 
                lastQuesNum={15}
                quesNum={1}
                setPageNum={setPageNum}
            />)
        case 2:
            return (<PageTwo
                lastQuesNum={15}
                quesNum={2}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 3:
            return (<PageThree
                lastQuesNum={15}
                quesNum={3}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 4:
            return (<PageFour
                lastQuesNum={15}
                quesNum={4}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 5:
            return (<PageFive
                lastQuesNum={15}
                quesNum={5}
                setPageNum={setPageNum}
            />)
        case 6:
            return (<PageSix
                lastQuesNum={15}
                quesNum={6}
                setPageNum={setPageNum}
            />)
        case 7:
            return (<PageSeven
                lastQuesNum={15}
                quesNum={7}
                setPageNum={setPageNum}
            />)
        case 8:
            return (<PageEight
                lastQuesNum={15}
                quesNum={8}
                setPageNum={setPageNum}
            />)
        case 9:
            return (<PageNine
                lastQuesNum={15}
                quesNum={9}
                setPageNum={setPageNum}
            />)
        case 10:
            return (<PageTen
                lastQuesNum={15}
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
                user_datas={(sex===0)? 
                    user_datas_M.style_M[4].answers 
                    : user_datas_F.style_F[4].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.style_M[4].answers.length 
                    : user_datas_F.style_F[4].answers.length
                }
            />)
        case 15:
            return (<PageTenFi
                lastQuesNum={15}
                quesNum={15}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[5].answers 
                    : user_datas_F.style_F[5].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.style_M[5].answers.length 
                    : user_datas_F.style_F[5].answers.length
                }
                inputTextOne={(sex===0)?
                    "예) COS, LMC, 유니폼브릿지, 앤더슨벨..."
                    : "예) ZARA, OIOI, 커먼유니크, 아뜨랑스..."
                }
                inputTextTwo={"예) SSG닷컴, LF몰, SSF샵..."}
            />)
        default:
            break;
    }
}

export default Start;