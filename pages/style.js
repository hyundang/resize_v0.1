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
    PageTwo,
    WPageTenTr
} from '../components/style';
// data
import datas_F from "../data/userdata/user_datas_F";
import datas_M from "../data/userdata/user_datas_M";


export const getStaticProps = async () => {
    return{
        props:{
            user_datas_F: datas_F.style_F,
            user_datas_M: datas_M.style_M,
        }
    }
}


const Start  = ({user_datas_F, user_datas_M}) => {
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
        case 1:
            return (<PageOne 
                lastQuesNum={sex===0? 15 : 16}
                quesNum={1}
                setPageNum={setPageNum}
            />)
        case 2:
            return (<PageTwo
                lastQuesNum={sex===0? 15 : 16}
                quesNum={2}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M[0].answers 
                    : user_datas_F[0].answers
                }
            />)
        case 3:
            return (<PageThree
                lastQuesNum={sex===0? 15 : 16}
                quesNum={3}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M[0].answers 
                    : user_datas_F[0].answers
                }
            />)
        case 4:
            return (<PageFour
                lastQuesNum={sex===0? 15 : 16}
                quesNum={4}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M[0].answers 
                    : user_datas_F[0].answers
                }
            />)
        case 5:
            return (<PageFive
                lastQuesNum={sex===0? 15 : 16}
                quesNum={5}
                setPageNum={setPageNum}
            />)
        case 6:
            return (<PageSix
                lastQuesNum={sex===0? 15 : 16}
                quesNum={6}
                setPageNum={setPageNum}
            />)
        case 7:
            return (<PageSeven
                lastQuesNum={sex===0? 15 : 16}
                quesNum={7}
                setPageNum={setPageNum}
            />)
        case 8:
            return (<PageEight
                lastQuesNum={sex===0? 15 : 16}
                quesNum={8}
                setPageNum={setPageNum}
            />)
        case 9:
            return (<PageNine
                lastQuesNum={sex===0? 15 : 16}
                quesNum={9}
                setPageNum={setPageNum}
            />)
        case 10:
            return (<PageTen
                lastQuesNum={sex===0? 15 : 16}
                quesNum={10}
                setPageNum={setPageNum}
            />)
        case 11:
            return (<PageTenO
                lastQuesNum={sex===0? 15 : 16}
                quesNum={11}
                setPageNum={setPageNum}
            />)
        case 12:
            return (<PageTenTw
                lastQuesNum={sex===0? 15 : 16}
                quesNum={12}
                setPageNum={setPageNum}
            />)
        case 13:
            if(sex===0){
                return (<PageTenTr
                            lastQuesNum={15}
                            quesNum={13}
                            setPageNum={setPageNum}
                        />)
            }
            else{
                return (<WPageTenTr
                            lastQuesNum={16}
                            quesNum={13}
                            setPageNum={setPageNum}
                        />)
            }
        case 14:
            if(sex===0){
                return (<PageTenFo
                    lastQuesNum={15}
                    quesNum={14}
                    setPageNum={setPageNum}
                />)
            }
            else{
                return (<PageTenTr
                    lastQuesNum={16}
                    quesNum={14}
                    setPageNum={setPageNum}
                />)
            }
        case 15:
            if(sex===0){
                return (<PageTenFi
                    lastQuesNum={15}
                    quesNum={15}
                    setPageNum={setPageNum}
                    user_datas={user_datas_M[1].answers}
                    data_num={user_datas_M[1].answers.length}
                    inputTextOne={"예) COS, LMC, 유니폼브릿지, 앤더슨벨..."}
                    inputTextTwo={"예) SSG닷컴, LF몰, SSF샵..."}
                />)
            }
            else{
                return (<PageTenFo
                    lastQuesNum={16}
                    quesNum={15}
                    setPageNum={setPageNum}
                />)
            }
        case 16:
            return (<PageTenFi
                lastQuesNum={16}
                quesNum={16}
                setPageNum={setPageNum}
                user_datas={user_datas_F[1].answers}
                data_num={user_datas_F[1].answers.length}
                inputTextOne={"예) ZARA, OIOI, 커먼유니크, 아뜨랑스..."}
                inputTextTwo={"예) SSG닷컴, LF몰, SSF샵..."}
            />)
        default:
            return (<TransitionPage 
                text_one={"이제 당신의 스타일을"}
                text_two={"알아보러 가볼까요?"}
                setPageNum={setPageNum}
                kategorie={0}
            />)
    }
}

export default Start;