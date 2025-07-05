'use client'
import React, { useState } from 'react';
import styles from './MediaGallery.module.scss';
import Image from 'next/image';
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer';

export type MediaItem = {
  type: 'image' | 'video';
  src: string;
  alt?: string;
};

interface MediaGalleryProps {
  media: MediaItem[];
  mainImageSize?: { width: number; height: number };
}

export const MediaGallery: React.FC<MediaGalleryProps> = ({ media, mainImageSize = { width: 800, height: 600 } }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.thumbnails}>
        {media.map((item, idx) => (
          <button
            key={idx}
            className={styles.thumbnailBtn + (selected === idx ? ' ' + styles.active : '')}
            onClick={() => setSelected(idx)}
            aria-label={item.type === 'video' ? 'Видео' : 'Изображение'}
            type="button"
          >
            {item.type === 'image' ? (
              <Image
                src={item.src}
                alt={item.alt || 'Изображение'}
                width={80}
                height={60}
                className={styles.thumbnailImg}
                style={{ objectFit: 'cover' }}
              />
            ) : (
              <div className={styles.videoThumb}>
                <span className={styles.videoIcon}>▶</span>
                <Image
                  src={item.src}
                  alt={item.alt || 'Видео'}
                  width={80}
                  height={60}
                  className={styles.thumbnailImg}
                  style={{ objectFit: 'cover', opacity: 0.7 }}
                />
              </div>
            )}
          </button>
        ))}
      </div>
      <div className={styles.mainMedia}>
        {media[selected].type === 'image' ? (
          <Image
            src={media[selected].src}
            alt={media[selected].alt || 'Изображение'}
            width={mainImageSize.width}
            height={mainImageSize.height}
            className={styles.mainImg}
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <VideoPlayer videoUrl={media[selected].src} title={media[selected].alt || 'Видео'} />
        )}
      </div>
    </div>
  );
};
