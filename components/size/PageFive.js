import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
// components
import { Header, Bottom } from "../../components";
import { QuestionTwo, OverlapBtnThree } from "../../components/common";
// hooks
import useWindowSize from "../../hooks/useWindowSize";
// recoil
import { useRecoilState } from "recoil";
import { ClothesSizeState } from "../../states/size_atom";


export default ({quesNum, lastQuesNum, setPageNum, user_datas, sex}) => {
    const size = useWindowSize();
    // 항목 개수에 맞게 만들기
    const [selectOneData, setSelectOneData] = useRecoilState(ClothesSizeState(0));
    const [selectTwoData, setSelectTwoData] = useRecoilState(ClothesSizeState(1));
    const [selectThreeData, setSelectThreeData] = useRecoilState(ClothesSizeState(2));
    const [selectFourData, setSelectFourData] = useRecoilState(ClothesSizeState(3));
    const [selectFiveData, setSelectFiveData] = useRecoilState(ClothesSizeState(4));

    const [isRightOkay, setIsRightOkay] = useState(false);

    useEffect(()=>{
        if(selectOneData.length!==0 & selectTwoData.length!==0 & selectThreeData.length!==0 & selectFourData.length!==0){
            if(sex===1){
                if(selectFiveData.length!==0)
                    setIsRightOkay(true);
                else{
                    setIsRightOkay(false);
                }
            }
            else{
                setIsRightOkay(true);
            }
        }
        else{
            setIsRightOkay(false);
        }
    }, [selectOneData, selectTwoData, selectThreeData, selectFourData, selectFiveData])

    const [isShowOne, setIsShowOne] = useState(false);
    const [isShowTwo, setIsShowTwo] = useState(false);
    const [isShowThree, setIsShowThree] = useState(false);
    const [isShowFour, setIsShowFour] = useState(false);
    const [isShowFive, setIsShowFive] = useState(false);

    const veiwport_one = useRef(null);
    const veiwport_two = useRef(null);
    const veiwport_three = useRef(null);
    const veiwport_four = useRef(null);
    const veiwport_five = useRef(null);
    const target_one = useRef(null);
    const target_two = useRef(null);
    const target_three = useRef(null);
    const target_four = useRef(null);
    const target_five = useRef(null);

    useEffect(()=>{
        window.scrollTo(0,0);
        const option_one = {
            root: veiwport_one.current,
            threshold: 1,
        };
        const option_two = {
            root: veiwport_two.current,
            threshold: 1,
        };
        const option_three = {
            root: veiwport_three.current,
            threshold: 1,
        };
        const option_four = {
            root: veiwport_four.current,
            threshold: 1,
        };
        const option_five = {
            root: veiwport_five.current,
            threshold: 1,
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry)=>{
                console.log(entry);
                if(entry.isIntersecting){
                    switch (entry.target.className) {
                        case "one":
                            setIsShowOne(false);
                            break;
                        case "two":
                            setIsShowTwo(false);
                            break;
                        case "three":
                            setIsShowThree(false);
                            break;
                        case "four":
                            setIsShowFour(false);
                            break;
                        case "five":
                            setIsShowFive(false);
                            break;
                        default:
                            break;
                    }
                }
                else{
                    switch (entry.target.className) {
                        case "one":
                            setIsShowOne(true);
                            break;
                        case "two":
                            setIsShowTwo(true);
                            break;
                        case "three":
                            setIsShowThree(true);
                            break;
                        case "four":
                            setIsShowFour(true);
                            break;
                        case "five":
                            setIsShowFive(true);
                            break;
                        default:
                            break;
                    }
                }
            })
        }

        const io_one = new IntersectionObserver(handleIntersection, option_one);
        const io_two = new IntersectionObserver(handleIntersection, option_two);
        const io_three = new IntersectionObserver(handleIntersection, option_three);
        const io_four = new IntersectionObserver(handleIntersection, option_four);
        const io_five = new IntersectionObserver(handleIntersection, option_five);
        
        io_one.observe(target_one.current);
        io_two.observe(target_two.current);
        io_three.observe(target_three.current);
        io_four.observe(target_four.current);
        if(sex===1)
            io_five.observe(target_five.current);

        // return ()=>io&&io.disconnect();

    },[])

    return(
        <div style={{display:"flex", flexDirection:"column", alignItems:"center",overflow:'scroll'}}>
            <Header kategorie={1} quesNum={quesNum} lastQuesNum={lastQuesNum}/>
            <Wrap>
                {/* 블러 처리 부분... */}
                {(sex===0)?
                <>
                    <BlurBoxFirst width={size.width} top={28.5}/><BlurBoxEnd isShow={isShowOne} top={28.5}/>
                    <BlurBoxFirst width={size.width} top={36}/><BlurBoxEnd isShow={isShowTwo} top={36}/>
                    <BlurBoxFirst width={size.width} top={54.3}/><BlurBoxEnd isShow={isShowThree} top={54.3}/>
                    <BlurBoxFirst width={size.width} top={62}/><BlurBoxEnd isShow={isShowFour} top={62}/>
                </>
                :<>
                    <BlurBoxFirst width={size.width} top={28.5}/><BlurBoxEnd isShow={isShowOne} top={28.5}/>
                    <BlurBoxFirst width={size.width} top={36}/><BlurBoxEnd isShow={isShowTwo} top={36}/>
                    <BlurBoxFirst width={size.width} top={43.5}/><BlurBoxEnd isShow={isShowThree} top={43.5}/>
                    <BlurBoxFirst width={size.width} top={62}/><BlurBoxEnd isShow={isShowFour} top={62}/>
                    <BlurBoxFirst width={size.width} top={68.3}/><BlurBoxEnd isShow={isShowFive} top={68.3}/>
                </>}
                <QuestionTwo
                    quesNum={quesNum}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"상의 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[0].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_one}>
                        <BtnsInnerWrap num={user_datas[0].datas.length} >
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[0].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_one} className="one">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectOneData}
                                    setSelectData={setSelectOneData}
                                />
                                </div>
                                )
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                {/* <div style={{width:'1rem', height:'1rem',background:'black', position:'relative', zIndex:'2', right:'0', top:'20%'}} ref={target}/> */}

                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[1].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_two}>
                        <BtnsInnerWrap num={user_datas[1].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[1].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_two} className="two">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectTwoData}
                                    setSelectData={setSelectTwoData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                {(sex===1)&&
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_three}>
                        <BtnsInnerWrap num={user_datas[2].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[2].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_three} className="three">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectThreeData}
                                    setSelectData={setSelectThreeData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>}
                <div style={{marginBottom:'2.7rem'}}/>
                <QuestionTwo
                    quesNum={0}
                    quesTextOne={"평소 착용하는"}
                    quesTextTwo={"바지 사이즈는 무엇인가요?"}
                    overlapText={"중복선택"}
                />
                <div style={{marginBottom:'2.3rem'}}/>
                {(sex===0)&&
                <>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[2].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_three}>
                        <BtnsInnerWrap num={user_datas[2].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[2].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_three} className="three">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectThreeData}
                                    setSelectData={setSelectThreeData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[3].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_four}>
                        <BtnsInnerWrap num={user_datas[3].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[3].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_four} className="four">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectFourData}
                                    setSelectData={setSelectFourData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                </>
                }
                {(sex===1)&&
                <>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[3].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_four}>
                        <BtnsInnerWrap num={user_datas[3].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[3].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_four} className="four">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectFourData}
                                    setSelectData={setSelectFourData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                <div style={{width:'32rem', display:'flex', flexDirection:'column', marginBottom:'1.6rem'}}>
                    <Text>{user_datas[4].question}</Text>
                    <BtnOutterWrap width={size.width} ref={veiwport_five}>
                        <BtnsInnerWrap num={user_datas[4].datas.length}>
                            <div style={{width:'1.4rem', height:'3.3rem'}}/>
                            {user_datas[4].datas.map((item, idx)=>{
                                return (
                                <div key={idx} ref={target_five} className="five">
                                <OverlapBtnThree
                                    key={idx}
                                    id={idx}
                                    text={item}
                                    selectData={selectFiveData}
                                    setSelectData={setSelectFiveData}
                                />
                                </div>)
                            })}
                        </BtnsInnerWrap>
                    </BtnOutterWrap>
                </div>
                </>
                }
                <div style={{marginBottom:'3.6rem'}}/>
            </Wrap>
            <Bottom 
                setPageNum={setPageNum} pageNum={quesNum}
                lastQuesNum={lastQuesNum} kategorie={1}
                isLeftOkay={true} isRightOkay={isRightOkay}
            />
        </div>
    )
}

const Wrap = styled.div`
    margin-top: 11.6rem;
    margin-bottom: 8.6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.div`
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
    text-align: left;
    color: ${({theme})=>theme.colors.black};
`;


const BtnOutterWrap = styled.div`
    width: ${props=>(props.width/10-32)/2+32}rem;
    overflow: scroll;
    -ms-overflow-style: none; /* IE and Edge */
    ::-webkit-scrollbar {
        display: none;
    }
`;

const BtnsInnerWrap = styled.div`
    width: ${props=>props.num*6 + (props.num-1)*0.5 + 1.4}rem;
    height: 3.3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const BlurBoxEnd = styled.div`
    position: absolute;
    z-index: 2;
    display: ${props=>props.isShow? 'box': 'none'};
    top: ${props=>props.top}rem;
    right: 0;
    height: 1.7rem;
    box-shadow: 0 0 1rem 1rem rgba(255, 255, 255, 1);
`;

const BlurBoxFirst = styled.div`
    position: absolute;
    z-index: 2;
    top: ${props=>props.top}rem;
    left: ${props=>(props.width/10-32)/2}rem;
    height: 1.7rem;
    box-shadow: 0 0 1rem 1rem rgba(255, 255, 255, 1);
`;