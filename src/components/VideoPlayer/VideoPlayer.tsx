'use client';

import React from 'react';
import styles from './VideoPlayer.module.scss';

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, title }) => {
  // Извлекаем ID видео из URL Rutube
  console.log('videoUrl', videoUrl)
  const getRutubeVideoId = (url: string): string | null => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname.includes('rutube.ru')) {
        // Поддерживаем разные форматы URL Rutube
        // Обычные видео: /video/ID
        let pathMatch = urlObj.pathname.match(/\/video\/([a-zA-Z0-9]+)/);
        if (pathMatch) {
          return pathMatch[1];
        }

        // Shorts: /shorts/ID
        pathMatch = urlObj.pathname.match(/\/shorts\/([a-zA-Z0-9]+)/);
        if (pathMatch) {
          return pathMatch[1];
        }
      }
    } catch (error) {
      console.error('Invalid video URL:', error);
    }
    return null;
  };

  const videoId = getRutubeVideoId(videoUrl);

  console.log('videoId', videoId)
  if (!videoId) {
    return (
      <div className={styles.errorContainer}>
        <p>Не удалось загрузить видео</p>
      </div>
    );
  }

  const embedUrl = `https://rutube.ru/play/embed/${videoId}`;

  return (
    <div className={styles.videoContainer}>
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allowFullScreen
        className={styles.videoFrame}
        loading="lazy"
      />
    </div>
  );
};
