// Taiwan Travel Schedule Data
const travelData = {
  "Day1": [
    {
      "place": "김해국제공항 (에어부산 카운터 D동, Gate5 2층)",
      "map": "金海國際機場",
      "arrive": "08:50",
      "stay": "2h",
      "depart": "-",
      "category": "출국",
      "memo": "수속 및 대기",
      "move": null
    },
    {
      "place": "에어부산 BX793 (PUS 10:50 - TPE 12:25)",
      "arrive": "10:50",
      "depart": "12:25",
      "category": "비행",
      "stay": "2h 35m",
      "map": "桃園國際機場",
      "move": "비행"
    },
    {
      "place": "타오위안 국제공항",
      "map": "桃園國際機場",
      "arrive": "12:25",
      "stay": "-",
      "depart": "-",
      "category": "입국",
      "memo": "입국심사, MRT 탑승",
      "move": "MRT 40m"
    },
    {
      "place": "타이베이 메인 스테이션",
      "map": "台北車站",
      "category": "교통",
      "memo": "숙소 인근 도착",
      "move": "도보 10m"
    },
    {
      "place": "유산동 우육면",
      "map": "山東牛肉麵 西門店",
      "category": "음식점",
      "memo": "중식",
      "move": "도보 10m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "arrive": "15:00",
      "stay": "30m",
      "depart": "15:30",
      "category": "숙소",
      "memo": "체크인 및 휴식",
      "move": "도보 10m"
    },
    {
      "place": "삼형매 빙수",
      "map": "三兄妹豆花冰品",
      "arrive": "15:40",
      "stay": "50m",
      "depart": "16:30",
      "category": "디저트",
      "memo": "빙수 및 휴식",
      "move": "전철 20m"
    },
    {
      "place": "국립 중정 기념당",
      "map": "國立中正紀念堂",
      "arrive": "16:50",
      "stay": "1h 10m",
      "depart": "18:00",
      "category": "관광명소",
      "move": "전철 30m"
    },
    {
      "place": "스린 야시장",
      "map": "士林夜市",
      "arrive": "18:30",
      "stay": "3h",
      "depart": "21:30",
      "category": "야시장",
      "memo": "석식 및 구경",
      "move": "전철 30m"
    },
    {
      "place": "스위엔 시먼점",
      "map": "師園鹽酥雞（西門店）",
      "arrive": "22:00",
      "category": "음식점",
      "memo": "야식",
      "move": "도보 5m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "category": "숙소",
      "memo": "취침"
    }
  ],

  "Day2": [
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "category": "숙소",
      "memo": "조식 후 준비",
      "move": "도보 5m"
    },
    {
      "place": "시먼역 (4번 출구)",
      "map": "捷運西門站 4號出口",
      "arrive": "10:45",
      "category": "교통",
      "memo": "가이드 미팅",
      "move": "버스 이동"
    },
    {
      "place": "예류 지질공원",
      "map": "野柳地質公園",
      "arrive": "12:30",
      "stay": "1h 10m",
      "depart": "13:40",
      "category": "관광명소"
    },
    {
      "place": "스펀 폭포",
      "map": "十分瀑布",
      "arrive": "14:40",
      "stay": "50m",
      "depart": "15:30",
      "category": "관광명소"
    },
    {
      "place": "스펀 라오제",
      "map": "十分老街",
      "arrive": "15:40",
      "stay": "50m",
      "depart": "16:30",
      "category": "관광명소",
      "memo": "천등 체험"
    },
    {
      "place": "지우펀",
      "map": "九份老街",
      "arrive": "17:10",
      "stay": "2h",
      "depart": "19:10",
      "category": "관광명소",
      "memo": "석식 포함",
      "move": "버스 이동"
    },
    {
      "place": "시먼역",
      "arrive": "20:20",
      "map": "捷運西門站 4號出口",
      "category": "교통",
      "memo": "투어 종료",
      "move": "도보 5m"
    },
    {
      "place": "행복당 시먼점",
      "map": "幸福堂 西門店",
      "category": "디저트",
      "memo": "디저트",
      "move": "도보 10m"
    },
    {
      "place": "180도씨 지파이",
      "map": "180度C雞排",
      "category": "음식점",
      "memo": "야식",
      "move": "도보 15m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "category": "숙소",
      "memo": "귀가 및 휴식"
    }
  ],

  "Day3": [
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "category": "숙소",
      "memo": "출발 준비",
      "move": "도보 5m"
    },
    {
      "place": "시먼딩",
      "map": "西門町",
      "arrive": "11:00",
      "stay": "1h 30m",
      "depart": "12:30",
      "category": "쇼핑"
    },
    {
      "place": "천천리",
      "map": "108台北市萬華區漢中街32巷1號",
      "arrive": "12:30",
      "stay": "1h",
      "depart": "13:30",
      "category": "음식점",
      "move": "버스 10m"
    },
    {
      "place": "까르푸 꾸이린점",
      "map": "家樂福 桂林店",
      "arrive": "13:40",
      "stay": "1h 30m",
      "depart": "15:10",
      "category": "쇼핑",
      "move": "도보 10m"
    },
    {
      "place": "세인트 피터 누가 크래커",
      "map": "聖比德 西門店",
      "arrive": "15:20",
      "stay": "20m",
      "depart": "15:40",
      "category": "쇼핑",
      "move": "도보 5m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "arrive": "15:45",
      "stay": "30m",
      "depart": "16:15",
      "category": "숙소",
      "memo": "물품 정리",
      "move": "전철 30m"
    },
    {
      "place": "딘타이펑 타이베이 101점",
      "map": "鼎泰豐 台北101店",
      "arrive": "16:45",
      "stay": "1h",
      "depart": "18:45",
      "category": "음식점",
      "memo": "대기 후 석식",
      "move": "101몰 내부 이동"
    },
    {
      "place": "타이베이 101 전망대",
      "map": "台北101 觀景台",
      "arrive": "19:00",
      "stay": "2h",
      "depart": "21:00",
      "category": "관광명소",
      "move": "버스 20m"
    },
    {
      "place": "레인보우 브리지",
      "map": "彩虹橋",
      "arrive": "21:20",
      "stay": "30m",
      "depart": "21:50",
      "category": "관광명소",
      "move": "전철 30m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "arrive": "22:20",
      "category": "숙소"
    }
  ],

  "Day4": [
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "category": "숙소",
      "memo": "조식 후 체크아웃",
      "move": "전철 30m"
    },
    {
      "place": "국립 대만대학교",
      "map": "國立臺灣大學",
      "arrive": "10:00",
      "stay": "1h 30m",
      "depart": "11:30",
      "category": "관광명소",
      "memo": "캠퍼스 산책",
      "move": "전철 30m"
    },
    {
      "place": "용산사",
      "map": "龍山寺",
      "arrive": "12:00",
      "stay": "1h",
      "depart": "13:00",
      "category": "사찰",
      "move": "도보 10m"
    },
    {
      "place": "삼미 식당",
      "map": "三味食堂",
      "arrive": "13:10",
      "stay": "1h",
      "depart": "14:10",
      "category": "음식점",
      "move": "버스 10m"
    },
    {
      "place": "호텔 미드타운 리처드슨",
      "map": "德立莊酒店",
      "arrive": "14:20",
      "stay": "10m",
      "depart": "14:30",
      "category": "숙소",
      "memo": "짐 찾기",
      "move": "전철 10m"
    },
    {
      "place": "타이베이 메인 스테이션",
      "map": "台北車站",
      "arrive": "14:40",
      "category": "교통",
      "memo": "공항 MRT 대기",
      "move": "MRT 40m"
    },
    {
      "place": "타오위안 국제공항 (터미널 2)",
      "map": "桃園國際機場 第二航廈",
      "arrive": "15:30",
      "stay": "2h 10m",
      "category": "출국",
      "memo": "에어부산 출국 수속"
    }
  ]
};