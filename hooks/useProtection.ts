import { useEffect, useState } from 'react';

export const useProtection = () => {
  const [violationMessage, setViolationMessage] = useState<string | null>(null);

  const triggerViolation = (msg: string) => {
    setViolationMessage(msg);
  };

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      triggerViolation('本網站圖片受版權保護，禁止下載與複製。');
    };

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      triggerViolation('本網站圖片受版權保護，禁止下載與複製。');
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        triggerViolation('禁止保存網頁內容。');
      }
      if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        triggerViolation('本網站內容受版權保護，禁止複製。');
      }
      if (e.key === 'F12') {
        e.preventDefault();
        triggerViolation('禁止使用開發者工具。');
      }
      if (e.key === 'Escape' && document.fullscreenElement) {
        e.preventDefault();
        triggerViolation('請勿使用ESC退出全屏，如需退出請聯繫管理員。');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return { violationMessage, setViolationMessage };
};