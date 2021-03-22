const style_F = [
    {
        id : 0,
        questionNum : 1,
        required : 1, //-1: 무제한 중복 선택, 0: 선택, 1 : 객관식, 2~: 중복선택/최대개수
        answers : [],
    },
    {
        id : 1,
        questionNum : 2,
        // answers 부분 name, tag로 바꿔주세여
        answers : [
            {
                name: "캐주얼", 
                tag: ["편안한","스포티한","귀여운"], 
                imgs:["/images/website/style/woman/female-casual1.jpg","/images/website/style/woman/female-casual2.jpg"]
            },
            {
                name: "클래식포멀", 
                tag: ["단정한", "격식있는", "세련된"], 
                imgs:["/images/website/style/woman/female-classicformal1.png","/images/website/style/woman/female-classicformal2.png"]
            }, 
            {
                name: "모던베이직", 
                tag: ["깔끔한", "단정한", "심플한"], 
                imgs:["/images/website/style/woman/female-modernbasic1.jpg","/images/website/style/woman/female-modernbasic2.jpg"]
            }, 
            {
                name: "로맨틱페미닌", 
                tag: ["단아한", "성숙한", "우아한"], 
                imgs:["/images/website/style/woman/female-romanticfeminine1.jpg","/images/website/style/woman/female-romanticfeminine2.png"]
            }, 
            {
                name: "러블리", 
                tag: ["러블리한", "귀여운", "사랑스러운"], 
                imgs:["/images/website/style/woman/female-lovely1.png","/images/website/style/woman/female-lovely2.jpg"]
            }, 
            {
                name: "스트릿", 
                tag: ["힙한", "개성있는", "유니크한"], 
                imgs:["/images/website/style/woman/female-street1.jpg","/images/website/style/woman/female-street2.jpg"]
            }, 
            {
                name: "빈티지", 
                tag: ["개성있는", "편안한", "따뜻한"], 
                imgs:["/images/website/style/woman/female-vintage1.jpg","/images/website/style/woman/female-vintage2.jpg"]
            }, 
            {
                name: "스포티", 
                tag: ["캐주얼한", "활동성있는", "편한"], 
                imgs:["/images/website/style/woman/female-sporty1.jpg","/images/website/style/woman/female-sporty2.jpg"]
            }, 
            {
                name: "섹시글램", 
                tag: ["섹시한", "화려한", "볼륨감있는"], 
                imgs:["/images/website/style/woman/female-sexyglam1.jpg","/images/website/style/woman/female-sexyglam2.jpg"]
            }, 
            {
                name: "하이틴", 
                tag: ["러블리한", "발랄한", "하이틴의"], 
                imgs:["/images/website/style/woman/female-highteen1.jpg","/images/website/style/woman/female-highteen2.jpg"]
            }, 
            {
                name: "힙시크", 
                tag: ["힙한", "시크한", "개성있는"], 
                imgs:["/images/website/style/woman/female-hipchic1.jpg","/images/website/style/woman/female-hipchic2.jpg"]
            }, 
            {
                name: "럭셔리", 
                tag: ["고급스러운", "화려한"], 
                imgs:["/images/website/style/woman/female-luxury1.jpg","/images/website/style/woman/female-luxury2.jpg"]
            }, 
        ],
    },
    {
        id : 2,
        questionNum : 3,
        answers : [
            {
                name: "캐주얼", 
                tag: ["편안한","스포티한","귀여운"], 
                imgs:["/images/website/style/woman/female-casual1.jpg","/images/website/style/woman/female-casual2.jpg"]
            },
            {
                name: "클래식포멀", 
                tag: ["단정한", "격식있는", "세련된"], 
                imgs:["/images/website/style/woman/female-classicformal1.png","/images/website/style/woman/female-classicformal2.png"]
            }, 
            {
                name: "모던베이직", 
                tag: ["깔끔한", "단정한", "심플한"], 
                imgs:["/images/website/style/woman/female-modernbasic1.jpg","/images/website/style/woman/female-modernbasic2.jpg"]
            }, 
            {
                name: "로맨틱페미닌", 
                tag: ["단아한", "성숙한", "우아한"], 
                imgs:["/images/website/style/woman/female-romanticfeminine1.jpg","/images/website/style/woman/female-romanticfeminine2.png"]
            }, 
            {
                name: "러블리", 
                tag: ["러블리한", "귀여운", "사랑스러운"], 
                imgs:["/images/website/style/woman/female-lovely1.png","/images/website/style/woman/female-lovely2.jpg"]
            }, 
            {
                name: "스트릿", 
                tag: ["힙한", "개성있는", "유니크한"], 
                imgs:["/images/website/style/woman/female-street1.jpg","/images/website/style/woman/female-street2.jpg"]
            }, 
            {
                name: "빈티지", 
                tag: ["개성있는", "편안한", "따뜻한"], 
                imgs:["/images/website/style/woman/female-vintage1.jpg","/images/website/style/woman/female-vintage2.jpg"]
            }, 
            {
                name: "스포티", 
                tag: ["캐주얼한", "활동성있는", "편한"], 
                imgs:["/images/website/style/woman/female-sporty1.jpg","/images/website/style/woman/female-sporty2.jpg"]
            }, 
            {
                name: "섹시글램", 
                tag: ["섹시한", "화려한", "볼륨감있는"], 
                imgs:["/images/website/style/woman/female-sexyglam1.jpg","/images/website/style/woman/female-sexyglam2.jpg"]
            }, 
            {
                name: "하이틴", 
                tag: ["러블리한", "발랄한", "하이틴의"], 
                imgs:["/images/website/style/woman/female-highteen1.jpg","/images/website/style/woman/female-highteen2.jpg"]
            }, 
            {
                name: "힙시크", 
                tag: ["힙한", "시크한", "개성있는"], 
                imgs:["/images/website/style/woman/female-hipchic1.jpg","/images/website/style/woman/female-hipchic2.jpg"]
            }, 
            {
                name: "럭셔리", 
                tag: ["고급스러운", "화려한"], 
                imgs:["/images/website/style/woman/female-luxury1.jpg","/images/website/style/woman/female-luxury2.jpg"]
            },
        ],
    },
    {
        id : 3,
        questionNum : 4,
        answers : [
            {
                name: "캐주얼", 
                tag: ["편안한","스포티한","귀여운"], 
                imgs:["/images/website/style/woman/female-casual1.jpg","/images/website/style/woman/female-casual2.jpg"]
            },
            {
                name: "클래식포멀", 
                tag: ["단정한", "격식있는", "세련된"], 
                imgs:["/images/website/style/woman/female-classicformal1.png","/images/website/style/woman/female-classicformal2.png"]
            }, 
            {
                name: "모던베이직", 
                tag: ["깔끔한", "단정한", "심플한"], 
                imgs:["/images/website/style/woman/female-modernbasic1.jpg","/images/website/style/woman/female-modernbasic2.jpg"]
            }, 
            {
                name: "로맨틱페미닌", 
                tag: ["단아한", "성숙한", "우아한"], 
                imgs:["/images/website/style/woman/female-romanticfeminine1.jpg","/images/website/style/woman/female-romanticfeminine2.png"]
            }, 
            {
                name: "러블리", 
                tag: ["러블리한", "귀여운", "사랑스러운"], 
                imgs:["/images/website/style/woman/female-lovely1.png","/images/website/style/woman/female-lovely2.jpg"]
            }, 
            {
                name: "스트릿", 
                tag: ["힙한", "개성있는", "유니크한"], 
                imgs:["/images/website/style/woman/female-street1.jpg","/images/website/style/woman/female-street2.jpg"]
            }, 
            {
                name: "빈티지", 
                tag: ["개성있는", "편안한", "따뜻한"], 
                imgs:["/images/website/style/woman/female-vintage1.jpg","/images/website/style/woman/female-vintage2.jpg"]
            }, 
            {
                name: "스포티", 
                tag: ["캐주얼한", "활동성있는", "편한"], 
                imgs:["/images/website/style/woman/female-sporty1.jpg","/images/website/style/woman/female-sporty2.jpg"]
            }, 
            {
                name: "섹시글램", 
                tag: ["섹시한", "화려한", "볼륨감있는"], 
                imgs:["/images/website/style/woman/female-sexyglam1.jpg","/images/website/style/woman/female-sexyglam2.jpg"]
            }, 
            {
                name: "하이틴", 
                tag: ["러블리한", "발랄한", "하이틴의"], 
                imgs:["/images/website/style/woman/female-highteen1.jpg","/images/website/style/woman/female-highteen2.jpg"]
            }, 
            {
                name: "힙시크", 
                tag: ["힙한", "시크한", "개성있는"], 
                imgs:["/images/website/style/woman/female-hipchic1.jpg","/images/website/style/woman/female-hipchic2.jpg"]
            }, 
            {
                name: "럭셔리", 
                tag: ["고급스러운", "화려한"], 
                imgs:["/images/website/style/woman/female-luxury1.jpg","/images/website/style/woman/female-luxury2.jpg"]
            },
        ],
    },
    {
        id : 4,
        questionNum: 14,
        answers : ['SPA', '아웃도어', '디자이너', '고가 디자이너', '여성복', '보세', '하이엔드(명품)', '없음'],
    },
    {
        id : 5,
        questionNum: 15,
        answers : ['지그재그', '무신사', 'WConcept', '29cm','자사홈페이지', '브랜디', '에이블리', '스타일쉐어', '블로그마켓', '홈쇼핑', '없음' ],
    },

]

const size_F = [
    {
        id : 0,
        questionNum: 1,
        answers: [],
    },
    {
        id : 1,
        questionNum: 2,
        answers: [
            {
                question: "얼굴 크기",
                datas: ['작다', '', '중간', '', '크다'],
            },
            {
                question: "목길이",
                datas: ['짧다', '', '중간', '', '길다'],
            },
            {
                question: "어깨",
                datas: ['좁다', '', '중간', '', '넓다'],
            },
            {
                question: "팔길이",
                datas: ['짧다', '', '중간', '', '길다'],
            },
            {
                question: "가슴",
                datas: ['작다', '', '중간', '', '크다'],
            },
            {
                question: "허리",
                datas: ['얇다', '', '중간', '', '두껍다'],
            },
            {
                question: "골반",
                datas: ['좁다', '', '중간', '', '넓다'],
            },
            {
                question: "엉덩이",
                datas: ['작다', '', '중간', '', '크다'],
            },
            {
                question: "허벅지",
                datas: ['얇다', '', '중간', '', '두껍다'],
            },
            {
                question: "종아리",
                datas: ['얇다', '', '중간', '', '두껍다'],
            },
        ],
    },
    {
        id : 2,
        questionNum: 3,
        answers: [
            {
                question: '상하체비율',
                datas : ['상체가 길다', '', '중간', '', '하체가 길다'],
            },
            {
                question: '얼굴형',
            },
            {
                question: '피부톤',
            },
            {
                question: '어깨 모양',
            }
        ],
    },
    {
        id : 3,
        questionNum: 4,
        answers: [],
    },
    {
        id : 4,
        questionNum: 5,
        answers: [
            {
                question: '항목 1',
                datas : ['XXS이하', 'XS', 'S', 'M', 'L', 'XL','XXL이상', '모르겠음']
            },
            {
                question: '항목 2',
                datas : ['80이하', '85', '90', '95', '100', '105', '110이상', '모르겠음']
            },
            {
                question: '항목 3',
                datas : ['44이하', '55', '66', '77이상', '모르겠음']
            },
            {
                question: '항목 1',
                datas : ['23 이하', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '모르겠음']
            },
            {
                question: '항목 2',
                datas : ['XXS이하', 'XS', 'S', 'M', 'L', 'XL', 'XXL이상', '모르겠음']
            },
        ],
    },
]

const cody_F = [
    {
        id : 0,
        questionNum: 1,
        answers: ['데일리룩', '동네마실룩', '오피스룩', '하객룩', '데이트룩', '면접룩', '운동룩', '파티룩', '소개팅룩', '캠퍼스룩', '출근룩', '기타'],
    },
    {
        id : 1,
        questionNum: 2,
        answers: ['캐주얼', '클래식포멀', '모던베이직', '로멘틱페미닌', '러블리', '스트릿', '빈티지', '스포티', '섹시글램', '하이틴', '힙시크', '럭셔리','기타'],
    },
    {
        id : 2,
        questionNum: 3,
        answers: [
            {
                question : '옷의 조합',
                datas : ['상의+바지', '상의+바지+아우터', '상의+치마', '상의+치마+아우터','원피스+아우터','원피스', '상관없음'],
            },
            {
                question : '상의',
                datas : ['민소매', '반팔 티셔츠', '긴팔 티셔츠', '7부 티셔츠', '반팔 니트', '맨투맨', '후드 티셔츠', '셔츠/남방', '블라우스', '기타', '없음'],
                inputText: '예) 목폴라 티셔츠 싫어요!'
            },
            {
                question : '바지',
                datas : ['청바지', '면바지', '반바지', '슬랙스', '트레이닝 바지', '린넨 바지', '레깅스', '기타', '없음'],
                inputText: '예) 목폴라 티셔츠 싫어요!'
            },
            {
                question : '치마',
                datas : ['니트 치마', '가죽 치마', '체크 치마', '린넨 치마', '면 치마', '쉬폰 치마', '청치마', '플리츠 치마', '테니스 치마', '멜빵 치마', '기타', '없음'],
                inputText: '예) 목폴라 티셔츠 싫어요!'
            },
            {
                question : '원피스',
                datas : ['니트 원피스', '체크 원피스', '린넨 원피스', '면 원피스', '츄리닝 원피스', '쉬폰 원피스', '셔츠 원피스', '데님 원피스', '뷔스티에 원피스', '점프 수트', '기타', '없음'],
                inputText: '예) 목폴라 티셔츠 싫어요!'
            },
            {
                question : '아우터',
                datas : ['가디건', '항공 점퍼', '야상', '후드집업', '후리스 자켓', '블레이저 자켓', '조끼', '트렌치 코트', '청자켓', '트위드 자켓', '바람막이', '라이더 자켓', '기타', '없음'],
                inputText: '예) 목폴라 티셔츠 싫어요!'
            },
        ], 
    },
    {
        id : 3,
        questionNum: 5,
        answers: [
            {
                question : ['희망하는 코디 전체의 총 가격대', '중복선택'],
                datas : ['5만원 이하', '5~10만원', '10~20만원', '20~30만원', '30~40만원', '40만원 이상', '상관없음'],
            },
            {
                question : '받고 싶은 옷의 가격과 품질의 관계',
                datas : ['품질보다는 가격이 저렴한 옷', '적당한 가격대의 적당한 품질', '조금 비싸도 품질이 좋은 옷', '가격은 상관없이 최고의 품질'],
            },
            {
                question : '받고 싶은 옷의 유행 반영 여부',
                datas : ['유행하고 트렌드에 맞는 옷', '유행을 타지 않고 오래입을 수 있는 옷', '상관없음'],
            },
        ],
    },
]

const userInfo_F = [
    {
        id: 1,
        datas: ['초등학생', '중학생', '고등학생', '대학생', '공무원', '주부', '사업가', '대학원생', '프리랜서', '자영업자', '무직', '기타']
    }
]

const user_datas = {
    style_F,
    size_F,
    cody_F,
    userInfo_F,
}

export default user_datas;