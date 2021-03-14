import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// assets
import arrow_icon from "../../../assets/img/icons/black_arrow_right.svg";


export default ({data}) => {
    return(
        <Wrap onClick={()=>window.open(data.url, '_blank')}>
            <Img src={data.photo}/>
            <InfoWrap>
                <Text style={{fontWeight:'bold',letterSpacing:'-0.35px',fontSize:'1.4rem'}}>{data.name}</Text>
                <Text>{data.color}</Text>
                <Text>{data.size}</Text>
                <Text style={{color:'#b5b5b5'}}>{data.price}</Text>
            </InfoWrap>
            <img src={arrow_icon} style={{width:'4rem'}}/>
        </Wrap>
    )
}

const Wrap = styled.div`
    width: 32rem;
    height: 11.8rem;
    padding: 2.1rem 0rem 2.1rem 1.4rem;
    border: 0.1rem solid #e3e3e3;
    display: flex;
    flex-direction: row;
`;

const Img = styled.div`
    width: 7.8rem;
    height: 7.6rem;
    margin-right: 1rem;
    background: url(${props=>props.src}) center center / cover;
`;

const InfoWrap = styled.div`
    width: 20rem;
    height: 7.6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`;

const Text = styled.div`
    font-size: 1.2rem;
    font-weight: normal;
    text-align: left;
    letter-spacing: -0.3px;
    color: ${({theme})=>theme.colors.black};
`;