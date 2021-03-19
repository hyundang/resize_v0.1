import React from "react";
// recoil
import { useRecoilState, useRecoilValue } from "recoil";
import { CodyPageNumState } from "../states/cody_atom";
import { SexState } from "../states/website_atom";
// components
import { TransitionPage } from "../components";
import {
    PageOne,
    PageFive,
    PageFour,
    PageThree,
    PageTwo,
    PageSix
} from '../components/cody';
// data
import user_datas_F from "../data/userdata/user_datas_F";
import user_datas_M from "../data/userdata/user_datas_M";



const Start  = () => {
    const [pageNum, setPageNum] = useRecoilState(CodyPageNumState);
    const sex = useRecoilValue(SexState); // 0: 남자, 1: 여자


    switch(pageNum){
        case 1:
            return (<PageOne 
                lastQuesNum={6}
                quesNum={1}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers.length 
                    : user_datas_F.cody_F[pageNum-1].answers.length
                }
            />)
        case 2:
            return (<PageTwo
                lastQuesNum={6}
                quesNum={2}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers.length 
                    : user_datas_F.cody_F[pageNum-1].answers.length
                }
            />)
        case 3:
            return (<PageThree
                lastQuesNum={6}
                quesNum={3}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                sex={sex}
            />)
        case 4:
            return (<PageFour
                lastQuesNum={6}
                quesNum={4}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers.length 
                    : user_datas_F.cody_F[pageNum-1].answers.length
                }
            />)
        case 5:
            return (<PageFive
                lastQuesNum={6}
                quesNum={5}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers.length 
                    : user_datas_F.cody_F[pageNum-1].answers.length
                }
            />)
        case 6:
            return (<PageSix
                lastQuesNum={6}
                quesNum={6}
                setPageNum={setPageNum}
                user_datas={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers 
                    : user_datas_F.cody_F[pageNum-1].answers
                }
                data_num={(sex===0)? 
                    user_datas_M.cody_M[pageNum-1].answers.length 
                    : user_datas_F.cody_F[pageNum-1].answers.length
                }
            />)
        default:
            return (<TransitionPage 
                text_one={"이제 당신만을 위한 코디를"}
                text_two={"찾으러 가볼까요?"}
                setPageNum={setPageNum}
                kategorie={2}
            />)
    }
}

export default Start;