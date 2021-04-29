import { atom, atomFamily, selector } from 'recoil';

export const InvitationPageNumState = atom({
    key: "InvitationPageNumState",
    default: 0
})

export const InvitationCodeState = atom({
    key: "InvitationCodeState",
    default: ''
})