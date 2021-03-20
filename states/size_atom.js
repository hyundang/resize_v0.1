import { atom, selector, atomFamily } from 'recoil';
import { SexState } from "./website_atom";
import { UserIDState } from "./last_atom";

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

const size_ques_num_two = 4;

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

export const PantsSizeState = atom({
    key: "PantsSizeState",
    default: ""
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

export const SizeID = atom({
    key:"SizeID",
    default: 0
})


// post 하는 데이터
export const TotalSizeDataState = selector({
    key: "TotalSizeDataState",
    get: ({ get }) => {
        if(get(SexState)===0){
            return {
                user: get(UserIDState),
                height: Number(get(SizeQuesOneState).height),
                weight: Number(get(SizeQuesOneState).weight),
                size_face: get(SizeQuesTwoState)[0],
                size_neck: get(SizeQuesTwoState)[1],
                size_shoulder: get(SizeQuesTwoState)[2],
                size_arm: get(SizeQuesTwoState)[3],
                size_chest: get(SizeQuesTwoState)[4],
                size_waist: get(SizeQuesTwoState)[5],
                size_pelvis: get(SizeQuesTwoState)[6],
                size_hip: get(SizeQuesTwoState)[7],
                size_thigh: get(SizeQuesTwoState)[8],
                size_calf: get(SizeQuesTwoState)[9],
                size_ratio: get(SizeQuesThreeState)[0],
                fit_hate: get(SizeQuesFourState).cons,
                fit_like: get(SizeQuesFourState).pros,
                size_top1: get(SizeQuesFiveState).one.join(','),
                size_top2: get(SizeQuesFiveState).two.join(','),
                size_pants1: get(SizeQuesFiveState).three.join(','),
                size_pants2: get(SizeQuesFiveState).four.join(','),
                face_type: get(SizeQuesThreeState)[1],
                skin_tone: get(SizeQuesThreeState)[2],
                shoulder_type: get(SizeQuesThreeState)[3],
                pants_standard: get(PantsSizeState),
            }
        }
        else{
            return {
                user: get(UserIDState),
                height: Number(get(SizeQuesOneState).height),
                weight: Number(get(SizeQuesOneState).weight),
                size_face: get(SizeQuesTwoState)[0],
                size_neck: get(SizeQuesTwoState)[1],
                size_shoulder: get(SizeQuesTwoState)[2],
                size_arm: get(SizeQuesTwoState)[3],
                size_chest: get(SizeQuesTwoState)[4],
                size_waist: get(SizeQuesTwoState)[5],
                size_pelvis: get(SizeQuesTwoState)[6],
                size_hip: get(SizeQuesTwoState)[7],
                size_thigh: get(SizeQuesTwoState)[8],
                size_calf: get(SizeQuesTwoState)[9],
                size_ratio: get(SizeQuesThreeState)[0],
                fit_hate: get(SizeQuesFourState).cons,
                fit_like: get(SizeQuesFourState).pros,
                size_top1: get(SizeQuesFiveState).one.join(', '),
                size_top2: get(SizeQuesFiveState).two.join(', '),
                size_top3: get(SizeQuesFiveState).three.join(', '),
                size_pants1: get(SizeQuesFiveState).four.join(', '),
                size_pants2: get(SizeQuesFiveState).five.join(', '),
                face_type: get(SizeQuesThreeState)[1],
                skin_tone: get(SizeQuesThreeState)[2],
                shoulder_type: get(SizeQuesThreeState)[3],
                pants_standard: get(PantsSizeState),
            }
        }
    }
})