import { atom, atomFamily, selector } from 'recoil';

export const LastPageNumState = atom({
    key: "LastPageNumState",
    default: 0
})

export const UserInfoState = atomFamily({
    key: "UserInfoState",
    default: ""
})

export const UserJobState = atom({
    key: "UserJobState",
    default: -1
})

export const CheckedListState = atom({
    key: "CheckedListState",
    default: []
})

export const TotalUserInfoState = selector({
    key: "TotalUserInfoState",
    get: ({ get })=>{
        return {
            name: get(UserInfoState(0)),
            birth: get(UserInfoState(1)),
            phone: get(UserInfoState(2)),
            email: get(UserInfoState(3))+'@'+get(UserInfoState(4)),
            instagram: get(UserInfoState(5)),
            job: get(UserJobState),
            policy: get(CheckedListState)
        }
    }
})