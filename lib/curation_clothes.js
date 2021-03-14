const curation_clothes = (data) => {
    let curationData = [];
    let topData = {}
    let pantsData = {}
    let skirtData = {}
    let dressData = {}
    let outerData = {}

    const cloneObj = obj => JSON.parse(JSON.stringify(obj))

    for(const [key, value] of Object.entries(data)){
        if(key.includes("top")){
            if(key==='top' & value!==null){
                topData = cloneObj(value);
            }
            if(key==='top_color'){
                topData['color'] = value;
            }
            if(key==='top_size'){
                topData['size'] = value;
            }
            if(Object.keys(topData).length===6)
                curationData.push(topData);
        }
        
        if(key.includes('pants')){
            if(key==='pants' & value!==null){
                pantsData = cloneObj(value);
            }
            if(key==='pants_color'){
                pantsData['color'] = value;
            }
            if(key==='pants_size'){
                pantsData['size'] = value;
            }
            if(Object.keys(pantsData).length===6)
                curationData.push(pantsData);
        }

        if(key.includes('skirt')){
            if(key==='skirt' & value!==null){
                skirtData = cloneObj(value);
            }
            if(key==='skirt_color'){
                skirtData['color'] = value;
            }
            if(key==='skirt_size'){
                skirtData['size'] = value;
            }
            if(Object.keys(skirtData).length===6)
                curationData.push(skirtData);
        }

        if(key.includes('dress')){
            if(key==='dress' & value!==null){
                dressData = cloneObj(value);
            }
            if(key==='dress_color'){
                dressData['color'] = value;
            }
            if(key==='dress_size'){
                dressData['size'] = value;
            }
            if(Object.keys(dressData).length===6)
                curationData.push(dressData);
        }

        if(key.includes('outer')){
            if(key==='outer' & value!==null){
                outerData = cloneObj(value);
            }
            if(key==='outer_color'){
                outerData['color'] = value;
            }
            if(key==='outer_size'){
                outerData['size'] = value;
            }
            if(Object.keys(outerData).length===6)
                curationData.push(outerData);
        }
    }
    return curationData;
}

export default curation_clothes;