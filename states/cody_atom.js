import { atom, atomFamily, selector } from 'recoil';

export const CodyPageNumState = atom({
    key: "CodyPageNumState",
    default: 0
})

export const CodyCaseState = atom({
    key: 'CodyCaseState',
    default: []
})


//question 1~3 state 만들기


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

