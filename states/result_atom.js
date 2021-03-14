import { atom, atomFamily, selector } from 'recoil';

export const DetailPageNumState = atom({
    key: "DetailPageNumState",
    default: 0
})

export const DetailPageLikeState = atomFamily({
    key: "DetailPageLikeState",
    default: -1
})

export const DetailPageOpinionState = atomFamily({
    key: "DetailPageOpinionState",
    default: ""
})

export const DetailPageDataState = selector({
    key: "DetailPageDataState",
    get: ({ get }) => {
        return {
            quesOne: {
                like: get(DetailPageLikeState(0)),
                opinion: get(DetailPageOpinionState(0))
            },
            quesTwo: {
                like: get(DetailPageLikeState(1)),
                opinion: get(DetailPageOpinionState(1))
            }
        }
    }
})

export const RequestReasonState = atom({
    key: "RequestReasonState",
    default: -1
})

export const RequestDetailState = atomFamily({
    key: "RequestDetailState",
    default: ""
})

export const RequestDataState = selector({
    key: "RequestDataState",
    get: ({get}) => {
        return {
            quesOne: get(RequestReasonState),
            quesTwo: get(RequestDetailState(0)),
            quesThree: get(RequestDetailState(1))
        }
    }
})

export const CurationDataState = atom({
    key: "CurationDataState",
    default: {}
})