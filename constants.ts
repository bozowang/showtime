import { MenuCategory, Slide } from './types';

const BASE_URL = 'https://bozowang.github.io/steakhouse';

export const LOGO_URL = `${BASE_URL}/logo.png`;

export const MIXED_SECTION_1_FIXED = `${BASE_URL}/4.jpg`;
export const MIXED_SECTION_2_FIXED = `${BASE_URL}/8.jpg`;

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: `${BASE_URL}/1.jpg`,
    title: '無名牛排',
    subtitle: '堅持「厚切現煎、分量紮實」，讓每個人都能以親民價格，吃到飽足又滿意的好牛排'
  },
  {
    id: 2,
    image: `${BASE_URL}/2.jpg`,
    title: '實在用料 真心價格',
    subtitle: '不玩花俏包裝，只把成本用在食材上，每份牛排份量比同價位多30%，讓你吃飽又吃好'
  },
  {
    id: 3,
    image: `${BASE_URL}/3.jpg`,
    title: '街坊食堂的溫暖',
    subtitle: '這裡沒有拘束，只有熱騰騰的鐵板聲與香氣，歡迎隨時進來，享受大口吃肉的快樂'
  }
];

export const MIXED_SECTION_1_SLIDES: Slide[] = [
  { id: 1, image: `${BASE_URL}/5.jpg` },
  { id: 2, image: `${BASE_URL}/6.jpg` },
  { id: 3, image: `${BASE_URL}/7.jpg` }
];

export const MIXED_SECTION_2_SLIDES: Slide[] = [
  { id: 1, image: `${BASE_URL}/9.jpg` },
  { id: 2, image: `${BASE_URL}/10.jpg` },
  { id: 3, image: `${BASE_URL}/11.jpg` }
];

export const MENU_DATA: MenuCategory[] = [
  {
    title: '海鮮類',
    items: [
      {
        id: 'seafood-1',
        title: '香煎鱸魚',
        description: '每日新鮮直送鱸魚，煎至外皮金脆，肉質細嫩不柴，分量足夠一人飽食，搭配自選兩種季節配菜，價格親民不打折。',
        image: `${BASE_URL}/a.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/a.html'
      }
    ]
  },
  {
    title: '豬肉類',
    items: [
      {
        id: 'pork-1',
        title: '日式炸豬排',
        description: '豬裡肌，裹上手工麵包糠酥炸，外皮酥脆不油膩，內層肉汁滿溢，搭配特製豬排醬。',
        image: `${BASE_URL}/b.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/1_11.html'
      },
      {
        id: 'pork-2',
        title: '香煎豬排',
        description: '選用油脂分佈均勻的梅花豬，簡單調味凸顯肉香，煎至邊緣微焦，肉質軟嫩不柴，分量比同價位多20%。',
        image: `${BASE_URL}/c.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_14.html'
      },
      {
        id: 'pork-3',
        title: '德國烤豬腳',
        description: '整隻豬腳先醃後烤，外皮Q彈帶脆，內部肉質酥爛脫骨。',
        image: `${BASE_URL}/d.jpg`,
        link: 'https://www.blogger.com/blog/post/preview/2585833921926162423/2954550997423569543'
      }
    ]
  },
  {
    title: '雞肉類',
    items: [
      {
        id: 'chicken-1',
        title: '香煎去骨雞腿',
        description: '整塊去骨雞腿肉，用香料醃製6小時以上，煎至外皮金黃，肉質多汁不柴。',
        image: `${BASE_URL}/e.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/1_17.html'
      }
    ]
  },
  {
    title: '牛排類',
    items: [
      {
        id: 'steak-1',
        title: 'NZ菲力牛排',
        description: '選用紐西蘭草飼牛菲力，2公分厚切確保嫩度，脂肪含量低，適合喜歡清爽口感的顧客，附自製黑胡椒醬和雙配菜。',
        image: `${BASE_URL}/f.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_31.html'
      },
      {
        id: 'steak-2',
        title: '超值板腱牛排',
        description: 'CP值之王！取自牛肩胛部位，中間帶筋，肉質結實有嚼勁，油花分佈均勻，分量十足，學生族群最愛。',
        image: `${BASE_URL}/g.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_17.html'
      },
      {
        id: 'steak-3',
        title: '經典NZ上蓋牛排',
        description: '肋眼上蓋肉，大理石紋油花豐富，煎烤後肉汁滿溢，風味濃鬱，附兩種配菜，性價比超高。',
        image: `${BASE_URL}/h.jpg`,
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post.html'
      }
    ]
  },
  {
    title: '鴨肉類',
    items: [
      {
        id: 'duck-1',
        title: '香煎櫻桃鴨胸',
        description: '選用宜蘭櫻桃鴨胸，皮煎至酥脆，肉質鮮嫩不柴，脂肪分佈均勻，搭配橙醬解膩，分量紮實，性價比高。',
        image: `${BASE_URL}/i.jpg`,
        link: 'https://www.blogger.com/blog/post/preview/2585833921926162423/5962579112663121162'
      }
    ]
  }
];

export const GALLERY_IMAGES: string[] = [
  `${BASE_URL}/12.jpg`,
  `${BASE_URL}/13.jpg`,
  `${BASE_URL}/14.jpg`,
  `${BASE_URL}/15.jpg`
];