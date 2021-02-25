function cody_case_F(data) {
    if(data.length === 1){
        switch (data[0]) {
            case 0:
                return [1, 2]
            case 1:
                return [1, 2, 5]
            case 2:
                return [1, 3]
            case 3:
                return [1, 3, 5]
            case 4:
                return [4, 5]
            case 5:
                return [5]
            default:
                return [1, 2, 3, 4, 5]
        }
    }
    else{
        if(data.includes(6)){
            return [1, 2, 3, 4, 5]
        }
        else if(data.includes(0)){
            if(data.includes(1))
                return [1, 2, 5]
            if(data.includes(2))
                return [1, 2, 3]
            if(data.includes(3))
                return [1, 2, 3, 5]
            if(data.includes(4))
                return [1, 2, 4, 5]
            if(data.includes(5))
                return [1, 2, 4]
        }
        else if(data.includes(1)){
            if(data.includes(2))
                return [1, 2, 3, 5]
            if(data.includes(3))
                return [1, 2, 3, 5]
            if(data.includes(4))
                return [1, 2, 4, 5]
            if(data.includes(5))
                return [1, 2, 4, 5]
        }
        else if(data.includes(2)){
            if(data.includes(3))
                return [1, 3, 5]
            if(data.includes(4))
                return [1, 3, 4, 5]
            if(data.includes(5))
                return [1, 3, 4]
        }
        else if(data.includes(3)){
            return [1, 3, 4, 5]
        }
        else if(data.includes(4)){
            if(data.includes(5))
                return [4, 5]
        }
    }
    // 리턴은 [1,2~5]형식. 1~5는 각각 상의~아우터
}

export default cody_case_F