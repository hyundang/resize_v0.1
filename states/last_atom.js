import { atom, atomFamily, selector } from 'recoil';
import { SexState } from "./website_atom";


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
        let isService = false;
        let isPolicy = false;
        let isMarketing = false;
        if(get(CheckedListState).includes('1')){
            isService = true;
        }
        if(get(CheckedListState).includes('2')){
            isPolicy = true;
        }
        if(get(CheckedListState).includes('3')){
            isMarketing = true;
        }

        return {
            name: get(UserInfoState(0)),
            gender: get(SexState),
            date_of_birth: get(UserInfoState(1)),
            phone: get(UserInfoState(2)),
            email: get(UserInfoState(3))+'@'+get(UserInfoState(4)),
            instragram: get(UserInfoState(5)),
            job: get(UserJobState),
            job_etc: "",
            is_terms_of_service: isService,
            is_privacy_policy: isPolicy,
            is_marketing: isMarketing,
            is_active: false,
            is_admin: false
        }
    }
})

export const UserIDState = atom({
    key: "UserIDState",
    default: 0
})