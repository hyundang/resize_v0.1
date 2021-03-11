const SortData = async (data) => {
    let array = data;
    function custonSort(a, b) {
        if(a.id == b.id){ 
            return 0
        } 
        return  a.id > b.id ? 1 : -1;
    }
    array.sort(custonSort);
    return array;
}

export default SortData;