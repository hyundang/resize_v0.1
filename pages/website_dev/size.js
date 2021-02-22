import React from "react";
import styled from "styled-components";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { pageNumState } from "../../states/style_atom";
import { SexState } from "../../states/website_atom";
// components
import { TransitionPage } from "../../components";
import {
    PageOne,
    PageFive,
    PageFour,
    PageThree,
    PageTwo
} from '../../components/size';
// data
import user_datas_F from "../../data/userdata/user_datas_F";
import user_datas_M from "../../data/userdata/user_datas_M";



const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(pageNumState);
    const sex = useRecoilValue(SexState); // 0: 남자, 1: 여자


    switch(pageNum){
        case 0:
            return (<TransitionPage 
                        text_one={"이제 당신의 체형을"}
                        text_two={"함께 알아볼까요?"}
                        setPageNum={setPageNum}
                    />)
        case 1:
            return (<PageOne 
                lastQuesNum={5}
                quesNum={1}
                setPageNum={setPageNum}
            />)
        case 2:
            return (<PageTwo
                lastQuesNum={5}
                quesNum={2}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.size_M[pageNum-1].answers 
                    : user_datas_F.size_F[pageNum-1].answers
                }
            />)
        case 3:
            return (<PageThree
                lastQuesNum={5}
                quesNum={3}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.size_M[pageNum-1].answers 
                    : user_datas_F.size_F[pageNum-1].answers
                }
            />)
        case 4:
            return (<PageFour
                lastQuesNum={5}
                quesNum={4}
                setPageNum={setPageNum}
            />)
        case 5:
            return (<PageFive
                lastQuesNum={5}
                quesNum={5}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers.length 
                    : user_datas_F.style_F[pageNum-1].answers.length
                }
            />)
        default:
            return (<TransitionPage 
                text_one={"이제 당신의 체형을"}
                text_two={"함께 알아볼까요?"}
            />)
    }
}

export default Start;