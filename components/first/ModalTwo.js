import React, { useEffect, useState } from "react";
import styled from "styled-components";
// components
import { Modal } from "../../components/common";


export default ({setModalVisible}) => {
    return(
        <Modal setModalVisible={setModalVisible}>
            <div style={{fontSize:'1.8rem',fontWeight:'bold'}}>개인정보 정보처리방침 전문</div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 1조「총칙」</div>
            <div style={{height:'1.5rem'}}/>
            <div>“리사이즈”는 이용자들의 개인정보를 중요시하며 고객들의 개인정보를 보호하기 
                위해 최선을 다하고 있습니다. 따라서 「통신비밀보호법」,
                「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등과 관련된 법규를 
                준수하기 위해 [개인정보 처리방침]을 제정하고 이를 준수하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>리사이즈는 다음 개인정보 처리방침을 통하여 이용자들의 개인정보가 
                어떠한 용도로 이용되고 있으며 어떠한 방식으로 관리되고 있는지 또한 
                개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려 드립니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈의 개인정보 처리방침은 관련 법률 및 지침의 변경이나 회사 내부 운영방침의 
                변경 등으로 인하여 개정될 수 있습니다. 개인정보 처리방침 이 변경될 경우 변경사항은 
                홈페이지에 게시됩니다. 
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 2 조 「개인정보 수집항목 및 수집/이용목적」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                리사이즈가 개인정보 보호법 제32조에 따라 등록․공개하는 개인정보파일의 처리목적은 
                다음과 같습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>1. 수집 항목</div>
            <div style={{height:'1.5rem'}}/>
            <div>- 필수 수집 항목</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                1) 성명, 휴대폰번호, 생년월일, 성별, 직업, 이메일, 신체사이즈
            </div>
            <div>
                2) 선호 스타일, 선호 색상, 싫어하는 색상 등 개인 선호와 관련된 정보
            </div>
            <div>
                3) IP 주소, 방문일시, 쿠키, 기기정보 등 서비스 이용기록
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                수집된 정보는 서비스의 발전, 알고리즘 개발, 회원관리, 마케팅 및 광고 등에 활용됩니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>2. 이용목적</div>
            <div style={{height:'1.5rem'}}/>
            <div>
                1) 스타일링 큐레이션 결과 전송, 본인 확인 절차에 이용
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                2) 개인맞춤 취향 분석, 개인맞춤 스타일링 결과 제작, 알고리즘 개발에 이용
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                3) 고객만족도관리, 불량회원 관리, 마케팅, 데이터 분석에 이용, 고객만족도관리, 불량회원 관리, 마케팅, 데이터 분석에 이용
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                4) 개인맞춤 취향 분석, 개인맞춤 스타일링 결과 제작에 이용
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 3 조 「개인정보 수집방법」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            회원가입 과정에서 이용자가 개인정보 수집에 동의하고 정보를 직접 입력하는 경우에 다음과 같은 정보가 수집됩니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            - 성명, 아이디, 비밀번호, 휴대폰번호, 생년월일, 성별, 인스타그램ID, 이메일, 직업
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            서비스 이용 과정에서 이용자가 개인정보 수집에 동의하고 정보를 직접 입력하는 경우에 다음과 같은 정보가 수집됩니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            - 신체사이즈, 선호 스타일, 선호 색상, 싫어하는 색상, 싫어하는 소재, 싫어하는 디테일 등 개인선호와 관련된 정보
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            이용자가 리사이즈 웹사이트에 접속하여 서비스를 이용하는 경우 로그와 관련된 정보, 쿠키 등의 서비스 이용기록이 자동으로 수집될 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - IP 주소, 방문일시, 쿠키, 기기정보 등 서비스 이용기록
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            리사이즈와 제휴한 외부 기업 혹은 단체에 개인정보 제공 동의가 된 경우 이용자의 개인정보를 제공받을 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            고객센터, 카카오톡, 웹사이트를 통한 상담 시 개인정보 및 상담 내용이 수집될 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 4 조 「개인정보의 처리 및 보유 기간」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ① 리사이즈는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집시에 동의 받은 개인정보 보유,이용기간 내에서 개인정보를 처리, 보유합니다. 이용자의 개인정보는 개인정보 수집 및 이용목적이 달성되면 지체없이 파기합니다. 다만, 보존할 필요가 있는 경우 관계법령에 따른 기간동안 보관합니다. 보관되는 정보는 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>1) 로그인 기록(로그기록, IP 주소, 기기정보 등 서비스 이용기록) 은 통신비밀보호법에 따라 3개월동안 보유됩니다.</div>
            <div>2) 표시ㆍ광고에 관한 기록은 전자상거래법에 따라 6개월동안 보유됩니다.</div>
            <div>3) 소비자의 불만 또는 분쟁처리에 관한 기록은 전자상거래법에 따라 3년동안 보유됩니다.</div>
            <div>4) 계약 또는 청약철회 등에 관한 기록은 전자상거래법에 따라 5년동안 보유됩니다.</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ③ 파기절차 및 파기방법
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            &#12685;파기절차
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            &#12685;파기방법
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다. 
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 5 조 「개인정보처리 위탁」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ① 리사이즈는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>1) Notion: 내부 커뮤니케이션 및 협업 </div>
            <div>2) Slack: 내부 커뮤니케이션 및 협업 </div>
            <div>3) Amazon Web Services, Inc.: 데이터 보관</div>
            <div>4) ㈜카카오, ㈜컴홈: 카카오톡 알림톡 발송서비스, 주요서비스 안내 및 고객 CS</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            리사이즈는 위탁계약 체결시 개인정보 보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            또한 위의 수탁업체 외에 서비스 이용 및 통계 분석을 목적으로 로그 분석툴인 Google Analytics 도구를 사용하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 6 조 「이용자의 권리와 의무」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ① 정보주체는 리사이즈에 대해 언제든지 개인정보 열람,정정,삭제,처리정지 요구 등의 권리를 행사할 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ② 제1항에 따른 권리 행사는 리사이즈에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편 등을 통하여 하실 수 있으며 리사이즈 이에 대해 지체 없이 조치하겠습니다. 단, 해당 기간 내에 응답할 수 없는 정당한 사유가 있을 때에는 이용자에게 그 사유를 알리고 연기할 수 있으며, 그 사유가 소멸하면 지체없이 응답합니다
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ② 리사이즈는 다음과 같은 사유로 개인정보 열람 또는 처리정지를 제한하거나 거절할 수 있으며, 이용자에게 그 사유를 지체없이 알리고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ③ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다. 이 경우 개인정보 처리 방법에 관한 고시(제2020-7호) 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ④ 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ⑤ 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ⑥ 리사이즈는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의 요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를 확인합니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 7 조 「개인정보 자동 수집 장치의 설치ㆍ운영 및 거부」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ① 리사이즈에서는 이용자 여러분에게 개인화된 서비스를 제공하기 위하여 '쿠키(cookie)'를 사용하기도 합니다. '쿠키(cookie)'는 HTTP서버에서 사용자의 브라우저에게 보내는 조그마한 데이터 꾸러미로서 회원의 컴퓨터 하드드라이브에 저장됩니다. 쿠키에는 사용한 웹사이트의 정보 및 이용자의 개인정보가 담길 수 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ② 리사이즈는 다음과 같은 목적을 위해 쿠키를 사용합니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            가. 쿠키의 사용 목적
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - 회원과 비회원의 접속 빈도나 방문 시간 등을 분석
            </div>
            <div>
                - 이용자의 취향과 관심분야 파악 및 자취 추적
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            나. 쿠키 설정 거부 방법
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                - 이용자는 쿠키 수집에 대한 선택권을 가지고 있습니다. 따라서 이용자는 웹 브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.
            </div>
            <div>
                - 다만, 쿠키의 저장을 거부할 경우에는 로그인이 필요한 회사의 일부 서비스는 이용에 어려움이 있을 수 있습니다.
            </div>
            <div>
                - Internet Explorer의 기준
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            웹 브라우저 상단의 도구 메뉴 &gt; 인터넷 옵션 &gt; 개인정보 &gt; 설정
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>- Chrome의 기준</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            웹 브라우저 우측의 설정 메뉴 &gt; 화면 하단의 고급 설정 표시 &gt; 개인정보의 콘텐츠 설정 버튼 &gt; 쿠키
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 8 조 「개인정보의 안정성 확보조치」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            회사는 개인정보의 안전성 확보를 위하여 다음과 같은 조치를 취하고 있습니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            관리적 조치 : 내부관리계획의 수립 및 시행 기술적 조치 : 개인정보처리시스템 등의 접근권한 관리, 비밀번호의 암호화, 보안프로그램의 설치 등 물리적 조치 : 자료보관실의 접근통제
            </div>
            <div style={{height:'1.5rem'}}/>
            <div style={{fontWeight:'bold'}}>제 9 조 「개인정보 보호책임자」</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ① 리사이즈는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.  
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>- 성명: 김희수</div>
            <div>- 직책: CEO</div>
            <div>- 이메일: resize.official@resize.co.kr</div>
            <div style={{height:'1.5rem'}}/>
            <div>
            ② 정보주체께서는 리사이즈 의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 리사이즈는 정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
            부칙 이 개인정보처리방침은 2021년 01월 13일에 개정되었으며 정부의 정책 및 정보보호 유관법령 또는 보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일 전부터 공지사항을 통해 고지할 것입니다.
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                
            </div>
            <div style={{height:'1.5rem'}}/>
            <div>
                
            </div>
            <div style={{height:'1.5rem'}}/>
        </Modal>
    )
}
