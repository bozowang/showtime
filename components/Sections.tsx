import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, MENU_DATA, GALLERY_IMAGES } from '../constants';
import { SectionDirection, Slide } from '../types';

// --- Hero Section ---
export const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('${slide.image}')` }}
        >
          <div className="text-center text-white max-w-[800px] px-5 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl mb-5 font-bold font-serif tracking-widest">{slide.title}</h1>
            {slide.subtitle && <p className="text-lg md:text-xl">{slide.subtitle}</p>}
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
        {HERO_SLIDES.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          ></div>
        ))}
      </div>
    </section>
  );
};

// --- About Section ---
export const AboutSection: React.FC = () => (
  <section id="about" className="py-20 bg-[#202123]/90 text-[#bcb5b1] text-center relative z-10 w-full">
    <div className="max-w-[1600px] mx-auto px-5">
      <h2 className="text-3xl md:text-4xl mb-8 font-serif font-bold text-white tracking-wider">我們的堅持：讓好牛排走進生活</h2>
      <p className="max-w-[800px] mx-auto text-lg leading-loose">
        「無名牛排」從一間社區小店面起家，始終堅信「美味不該昂貴」。我們不販賣奢華環境，只專注兩件事：一是牛排要「厚切現煎」，確保肉質鮮嫩多汁；二是價格要「親民實在」，讓學生、上班族、家庭客都能輕鬆消費。「平價大碗」從來不是偷工減料的代名詞，而是對食材的誠懇——用合理的利潤，換來顧客的回流與信賴。
      </p>
    </div>
  </section>
);

// --- Mixed Layout Section (Fixed + Slider) ---
interface MixedSectionProps {
  fixedImage: string;
  slides: Slide[];
  direction: SectionDirection;
}

export const MixedSection: React.FC<MixedSectionProps> = ({ fixedImage, slides, direction }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className={`flex flex-col lg:flex-row h-[50vh] lg:h-screen relative z-10 w-full ${direction === 'right' ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      {/* Fixed Half */}
      <div 
        className="flex-1 bg-cover bg-center h-full w-full"
        style={{ backgroundImage: `url('${fixedImage}')` }}
      ></div>

      {/* Slider Half */}
      <div className="flex-1 relative overflow-hidden h-full w-full bg-black">
        <div 
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div 
              key={slide.id}
              className="min-w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
          ))}
        </div>
        
        {/* Controls */}
        <button onClick={prevSlide} className="absolute top-1/2 left-5 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-10">
          <i className="fas fa-chevron-left"></i>
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-5 -translate-y-1/2 w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors z-10">
          <i className="fas fa-chevron-right"></i>
        </button>
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Philosophy Section ---
export const PhilosophySection: React.FC = () => (
  <section className="py-20 bg-[#f7f6f5]/90 text-dark text-center relative z-10 w-full">
    <div className="max-w-[1600px] mx-auto px-5">
      <h2 className="text-3xl md:text-4xl mb-8 font-serif font-bold tracking-wider">每塊牛排，都是對生活的誠意</h2>
      <p className="max-w-[800px] mx-auto text-lg leading-loose text-text-gray">
        我們挑選的每塊牛肉，都經過主廚親手挑選——不追求名貴產地，但堅持新鮮直送、現點現煎。餐盤裡的配菜、醬料，不是裝飾，而是讓牛排更美味的配角：自製黑胡椒醬濃鬱不膩，現炸薯條外酥內軟，玉米筍脆嫩多汁。在無名牛排，「大碗」不僅是分量，更是對生活的熱情；「平價」不僅是價格，更是讓美味平等的態度。我們相信，好味道不需要靠昂貴撐場，用心做好每一份餐點，就是對顧客最好的回饋。
      </p>
    </div>
  </section>
);

// --- Menu Section ---
export const MenuSection: React.FC = () => (
  <section id="menu" className="py-20 bg-[#f7f6f5]/90 relative z-10 w-full">
    <div className="max-w-[1200px] mx-auto px-5">
      <h2 className="text-4xl mb-12 text-center font-serif tracking-wider text-dark">高CP值是日菜單懶人包</h2>
      {MENU_DATA.map((category) => (
        <div key={category.title} className="mb-16">
          <h3 className="text-3xl mb-8 text-center text-dark relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-btn-red font-serif">
            {category.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                <div 
                  className="h-[200px] bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="p-5">
                  <h4 className="text-2xl mb-3 text-dark font-serif">{item.title}</h4>
                  <p className="text-text-gray mb-4 leading-relaxed text-sm h-[80px] overflow-hidden">{item.description}</p>
                  <a href={item.link} target="_blank" rel="noreferrer" className="text-btn-red font-medium hover:text-btn-hover transition-colors">
                    查看詳細介紹 →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

// --- Store Info Section ---
export const StoreInfoSection: React.FC = () => (
  <section id="store-info" className="py-20 bg-white/90 relative z-10 w-full">
    <div className="max-w-[1200px] mx-auto px-5 flex flex-wrap gap-10 items-center">
      <div className="flex-1 min-w-[300px]">
        <h3 className="text-3xl mb-8 text-dark relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-[3px] after:bg-btn-red font-serif inline-block">
          門市資訊 & 外送服務
        </h3>
        
        <div className="bg-[#f7f6f5] rounded-lg p-8 mb-8 shadow-sm">
          <h4 className="text-xl mb-5 text-dark flex items-center gap-3 font-bold">
            <i className="fas fa-store text-btn-red"></i> 門市基本資訊
          </h4>
          <ul className="list-none p-0">
            <li className="mb-4 flex items-start gap-3 text-text-gray">
              <i className="fas fa-map-pin text-[#67876a] mt-1 shrink-0"></i> 
              <span><strong>地址：</strong>臺北市南港區南港路一段57號（近南港捷運站2號出口，步行3分鐘）</span>
            </li>
            <li className="mb-4 flex items-start gap-3 text-text-gray">
              <i className="fas fa-clock text-[#67876a] mt-1 shrink-0"></i> 
              <span><strong>營業時間：</strong>週一至週日 (公休日粉專會提前公告)<br/>11:30-21:30（全日供應無休息；20:30後僅外帶/外送）</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#f7f6f5] rounded-lg p-8 shadow-sm">
          <h4 className="text-xl mb-5 text-dark flex items-center gap-3 font-bold">
            <i className="fas fa-motorcycle text-btn-red"></i> 外送外帶服務
          </h4>
          <ul className="list-none p-0 mb-4">
            <li className="mb-4 flex items-start gap-3 text-text-gray">
              <i className="fas fa-check text-[#67876a] mt-1 shrink-0"></i> 
              <span><strong>外送平臺：</strong>Uber Eats、Foodpanda、Lalamove (需自行找外送平臺)</span>
            </li>
            <li className="mb-4 flex items-start gap-3 text-text-gray">
              <i className="fas fa-check text-[#67876a] mt-1 shrink-0"></i> 
              <span><strong>外送時間：</strong>與門市營業時間同步，範圍3公里內</span>
            </li>
          </ul>
          <a href="https://www.cognitoforms.com/無名牛排/無名牛排外送外帶線上點餐1近期上線請勿下單" target="_blank" rel="noreferrer" className="inline-block bg-btn-red text-white px-6 py-2 rounded font-medium hover:bg-btn-hover transition-colors">
            線上預訂外帶
          </a>
        </div>
      </div>
      
      <div className="flex-1 min-w-[300px] h-[400px] rounded-lg overflow-hidden shadow-lg bg-gray-200">
         <iframe 
            className="w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.078784110231!2d121.6145188153256!3d25.05766338394548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a70c19505133%3A0x38410e83a4f1a0e0!2z5ZyL56uL5paw5aKe5Y2X5Yiw5Lit5b-D5Lqs5Yqo5Zyo5Lq6!5e0!3m2!1szh-TW!2stw!4v1689000000000!5m2!1szh-TW!2stw" 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
        ></iframe>
      </div>
    </div>
  </section>
);

// --- Gallery Section ---
export const GallerySection: React.FC<{ onImageClick: (src: string) => void }> = ({ onImageClick }) => (
  <section id="gallery" className="py-20 bg-white/90 relative z-10 w-full text-center">
    <div className="max-w-[1600px] mx-auto px-5">
      <h2 className="text-4xl mb-10 font-serif tracking-wider text-dark">真實美味 肉眼可見</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GALLERY_IMAGES.map((src, index) => (
          <div 
            key={index}
            className="h-[400px] bg-cover bg-center relative overflow-hidden group cursor-pointer"
            style={{ backgroundImage: `url('${src}')` }}
            onClick={() => onImageClick(src)}
          >
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Reservation & Footer ---
export const ReservationAndFooter: React.FC = () => (
  <>
    <section id="reservations" className="py-20 bg-[#202123]/90 text-center relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto px-5">
            <h2 className="text-3xl md:text-4xl mb-6 font-serif font-bold text-white tracking-wider">用實在美味，溫暖每個日常</h2>
            <p className="max-w-[800px] mx-auto text-lg leading-loose text-[#bcb5b1] mb-8">
                在無名牛排，我們不追求華麗的詞藻，只專注做好每一份餐點：牛排要現切現煎，確保肉質鮮嫩；分量要足夠飽腹，不讓顧客花錢吃不夠；價格要親民實在，讓每個人都能輕鬆享用。不論是下班後的獨食小確幸，還是週末的家庭聚餐，我們都想用最誠懇的美味，讓你感受到「花小錢，吃大份，享好味」的幸福。
            </p>
            <a href="#contact" className="inline-block bg-btn-red text-white px-8 py-3 tracking-widest font-bold hover:bg-btn-hover transition-colors">
                立即聯絡預訂
            </a>
        </div>
    </section>

    <footer id="contact" className="py-20 bg-[#f7f6f5]/90 text-center relative z-10 w-full">
        <h2 className="text-2xl mb-5 tracking-[5px] text-text-gray font-serif">無名牛排</h2>
        <p className="text-text-gray mb-8">臺北市南港區南港路一段57號 | 營業時間：週一至週日 11:30-21:30</p>
        
        <div className="flex justify-center gap-5 mb-10">
            {['instagram', 'facebook-f', 'twitter', 'tripadvisor'].map(icon => (
                <a key={icon} href="#" className="w-10 h-10 rounded-full bg-text-gray text-white flex items-center justify-center hover:bg-btn-red transition-colors">
                    <i className={`fab fa-${icon}`}></i>
                </a>
            ))}
        </div>
        
        <div className="mb-8">
            <h2 className="text-text-gray text-xl font-bold">無名牛排</h2>
            <p className="text-text-gray text-sm mt-1">平價大碗 • 食在好味道</p>
        </div>
        
        <p className="text-text-gray text-sm">&copy; 2024 無名牛排. 保留所有權利.</p>
    </footer>
  </>
);