import React, {useEffect, useState} from "react";
import styled from "styled-components";


export default ({data}) => {
    const [isOneClick, setIsOneClick] = useState(false);
    const [isTwoClick, setIsTwoClick] = useState(false);
    const [isThreeClick, setIsThreeClick] = useState(false);
    
    // 선택한 데이터가 담긴 배열(1순위: index=0, 2순위: index=1..) ex)[3,11,9]-> 1순위는 id=3인 이미지
    const [selectData, setSelectData] = useState([]);
    
    return(
        <>
        <Wrap>
            {data.map((style, idx)=>{
                // 스타일 한 개에 대한 선택지, idx=0~9까지(=스타일 개수)
                return  <StyleChoose
                            key={idx}
                            id={idx}
                            style={style}
                            isOneClick={isOneClick} setIsOneClick={setIsOneClick} 
                            isTwoClick={isTwoClick} setIsTwoClick={setIsTwoClick} 
                            isThreeClick={isThreeClick} setIsThreeClick={setIsThreeClick} 
                            selectData={selectData} setSelectData={setSelectData}
                        />
                
            })}
        </Wrap>
        </>
    )
}

const Wrap = styled.div`
    width: 100%;
    padding: 0 2.4rem;
    display: grid;
    grid-template-columns: 1fr;
`;


const StyleChoose = ({id, style, isOneClick, setIsOneClick, isTwoClick, setIsTwoClick, isThreeClick, setIsThreeClick, selectData, setSelectData}) => {
    return(
        <StyleWrap>
            <div style={{display:'flex', flexDirection:'row',justifyContent:'space-between',width:'32.8rem'}}>
                {style.imgs.map((img, idx)=>{
                    // 선택지(=이미지 칸), idx=0,1=>총9*2(=스타일 개수*2)
                    return <StyleImg 
                                imgpath={img} id={id*2+idx} 
                                isOneClick={isOneClick} setIsOneClick={setIsOneClick} 
                                isTwoClick={isTwoClick} setIsTwoClick={setIsTwoClick} 
                                isThreeClick={isThreeClick} setIsThreeClick={setIsThreeClick} 
                                selectData={selectData} setSelectData={setSelectData}
                            />
                })}
            </div>
            <StyleTextWrap>
                <StyleText>{style.name}</StyleText>
                <div  style={{display:'flex', flexDirection:'row'}}>
                    {style.tag.map((tag, idx)=>{
                        // 해시태그들
                        return <StyleTag key={idx}>#{tag}</StyleTag>
                    })}
                </div>
            </StyleTextWrap>
        </StyleWrap>
    )
}

const StyleImg = ({imgpath, id, isOneClick, setIsOneClick, isTwoClick, setIsTwoClick, isThreeClick, setIsThreeClick, selectData, setSelectData}) => {
    const [isClicked, setIsClicked] = useState(false);
    const [priority, setPriority] = useState(0);

    useEffect(()=>{
        // 선택한 칸 다시 눌러서 취소하여 값 변화가 발생했을 때
        for(var i in selectData){
            if(id===selectData(i)){
                setPriority(i+1);
            }
        }
    }, [selectData])

    const handleClick = (e) => {
        if(!isOneClick){
            // 1순위 선택
            setIsOneClick(true);
            setIsClicked(true);
            setSelectData([e.target.id]);
            setPriority(1);
        }
        else if(!isTwoClick){
            // 2순위 선택
            setIsTwoClick(true);
            setIsClicked(true);
            setSelectData(selectData.concat([e.target.id]));
            setPriority(2);
        }
        else if(!isThreeClick){
            // 3순위 선택
            setIsThreeClick(true);
            setIsClicked(true);
            setSelectData(selectData.concat([e.target.id]));
            setPriority(3);
        }
        else{
            if(isClicked){
                // 선택한 것을 다시 눌러서 취소했을 때
                setIsClicked(false);
                setPriority(0);
                if(isThreeClick){
                    // 3개가 이미 선택되어 있었을 때
                    setIsThreeClick(false);
                }
                else if(isTwoClick){
                    // 2개가 이미 선택되어 있었을 때
                    setIsTwoClick(false);
                }
                else{
                    // 1개가 이미 선택되어 있었을 때
                    setIsOneClick(false);
                }
                // 선택한 데이터가 담긴 배열에서 현재 id값 삭제.
                setSelectData(selectData.filter((s, idx)=>{
                    return s !== e.target.id;
                }))
            }
        }
    }

    return(
        <StyleImgBox onClick={handleClick} imgpath={imgpath} id={id}>
            <PriorityText isClicked={isClicked}>{priority}</PriorityText>
        </StyleImgBox>
    )
}

const StyleWrap = styled.div`
    width: 32.8rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
`;

const StyleImgBox = styled.div`
    width: 15.6rem;
    height: 15.6rem;
    border-radius: 2.3rem;
    border: solid 0.1rem #dac2a3;
    /* background-image: url() / center center; */
`;

const PriorityText = styled.div`
    width: 15.4rem;
    height: 15.4rem;
    border-radius: 2.2rem;
    opacity: 0.55;
    display: ${props=>props.isClicked? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: #5d5757;
    color: white;
`;

const StyleTextWrap = styled.div`
    height: 2.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 0.8rem;
`;

const StyleText = styled.div`
    width: 6.4rem;
    height: 2.3rem;
    margin-right: 0.5rem;
    font-size: 1.4rem;
    font-weight: bold;
    letter-spacing: -0.35px;
    color: ${({theme})=>theme.colors.beige};
`;

const StyleTag = styled.div`
    height: 2.2rem;
    padding: 0.2rem 0.8rem;
    margin-left: 0.5rem;
    opacity: 0.43;
    border-radius: 1.1rem;
    border: solid 0.1rem #707070;
    background-color: white;
`;