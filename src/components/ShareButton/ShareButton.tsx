'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ShareButton.module.scss';

interface ShareButtonProps {
  url: string;
  title: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ url, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const fullUrl = typeof window !== 'undefined' 
    ? `${window.location.origin}${url}`
    : url;

  const shareOptions = [
    {
      name: 'ВКонтакте',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2ZM18.15 16.27H16.69C16.14 16.27 15.97 15.97 14.86 14.94C13.86 14 13.47 13.74 13.24 13.74C12.95 13.74 12.82 13.85 12.82 14.32V15.69C12.82 16.04 12.71 16.27 11.82 16.27C10.38 16.27 8.94 15.31 7.83 13.77C5.72 10.8 5.42 9.7 5.42 9.39C5.42 9.2 5.53 9 5.95 9H7.41C7.78 9 7.95 9.2 8.11 9.58C8.53 10.68 9.53 12.46 9.65 12.46C9.83 12.46 9.9 12.35 9.9 11.97V10.39C9.87 9.54 9.74 9.44 9.74 9.2C9.74 9 9.87 8.85 10.07 8.7C10.25 8.55 11.1 7.77 12.37 6.55C13.77 5.2 14.56 4.5 14.87 4.5C15.07 4.5 15.27 4.65 15.27 5.05V6.77C15.27 7.12 15.15 7.27 15.15 7.5C15.15 7.7 15.27 7.85 15.47 8C15.67 8.15 16.52 8.85 17.37 9.7C18.52 10.85 19.07 11.5 19.27 11.85C19.52 12.25 19.52 12.5 19.27 12.85C19.07 13.2 18.52 13.85 17.37 15C16.52 15.85 15.67 16.55 15.47 16.7C15.27 16.85 15.15 17 15.15 17.2C15.15 17.43 15.27 17.58 15.27 17.93V19.25C15.27 19.65 15.15 19.85 14.87 19.85C14.56 19.85 13.77 19.15 12.37 17.8C11.1 16.58 10.25 15.8 10.07 15.65C9.87 15.5 9.74 15.35 9.74 15.15C9.74 14.92 9.87 14.77 9.9 14.32C9.9 13.94 9.83 13.83 9.65 13.83C9.53 13.83 8.53 15.61 8.11 16.71C7.95 17.09 7.78 17.29 7.41 17.29H5.95C5.53 17.29 5.42 17.09 5.42 16.9C5.42 16.59 5.72 15.49 7.83 12.52C8.94 10.98 10.38 10.02 11.82 10.02C12.71 10.02 12.82 10.25 12.82 10.6V12.03C12.82 12.41 12.95 12.52 13.24 12.52C13.47 12.52 13.86 12.26 14.86 11.32C15.97 10.29 16.14 9.99 16.69 9.99H18.15C18.57 9.99 18.68 10.19 18.68 10.6V15.66C18.68 16.07 18.57 16.27 18.15 16.27Z"/>
        </svg>
      ),
      action: () => window.open(`https://vk.com/share.php?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'Telegram',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.2-.04-.28-.02-.12.02-1.92 1.22-5.41 3.58-.51.36-.98.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.28-.49.77-.75 3.02-1.31 5.03-2.17 6.03-2.58 2.88-1.18 3.48-1.38 3.86-1.38.08 0 .26.02.38.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + fullUrl)}`, '_blank')
    },
    {
      name: 'Скопировать ссылку',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24">
          <path fill="currentColor" d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      ),
      action: async () => {
        try {
          await navigator.clipboard.writeText(fullUrl);
          alert('Ссылка скопирована!');
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      }
    }
  ];

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button 
        className={styles.shareBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg viewBox="0 0 24 24" width="24" height="24" className={styles.shareIcon}>
          <path fill="currentColor" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
        </svg>
        Поделиться
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {shareOptions.map((option, index) => (
            <button
              key={index}
              className={styles.option}
              onClick={() => {
                option.action();
                setIsOpen(false);
              }}
            >
              <span className={styles.icon}>{option.icon}</span>
              <span>{option.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShareButton; 