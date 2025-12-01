import { MenuCategory, Slide } from './types';

const BASE_URL = 'https://bozowang.github.io/steakhouse';
const IMAGE_BASE_URL = 'https://bozowang.github.io/steakhouse/image';
const MENU_IMAGE_BASE_URL = 'https://bozowang.github.io/steakhouse/image/menu';

export const LOGO_URL = `${IMAGE_BASE_URL}/logo.png`;

export const MIXED_SECTION_1_FIXED = `${BASE_URL}/4.jpg`;
export const MIXED_SECTION_2_FIXED = `${BASE_URL}/8.jpg`;

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: `${IMAGE_BASE_URL}/banner.png`,
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
    title: '人氣主打 - 厚切原塊',
    items: [
      {
        id: 'steak-1',
        title: '無名特製牛排 (10oz)',
        description: '店內招牌！精選紐澳進口原塊牛肉，手工厚切保留肉汁。高溫鐵板現煎，表皮焦香、內裡軟嫩，搭配特製黑胡椒醬，每一口都是滿足。',
        image: `${MENU_IMAGE_BASE_URL}/food1.png`,
        link: '#'
      },
      {
        id: 'steak-2',
        title: '特選嫩肩牛排 (12oz)',
        description: '愛吃肉的首選！選用牛肩胛部位，肉質結實帶嚼勁，油脂分佈均勻。大份量12oz，適合食量大或想大口吃肉的你。',
        image: `${MENU_IMAGE_BASE_URL}/food2.png`,
        link: '#'
      },
      {
        id: 'steak-3',
        title: '香煎雞腿排',
        description: '不吃牛的好選擇。嚴選去骨雞腿肉，皮煎至金黃酥脆，肉質鮮嫩多汁，搭配蒜香奶油或蘑菇醬，風味絕佳。',
        image: `${MENU_IMAGE_BASE_URL}/food3.png`,
        link: '#'
      }
    ]
  },
  {
    title: '雙拼享受 - 海陸滿足',
    items: [
      {
        id: 'combo-1',
        title: '牛排 + 雞腿排',
        description: '小孩才做選擇，我全都要！經典牛排搭配酥脆雞腿，一次享受兩種肉感，飽足感爆表。',
        image: `${MENU_IMAGE_BASE_URL}/food4.png`,
        link: '#'
      },
      {
        id: 'combo-2',
        title: '牛排 + 鮮蝦',
        description: '海陸雙重奏。厚切牛排配上幾隻鮮甜大蝦，鮮味與肉香交織，奢華感升級，價格依然親民。',
        image: `${MENU_IMAGE_BASE_URL}/food5.png`,
        link: '#'
      },
      {
        id: 'combo-3',
        title: '豪華總匯 (牛+雞+豬)',
        description: '肉食控的終極挑戰！牛排、雞腿、豬排三種美味一次滿足，份量十足，建議兩人分享或大胃王挑戰。',
        image: `${MENU_IMAGE_BASE_URL}/food6.png`,
        link: '#'
      }
    ]
  }
];

export const GALLERY_IMAGES: string[] = [
  `${MENU_IMAGE_BASE_URL}/food7.png`,
  `${MENU_IMAGE_BASE_URL}/food8.png`,
  `${MENU_IMAGE_BASE_URL}/food1.png`,
  `${MENU_IMAGE_BASE_URL}/food2.png`
];
