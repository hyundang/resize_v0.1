import React, { useState, useEffect } from 'react';
import Card from '../common/CardContainer';

const PageNine  = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsShow(true);
        }, 3000)
    }, [])

    return(
        <>
            <Card isShow={isShow}/>
        </>
    )
}

export default PageNine;