import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Modal } from "../../components/common";


export default ({setModalVisible}) => {
    return(
        <Modal setModalVisible={setModalVisible}>
            <div style={{fontSize:'1.8rem',fontWeight:'bold'}}>리사이즈 홍보 및 마케팅 이용 동의 전문</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                귀하는 개인(신용)정보의 선택적인 수집∙이용, 
                제공에 대한 동의를 거부할 수 있습니다. 
                다만, 동의하지 않을 경우 관련 편의제공(이벤트 안내, 공지사항, 할인행사)안내 등 
                이용 목적에 따른 혜택에 제한이 있을 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                그 밖에 계약과 관련된 불이익은 없으며 동의한 경우에도 귀하는 동의를 철회하거나 
                마케팅 목적으로 귀하에게 연락하는 것을 중지하도록 요청할 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>1. 수집 및 이용목적</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                고객에 대한 편의제공, 서비스 발전, 개인 맞춤형 서비스 제공, 
                귀사 및 제휴업체의 상품·서비스 안내 및 이용권유, 사은·판촉행사 등의 마케팅 활동, 
                시장조사 및 상품·서비스 개발연구 등을 목적으로 수집·이용됩니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>2. 수집 및 이용항목</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - 개인식별정보: 성명, 아이디, 비밀번호, 휴대폰번호, 생년월일, 성별, 인스타그램ID, 이메일, 직업 등
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>3. 보유기간</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                보유기간은 동의일로부터 회원 탈퇴 혹은 마케팅 동의 해제 시까지 보유·이용이며 
                자세한 내용은 개인정보처리방침에서 확인 가능합니다.
            </div>
        </Modal>
    )
}
