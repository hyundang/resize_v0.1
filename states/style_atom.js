import { atom, selector } from 'recoil';
import { UserIDState } from "./last_atom";
import { SexState } from './website_atom';

export const StylePageNumState = atom({
    key: "StylePageNumState",
    default: 0
})

export const QuesTwoState = atom({
    key: "QuesTwoState",
    default: []
})

export const QuesThreeState = atom({
    key: "QuesThreeState",
    default: []
})

export const QuesFourState = atom({
    key: "QuesFourState",
    default: []
})

export const QuesFiveState = atom({
    key: "QuesFiveState",
    default: []
})

export const QuesSixState = atom({
    key: "QuesSixState",
    default: []
})

export const QuesSevenState = atom({
    key: "QuesSevenState",
    default: []
})

export const QuesEightState = atom({
    key: "QuesEightState",
    default: ""
})

export const QuesNineState = atom({
    key: "QuesNineState",
    default: []
})

export const QuesTenState = atom({
    key: "QuesTenState",
    default: []
})

export const QuesTenOState = atom({
    key: "QuesTenOState",
    default: []
})

export const QuesTenTwState = atom({
    key: "QuesTenTwState",
    default: []
})

export const QuesTenTrState = atom({
    key: "QuesTenTrState",
    default: []
})

export const SkirtLengthState = atom({
    key: "SkirtLengthState",
    default: []
})

export const QuesTenFoState = atom({
    key: "QuesTenFoState",
    default: []
})

export const QuesTenFiState = atom({
    key: "QuesTenFiState",
    default: []
})

export const SiteState = atom({
    key: "SiteState",
    default: []
})

export const BrandNameState = atom({
    key: "BrandNameState",
    default: ""
})

export const SiteNameState = atom({
    key: "SiteNameState",
    default: ""
})

export const QuesTenSState = selector({
    key: "QuesTenSState",
    get: ({ get }) => {
        let site = get(SiteState);
        let brand = get(BrandNameState);
        let site_name = get(SiteNameState);
        return {
            brand: brand,
            site: site,
            siteName: site_name
        }
    }
})

export const TotalStyleDataState = selector({
    key: 'TotalStyleDataState',
    get: ({ get }) => {
        if(get(SexState)===0){
            return {
                user: get(UserIDState),
                style_like: get(QuesTwoState).join(', '),
                style_hate: get(QuesThreeState).join(', '),
                style_want: get(QuesFourState).join(', '),
                type_hate: get(QuesEightState),
                brand: get(QuesTenFiState).join(', '),
                brandName: get(QuesTenSState).brand,
                platform: get(QuesTenSState).site.join(', '),
                platform_etc: get(QuesTenSState).siteName,
                color_main: get(QuesTenState).join(', '),
                detail: get(QuesFiveState),
                material: get(QuesSixState),
                neck: get(QuesSevenState),
                color_tone: get(QuesNineState),
                pants_fit: get(QuesTenTwState),
                pants_waist: get(QuesTenTrState),
                top_length: get(QuesTenFoState),
            }
        }
        else{
            return {
                user: get(UserIDState),
                style_like: get(QuesTwoState).join(', '),
                style_hate: get(QuesThreeState).join(', '),
                style_want: get(QuesFourState).join(', '),
                type_hate: get(QuesEightState),
                brand: get(QuesTenFiState).join(', '),
                brandName: get(QuesTenSState).brand,
                platform: get(QuesTenSState).site.join(', '),
                platform_etc: get(QuesTenSState).siteName,
                color_main: get(QuesTenState).join(', '),
                detail: get(QuesFiveState),
                material: get(QuesSixState),
                neck: get(QuesSevenState),
                color_tone: get(QuesNineState),
                pants_fit: get(QuesTenTwState),
                pants_waist: get(QuesTenTrState),
                top_length: get(QuesTenFoState),
                skirt_length: get(SkirtLengthState),
            }
        }
    }
})
