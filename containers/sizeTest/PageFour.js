import React, { useState, useEffect } from 'react';
import Card from '../common/CardContainer';

const PageFour  = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsShow(true);
        }, 2000)
    }, [])

    return(
        <>
            <Card isShow={isShow}/>
        </>
    )
}

export default PageFour;