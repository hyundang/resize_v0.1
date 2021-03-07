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
            questwo: {
                like: get(DetailPageLikeState(1)),
                opinion: get(DetailPageOpinionState(1))
            }
        }
    }
})