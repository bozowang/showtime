import { MenuCategory, Slide } from './types';

// Using picsum images to simulate the local images from the original request
export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1080/1920/1080',
    title: '無名牛排',
    subtitle: '堅持「厚切現煎、分量紮實」，讓每個人都能以親民價格，吃到飽足又滿意的好牛排'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/431/1920/1080',
    title: '實在用料 真心價格',
    subtitle: '不玩花俏包裝，只把成本用在食材上，每份牛排份量比同價位多30%，讓你吃飽又吃好'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/292/1920/1080',
    title: '街坊食堂的溫暖',
    subtitle: '不論是家庭聚餐、朋友小聚還是獨食小酌，都能在這裡找到高CP值的美味體驗'
  }
];

export const MIXED_SECTION_1_SLIDES: Slide[] = [
  { id: 1, image: 'https://picsum.photos/id/42/800/800' },
  { id: 2, image: 'https://picsum.photos/id/48/800/800' },
  { id: 3, image: 'https://picsum.photos/id/63/800/800' }
];

export const MIXED_SECTION_2_SLIDES: Slide[] = [
  { id: 1, image: 'https://picsum.photos/id/75/800/800' },
  { id: 2, image: 'https://picsum.photos/id/163/800/800' },
  { id: 3, image: 'https://picsum.photos/id/225/800/800' }
];

export const MENU_DATA: MenuCategory[] = [
  {
    title: '海鮮類',
    items: [
      {
        id: 's1',
        title: '香煎鱸魚',
        description: '每日新鮮直送鱸魚，煎至外皮金脆，肉質細嫩不柴，分量足夠一人飽食，搭配自選兩種季節配菜，價格親民不打折。',
        image: 'https://picsum.photos/id/111/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/a.html'
      }
    ]
  },
  {
    title: '豬肉類',
    items: [
      {
        id: 'p1',
        title: '日式炸豬排',
        description: '豬裡肌，裹上手工麵包糠酥炸，外皮酥脆不油膩，內層肉汁滿溢，搭配特製豬排醬。',
        image: 'https://picsum.photos/id/22/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/1_11.html'
      },
      {
        id: 'p2',
        title: '香煎豬排',
        description: '選用油脂分佈均勻的梅花豬，簡單調味凸顯肉香，煎至邊緣微焦，肉質軟嫩不柴，分量比同價位多20%。',
        image: 'https://picsum.photos/id/33/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_14.html'
      },
      {
        id: 'p3',
        title: '德國烤豬腳',
        description: '整隻豬腳先醃後烤，外皮Q彈帶脆，內部肉質酥爛脫骨。',
        image: 'https://picsum.photos/id/44/400/300',
        link: 'https://www.blogger.com/blog/post/preview/2585833921926162423/2954550997423569543'
      }
    ]
  },
  {
    title: '雞肉類',
    items: [
      {
        id: 'c1',
        title: '香煎去骨雞腿',
        description: '整塊去骨雞腿肉，用香料醃製6小時以上，煎至外皮金黃，肉質多汁不柴。',
        image: 'https://picsum.photos/id/55/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/1_17.html'
      }
    ]
  },
  {
    title: '牛排類',
    items: [
      {
        id: 'b1',
        title: 'NZ菲力牛排',
        description: '選用紐西蘭草飼牛菲力，2公分厚切確保嫩度，脂肪含量低，適合喜歡清爽口感的顧客，附自製黑胡椒醬和雙配菜。',
        image: 'https://picsum.photos/id/66/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_31.html'
      },
      {
        id: 'b2',
        title: '超值板腱牛排',
        description: 'CP值之王！取自牛肩胛部位，中間帶筋，肉質結實有嚼勁，油花分佈均勻，分量十足，學生族群最愛。',
        image: 'https://picsum.photos/id/77/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post_17.html'
      },
      {
        id: 'b3',
        title: '經典NZ上蓋牛排',
        description: '肋眼上蓋肉，大理石紋油花豐富，煎烤後肉汁滿溢，風味濃鬱，附兩種配菜，性價比超高。',
        image: 'https://picsum.photos/id/88/400/300',
        link: 'https://bullinblack.blogspot.com/2024/12/blog-post.html'
      }
    ]
  },
  {
    title: '鴨肉類',
    items: [
      {
        id: 'd1',
        title: '香煎櫻桃鴨胸',
        description: '選用宜蘭櫻桃鴨胸，皮煎至酥脆，肉質鮮嫩不柴，脂肪分佈均勻，搭配橙醬解膩，分量紮實，性價比高。',
        image: 'https://picsum.photos/id/99/400/300',
        link: 'https://www.blogger.com/blog/post/preview/2585833921926162423/5962579112663121162'
      }
    ]
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/id/425/600/600',
  'https://picsum.photos/id/429/600/600',
  'https://picsum.photos/id/488/600/600',
  'https://picsum.photos/id/493/600/600'
];