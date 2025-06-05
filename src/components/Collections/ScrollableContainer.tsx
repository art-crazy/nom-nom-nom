'use client';

import { useRef } from 'react';
import ScrollArrows from './ScrollArrows';
import styles from './Collections.module.scss';

interface ScrollableContainerProps {
  children: React.ReactNode;
  scrollAmount: number;
}

export default function ScrollableContainer({ children, scrollAmount }: ScrollableContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.scrollableWrapper}>
      <div ref={containerRef} className={styles.scrollableContent}>
        {children}
      </div>
      <ScrollArrows containerRef={containerRef} scrollAmount={scrollAmount} />
    </div>
  );
} 