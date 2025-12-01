import React from 'react';

// Loading Overlay
export const LoadingOverlay: React.FC<{ visible: boolean }> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[10001] flex flex-col items-center justify-center bg-black/95 text-white transition-opacity duration-500">
      <div className="w-[60px] h-[60px] border-8 border-white/30 border-t-accent rounded-full animate-spin mb-5"></div>
      <p className="text-lg tracking-wider">牛排美味加載中...</p>
    </div>
  );
};

// Fullscreen Prompt Overlay
interface FullscreenOverlayProps {
  onEnterFullscreen: () => void;
  visible: boolean;
}
export const FullscreenOverlay: React.FC<FullscreenOverlayProps> = ({ onEnterFullscreen, visible }) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white text-center p-4 transition-all duration-500">
      <p className="text-2xl mb-6">進入全屏模式，體驗更佳視覺效果</p>
      <button 
        onClick={onEnterFullscreen}
        className="px-8 py-3 bg-[#ff6600] text-white text-lg rounded hover:bg-[#ff8833] hover:scale-105 transition-all"
      >
        進入全螢幕
      </button>
    </div>
  );
};

// Violation/Alert Modal
interface ViolationModalProps {
  message: string | null;
  onClose: () => void;
}
export const ViolationModal: React.FC<ViolationModalProps> = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#2a2a40] p-10 rounded-2xl shadow-2xl max-w-lg w-full border-2 border-[#ff6600] text-center animate-[bounce_0.8s_ease-in-out]">
        <h2 className="text-3xl text-[#ff6600] mb-5"><i className="fas fa-exclamation-circle"></i></h2>
        <p className="text-white text-xl leading-relaxed mb-8">{message}</p>
        <button 
          onClick={onClose}
          className="px-6 py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-colors"
        >
          確定
        </button>
      </div>
    </div>
  );
};

// Image Lightbox
interface LightboxProps {
  src: string | null;
  onClose: () => void;
}
export const Lightbox: React.FC<LightboxProps> = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex flex-col items-center justify-center p-4" onClick={onClose}>
      <img src={src} alt="Full view" className="max-w-[95%] max-h-[95%] rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.5)] object-contain" />
      <p className="absolute bottom-8 text-gray-400 text-sm tracking-widest pointer-events-none">點擊任意處關閉</p>
    </div>
  );
};

// Video Background
export const VideoBackground: React.FC<{ muted: boolean; paused: boolean }> = ({ muted, paused }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef.current) {
      if (paused) videoRef.current.pause();
      else videoRef.current.play();
      videoRef.current.muted = muted;
    }
  }, [paused, muted]);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
      >
        <source src="https://assets.codepen.io/3364143/sample.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[#0a0a2a]/70"></div>
    </div>
  );
};

// Protection Badge
export const ProtectionBadge: React.FC = () => (
  <div className="fixed bottom-5 left-5 bg-black/60 text-white px-4 py-2 rounded-full text-sm flex items-center gap-2 z-[100] backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity cursor-default">
    <i className="fas fa-shield-alt"></i>
    <span>內容保護已啟用</span>
  </div>
);

// Video Controls
interface VideoControlsProps {
  muted: boolean;
  paused: boolean;
  toggleMute: () => void;
  togglePause: () => void;
}
export const VideoControls: React.FC<VideoControlsProps> = ({ muted, paused, toggleMute, togglePause }) => (
  <div className="fixed bottom-5 right-5 z-[100] flex gap-2">
    <button 
      onClick={toggleMute}
      className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
      title="靜音/取消靜音"
    >
      <i className={`fas ${muted ? 'fa-volume-mute' : 'fa-volume-up'}`}></i>
    </button>
    <button 
      onClick={togglePause}
      className="w-10 h-10 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-black/80 transition-colors"
      title="暫停/播放"
    >
      <i className={`fas ${paused ? 'fa-play' : 'fa-pause'}`}></i>
    </button>
  </div>
);