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
// data
import user_datas_F from "../../data/userdata/user_datas_F";
import user_datas_M from "../../data/userdata/user_datas_M";



const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(pageNumState);
    const sex = useRecoilValue(SexState); // 0: 남자, 1: 여자


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
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 3:
            return (<PageThree
                lastQuesNum={16}
                quesNum={3}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 4:
            return (<PageFour
                lastQuesNum={16}
                quesNum={4}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
            />)
        case 5:
            return (<PageFive
                lastQuesNum={16}
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
        case 6:
            return (<PageSix
                lastQuesNum={16}
                quesNum={6}
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
        case 7:
            return (<PageSeven
                lastQuesNum={16}
                quesNum={7}
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
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers.length 
                    : user_datas_F.style_F[pageNum-1].answers.length
                }
            />)
        case 10:
            return (<PageTen
                lastQuesNum={16}
                quesNum={10}
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
        case 11:
            return (<PageTenO
                lastQuesNum={16}
                quesNum={11}
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
        case 12:
            return (<PageTenTw
                lastQuesNum={16}
                quesNum={12}
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
        case 13:
            return (<PageTenTr
                lastQuesNum={16}
                quesNum={13}
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
        case 14:
            return (<PageTenFo
                lastQuesNum={16}
                quesNum={14}
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
        case 15:
            return (<PageTenFi
                lastQuesNum={16}
                quesNum={15}
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
        case 16:
            return (<PageTenS
                lastQuesNum={16}
                quesNum={16}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers 
                    : user_datas_F.style_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.style_M[pageNum-1].answers.length 
                    : user_datas_F.style_F[pageNum-1].answers.length
                }
                inputTextOne={(sex===0)?
                    "예) COS, LMC, 유니폼브릿지, 앤더슨벨..."
                    : "예) ZARA, OIOI, 커먼유니크, 아뜨랑스..."
                }
                inputTextTwo={(sex===0)?
                    "예) SSG닷컴, LF몰, SSF샵..."
                    : "예) SSG닷컴, LF몰, SSF샵..."
                }
            />)
        default:
            return (<TransitionPage 
                text_one={"이제 당신의 스타일을"}
                text_two={"알아보러 가볼까요?"}
            />)
    }
}

export default Start;