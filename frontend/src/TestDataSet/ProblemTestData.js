export const ProblemTestDataSet = {
  problem_set_id: "1",
  count: 10,
  categories: ["네트워크", "운영체제", "컴퓨터구조", "데이터베이스", "알고리즘"],
  problems: [
    {
      question: 'Turing Test는 무엇을 측정하는 테스트인가?',
      options: [
        '인공지능의 학습 능력',
        '인공지능의 문제 해결 능력',
        '인공지능의 성능',
        '인간의 인지 기능',
      ],
      category: "네트워크"
    },
    {
      question: '딥러닝에서 잘 사용되지 않는 함수는 무엇인가?',
      options: ['ReLU', 'Sigmoid 함수', 'Softmax', 'Linear'],
      category: "운영체제"
    },
    {
      question: 'K Nearest Neighbor에서 k=1인 경우, 어떤 상황이 발생하는가?',
      options: [
        '가장 가까운 점을 기준으로 분류',
        '모든 점을 평균 내서 분류',
        '가장 먼 점을 기준으로 분류',
        '무작위로 점을 선택',
      ],
      category: "알고리즘"
    },
    {
      question: 'Overfitting이란 무엇인가?',
      options: [
        '모델이 너무 단순할 때 발생',
        '모델이 너무 복잡할 때 발생',
        '모델이 적절할 때 발생',
        '모델이 잘 작동할 때 발생',
      ],
      category: "데이터베이스"
    },
    {
      question: 'Convolution에서 Stride는 무엇을 설정하는가?',
      options: [
        '커널의 크기',
        '커널이 몇 픽셀씩 움직이는지',
        '이미지의 밝기',
        '이미지의 크기',
      ],
      category: "네트워크"
    },
    {
      question: '클라우드 컴퓨팅의 NIST 정의에 따르면 무엇을 제공하는가?',
      options: [
        '온프레미스 서비스',
        'IT 기반의 기능을 확장 가능하고 탄력적인 서비스 형태로 제공',
        '데이터베이스만 제공',
        '소프트웨어만 제공',
      ],
      category: "컴퓨터구조"
    },
    {
      question: '클라우드 네이티브의 도입 필요성 중 하나는 무엇인가?',
      options: [
        '비용 절감',
        '경쟁 우위 확보',
        '서버 관리 용이성',
        '데이터 저장 용이성',
      ],
      category: "운영체제"
    },
    {
      question: '서버리스란 무엇을 의미하는가?',
      options: [
        '서버가 필요 없는 것',
        '서버가 항상 가동되는 것',
        '서비스가 이용될 때만 서버를 가동하는 것',
        '서버가 필요 없는 서비스',
      ],
      category: "네트워크"
    },
    {
      question: 'AWS의 장점 중 하나가 아닌 것은 무엇인가?',
      options: [
        '초기 투자비용 절감',
        '운영비용 절감',
        '글로벌 확장',
        '서버 성능 향상',
      ],
      catedoty: "데이터베이스"
    },
    {
      question: 'Cross-correlation은 무엇을 살펴볼 때 사용되는가?',
      options: [
        '데이터의 크기',
        '데이터의 연관성',
        '데이터의 속도',
        '데이터의 정확성',
      ],
      category: "컴퓨터구조"
    },
  ],
  scoreTotal: 6,
  score: {
    "네트워크": 25,
    "운영체제": 50,
    "컴퓨터구조": 30,
    "데이터베이스": 60,
    "알고리즘": 80
  }
};
