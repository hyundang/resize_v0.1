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