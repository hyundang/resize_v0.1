function cody_case_M(data) {
    if(data.length === 1){
        switch (data[0]) {
            case 0:
                return [1, 2]
            case 1:
                return [1, 2, 3]
            default:
                return [1, 2, 3]
        }
    }
    else{
        return [1, 2, 3]
    }
    // 리턴은 [1,2~5]형식. 1~5는 각각 상의~아우터
}


export default cody_case_M