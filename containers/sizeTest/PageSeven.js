import React, { useState, useEffect } from 'react';
import Card from '../common/CardContainer';

const PageSeven  = () => {
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsShow(true);
        }, 1500)
    }, [])

    return(
        <>
            <Card isShow={isShow}/>
        </>
    )
}

export default PageSeven;