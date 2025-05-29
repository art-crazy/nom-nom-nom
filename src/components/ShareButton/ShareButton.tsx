'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../UI/Button/Button';
import styles from './ShareButton.module.scss';
import { VkIcon } from '../icons/VkIcon';
import { TelegramIcon } from '../icons/TelegramIcon';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { OkIcon } from '../icons/OkIcon';
import { CopyIcon } from '../icons/CopyIcon';
import { ShareIcon } from '../icons/ShareIcon';

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
      icon: <VkIcon />,
      action: () => window.open(`https://vk.com/share.php?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'Одноклассники',
      icon: <OkIcon />,
      action: () => window.open(`https://connect.ok.ru/offer?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon />,
      action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`, '_blank')
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />,
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + fullUrl)}`, '_blank')
    },
    {
      name: 'Скопировать ссылку',
      icon: <CopyIcon />,
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
      <Button onClick={() => setIsOpen(!isOpen)}>
        <ShareIcon className={styles.shareIcon} />
        Поделиться
      </Button>

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
