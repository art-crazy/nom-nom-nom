'use client'
import React, { useState, useEffect, useRef } from 'react';
import styles from './MediaGallery.module.scss';
import Image from 'next/image';
import { VideoPlayer } from '@/components/VideoPlayer/VideoPlayer';
import { getRutubeThumbnail } from '@/utils/videoThumbnails';

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
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getSlideWidth = () => {
    if (containerRef.current) {
      return containerRef.current.getBoundingClientRect().width;
    }
    return 0;
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const currentX = e.targetTouches[0].clientX;
    const deltaX = currentX - touchStart;

    const slideWidth = getSlideWidth();
    const gap = 16;
    const totalSlideWidth = slideWidth + gap;
    const currentTranslateX = -selected * totalSlideWidth;
    const newTranslateX = currentTranslateX + deltaX;

    setTranslateX(newTranslateX);
    setTouchEnd(currentX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    const slideWidth = getSlideWidth();

    let newSelected = selected;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        newSelected = (selected + 1) % media.length;
      } else {
        newSelected = (selected - 1 + media.length) % media.length;
      }
      setSelected(newSelected);
    }

    setIsDragging(false);
    const gap = 16;
    const totalSlideWidth = slideWidth + gap;
    setTranslateX(-newSelected * totalSlideWidth);
  };

  useEffect(() => {
    const updatePosition = () => {
      const slideWidth = getSlideWidth();
      if (slideWidth > 0) {
        const gap = 16;
        const totalSlideWidth = slideWidth + gap;
        setTranslateX(-selected * totalSlideWidth);
      }
    };

    const timer = setTimeout(updatePosition, 0);
    window.addEventListener('resize', updatePosition);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [selected]);

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
                  src={item.src.includes('rutube.ru') ? getRutubeThumbnail(item.src) || item.src : item.src}
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
      <div
        ref={containerRef}
        className={styles.mainMedia}
      >
        {/* Десктопная версия - показываем только выбранный элемент */}
        <div className={styles.desktopMedia}>
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

        {/* Мобильная версия - список с свайпом */}
        <div className={styles.mobileMedia}>
          <div
            className={`${styles.mediaList} ${isDragging ? styles.dragging : ''}`}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {media.map((item, idx) => (
              <div
                key={idx}
                className={styles.mediaItem}
                onTouchStart={item.type === 'image' ? onTouchStart : undefined}
                onTouchMove={item.type === 'image' ? onTouchMove : undefined}
                onTouchEnd={item.type === 'image' ? onTouchEnd : undefined}
              >
                {item.type === 'image' ? (
                  <Image
                    src={item.src}
                    alt={item.alt || 'Изображение'}
                    width={mainImageSize.width}
                    height={mainImageSize.height}
                    className={styles.mainImg}
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className={styles.videoWrapper}>
                    <VideoPlayer videoUrl={item.src} title={item.alt || 'Видео'} />
                    <div
                      className={styles.swipeOverlay}
                      onTouchStart={onTouchStart}
                      onTouchMove={onTouchMove}
                      onTouchEnd={onTouchEnd}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Точки-индикаторы */}
      {media.length > 1 && (
        <div className={styles.dotsContainer}>
          {media.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${selected === idx ? styles.active : ''}`}
              onClick={() => setSelected(idx)}
              aria-label={`Перейти к слайду ${idx + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};
