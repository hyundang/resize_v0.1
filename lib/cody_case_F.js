function cody_case_F(data) {
    if(data.length === 1){
        switch (data[0]) {
            case 8:
                return [1, 2]
            case 9:
                return [1, 2, 5]
            case 10:
                return [1, 3]
            case 11:
                return [1, 3, 5]
            case 12:
                return [4, 5]
            case 13:
                return [5]
            default:
                return [1, 2, 3, 4, 5]
        }
    }
    else{
        if(data.includes(14)){
            return [1, 2, 3, 4, 5]
        }
        else if(data.includes(8)){
            if(data.includes(9))
                return [1, 2, 5]
            if(data.includes(10))
                return [1, 2, 3]
            if(data.includes(11))
                return [1, 2, 3, 5]
            if(data.includes(12))
                return [1, 2, 4, 5]
            if(data.includes(13))
                return [1, 2, 4]
        }
        else if(data.includes(9)){
            if(data.includes(10))
                return [1, 2, 3, 5]
            if(data.includes(11))
                return [1, 2, 3, 5]
            if(data.includes(12))
                return [1, 2, 4, 5]
            if(data.includes(13))
                return [1, 2, 4, 5]
        }
        else if(data.includes(10)){
            if(data.includes(11))
                return [1, 3, 5]
            if(data.includes(12))
                return [1, 3, 4, 5]
            if(data.includes(13))
                return [1, 3, 4]
        }
        else if(data.includes(11)){
            return [1, 3, 4, 5]
        }
        else if(data.includes(12)){
            if(data.includes(13))
                return [4, 5]
        }
    }
    // 리턴은 [1,2~5]형식. 1~5는 각각 상의~아우터
}

export default cody_case_F