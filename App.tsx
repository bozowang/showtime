import React, { useState, useEffect } from 'react';
import { useProtection } from './hooks/useProtection';
import { 
  LoadingOverlay, 
  FullscreenOverlay, 
  ViolationModal, 
  Lightbox, 
  VideoBackground, 
  ProtectionBadge,
  VideoControls 
} from './components/UIComponents';
import { Header, LeftMenu, MobileMenu } from './components/Navigation';
import { 
  HeroSection, 
  AboutSection, 
  MixedSection, 
  PhilosophySection, 
  MenuSection, 
  StoreInfoSection, 
  GallerySection, 
  ReservationAndFooter 
} from './components/Sections';
import { 
  MIXED_SECTION_1_SLIDES, 
  MIXED_SECTION_2_SLIDES, 
  MIXED_SECTION_1_FIXED, 
  MIXED_SECTION_2_FIXED 
} from './constants';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [videoMuted, setVideoMuted] = useState(true);
  const [videoPaused, setVideoPaused] = useState(false);
  
  const { violationMessage, setViolationMessage } = useProtection();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterFullscreen = async () => {
    try {
      await document.documentElement.requestFullscreen();
      setShowFullscreenPrompt(false);
    } catch (err) {
      console.error(err);
      setViolationMessage('無法進入全螢幕模式，請檢查瀏覽器設定。');
      // Hide prompt anyway if failed, to not block user
      setShowFullscreenPrompt(false);
    }
  };

  const closeViolation = () => {
    setViolationMessage(null);
    // If not in fullscreen, try again (aggressive enforcement from original code)
    if (!document.fullscreenElement && !showFullscreenPrompt) {
       // Optional: re-trigger fullscreen or just let it be. 
       // Original code re-requested fullscreen.
       document.documentElement.requestFullscreen().catch(() => {});
    }
  };

  return (
    <div className="min-h-screen text-dark font-sans">
      <LoadingOverlay visible={loading} />
      <FullscreenOverlay visible={showFullscreenPrompt && !loading} onEnterFullscreen={handleEnterFullscreen} />
      <ViolationModal message={violationMessage} onClose={closeViolation} />
      <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />
      
      <VideoBackground muted={videoMuted} paused={videoPaused} />
      <ProtectionBadge />
      <VideoControls 
        muted={videoMuted} 
        paused={videoPaused} 
        toggleMute={() => setVideoMuted(!videoMuted)} 
        togglePause={() => setVideoPaused(!videoPaused)} 
      />

      <Header onOpenMobileMenu={() => setMobileMenuOpen(true)} />
      <LeftMenu />
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      <main>
        <HeroSection />
        <AboutSection />
        
        {/* Mixed Layout 1: Left Fixed, Right Slider */}
        <MixedSection 
          fixedImage={MIXED_SECTION_1_FIXED}
          slides={MIXED_SECTION_1_SLIDES}
          direction="right"
        />

        <PhilosophySection />

        {/* Mixed Layout 2: Left Slider, Right Fixed */}
        <MixedSection 
          fixedImage={MIXED_SECTION_2_FIXED}
          slides={MIXED_SECTION_2_SLIDES}
          direction="left"
        />

        <MenuSection />
        <StoreInfoSection />
        <GallerySection onImageClick={setLightboxImage} />
        <ReservationAndFooter />
      </main>
    </div>
  );
};

export default App;
