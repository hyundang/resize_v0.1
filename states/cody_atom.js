import { atom, atomFamily, selector } from 'recoil';

export const CodyPageNumState = atom({
    key: "CodyPageNumState",
    default: 0
})

// question 1~3, 6에서 태그 번호 저장되는 배열(최대 2개)
export const CodyTagState = atomFamily({
    key: "CodyTagState",
    default: []
})

// question 1~3에서 기타 정보 저장되는 문자열
export const CodyOtherState = atomFamily({
    key: "CodyOtherState",
    default: ""
})

export const CodyQuesOneState = selector({
    key: "CodyQuesOneState",
    get: ({ get })=>{
        return {
            data: get(CodyTagState(0)),
            ect: get(CodyOtherState(0))
        };
    }
})

export const CodyQuesTwoState = selector({
    key: "CodyQuesTwoState",
    get: ({ get })=>{
        return {
            data: get(CodyTagState(1)),
            ect: get(CodyOtherState(2))
        };
    }
})

// question 3에서 옷의 조합 저장하는 배열(최대 2개)
export const CodyCaseState = atom({
    key: 'CodyCaseState',
    default: []
})

// 원하는 옷의 조합에 포함되는 의류 종류가 저장되는 배열
export const CodyItemListState = atom({
    key: "CodyItemListState",
    default: []
})

export const CodyQuesThreeState = selector({
    key: "CodyQuesThreeState",
    get: ({ get })=>{
        let max_num = get(CodyItemListState).length;
        let result = [];
        for(let i=0; i<max_num; i++){
            result = result.concat([{
                data: get(CodyTagState(i+2)),
                ect: get(CodyOtherState(i+2))
            }])
        }
        return result;
    }
})


export const CodyColorstate = atomFamily({
    key: "CodyColorState",
    default: []
})

export const CodyQuesFourState = selector({
    key: "CodyQuesFourState",
    get: ({ get }) => {
        return get(Colorstate(0));
    }
})

export const CodyQuesFiveState = selector({
    key: "CodyQuesFiveState",
    get: ({ get }) => {
        return get(Colorstate(1));
    }
})

// 태그 한 개만 선택될 때 사용되는 state
export const CodyOneTagState = atomFamily({
    key: "CodyOneTagState",
    default: -1
})

export const CodyQuesSixState = selector({
    key: "CodyQuesSixState",
    get: ({ get })=>{
        return {
            quesOne: get(CodyTagState(7)),
            quesTwo: get(CodyOneTagState(0)),
            quesThree: get(CodyOneTagState(1))
        };
    }
})

export const CodyQuesSevenState = selector({
    key: "CodyQuesSevenState",
    get: ({ get })=>{
        return {
            quesOne: get(CodyOneTagState(7)),
            quesTwo: "img url 배열",
            quesThree: get(CodyOtherState(8))
        };
    }
})