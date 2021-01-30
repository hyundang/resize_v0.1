import { atom } from 'recoil';

export const QuestionNumberState = atom({
    key: 'QuestionNumberState',
    default: 0
});

export const AnswerState = atom({
    key: 'AnswerState',
    default: []
})

export const LoadingState = atom({
    key: 'LoadingState',
    default: true
})

export const FirstBackImgState = atom({
    key: 'FirstBackImgState',
    default: true
})


export const SecondBackImgState = atom({
    key: 'SecondBackImgState',
    default: true
})

export const ThirdBackImgState = atom({
    key: 'ThirdBackImgState',
    default: true
})

export const FourthBackImgState = atom({
    key: 'FourthBackImgState',
    default: true
})