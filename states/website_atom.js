import { atom } from 'recoil';

export const SexState = atom({
    key: "SexState",
    default: -1
})

export const KategorieState = atom({
    key: "KategorieState",
    default: 0
})

export const VisitState = atom({
    key: "VisitState",
    default: ""
})

export const PageNumState = atom({
    key: "PageNumState",
    default: 0
})