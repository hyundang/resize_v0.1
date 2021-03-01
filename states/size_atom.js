import { atom, selector, atomFamily } from 'recoil';
import { SexState } from "./website_atom";

export const SizePageNumState = atom({
    key: "SizePageNumState",
    default: 0
})

export const UserHnWState = atomFamily({
    key: "UserHnWState",
    default: ""
})


export const SizeQuesOneState = selector({
    key: "SizeQuesOneState",
    get: ({ get }) => {
        return {
            height: get(UserHnWState(0)),
            weight: get(UserHnWState(1))
        }
    }
})

export const BodySizeState = atomFamily({
    key: "BodySizeState",
    default: -1
})

const size_ques_num_one = 10;

export const SizeQuesTwoState = selector({
    key: "SizeQuesTwoState",
    get: ({ get }) => {
        let result = [];
        for (let i=0; i<size_ques_num_one; i++){
            const data = get(BodySizeState(i));
            result = result.concat([data]);
        }
        return result;
    }
})

export const BodyDetailState = atomFamily({
    key: "BodyDetailState",
    default: -1
})

const size_ques_num_two = 5;

export const SizeQuesThreeState = selector({
    key: "SizeQuesThreeState",
    get: ({ get }) => {
        let result = [];
        for (let i=0; i<size_ques_num_two; i++){
            const data = get(BodyDetailState(i));
            result = result.concat([data]);
        }
        return result;
    }
})

export const BodyPnCState = atomFamily({
    key: "BodyPnCState",
    default: ""
})

export const SizeQuesFourState = selector({
    key: "SizeQuesFourState",
    get: ({ get }) => {
        return {
            cons: get(BodyPnCState(0)),
            pros: get(BodyPnCState(1))
        }
    }
})

export const ClothesSizeState = atomFamily({
    key: "ClothesSizeState",
    default: []
})

export const SizeQuesFiveState = selector({
    key: "SizeQuesFiveState",
    get: ({ get }) => {
        if(get(SexState)===0){
            return {
                one: get(ClothesSizeState(0)),
                two: get(ClothesSizeState(1)),
                three: get(ClothesSizeState(2)),
                four: get(ClothesSizeState(3))
            }
        }
        else{
            return {
                one: get(ClothesSizeState(0)),
                two: get(ClothesSizeState(1)),
                three: get(ClothesSizeState(2)),
                four: get(ClothesSizeState(3)),
                five: get(ClothesSizeState(4))
            }
        }
    }
})