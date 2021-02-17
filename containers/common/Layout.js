import React, {useEffect} from 'react';
import KakaoShareBtn from './KakaoShareBtn';

const Layout = ({imgurl}) => {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
        script.async = true
        document.body.appendChild(script)
        return () => {
          document.body.removeChild(script) 
        }
    }, [])


    return(
        <>
            <KakaoShareBtn imgurl={imgurl}/>
        </>
    )
}

export default Layout;