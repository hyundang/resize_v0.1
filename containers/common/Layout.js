import React from 'react';
import {Helmet} from 'react-helmet';
import KakaoShareBtn from './KakaoShareBtn';

const Layout = ({imgurl}) => {
    return(
        <>
            <div className="layout">
                <Helmet>
                    <script src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
                </Helmet>
                <KakaoShareBtn imgurl={imgurl}/>
            </div>
        </>
    )
}

export default Layout;