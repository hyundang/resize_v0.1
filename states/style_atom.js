import { atom, selector } from 'recoil';

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
        return {
            style_like: get(QuesTwoState),
            style_hate: get(QuesThreeState),
            style_want: get(QuesFourState),
            brand: get(QuesTenFiState),
            brandName: get(QuesTenSState).brand,
            platform: get(QuesTenSState).site,
        }
    }
})
