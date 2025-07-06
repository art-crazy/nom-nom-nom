/**
 * Получает превью для Rutube видео
 */
export function getRutubeThumbnail(videoUrl: string): string | null {
  try {
    const urlObj = new URL(videoUrl);
    if (urlObj.hostname.includes('rutube.ru')) {
      // Извлекаем ID из URL
      let videoId: string | null = null;

      // Обычные видео: /video/ID
      let pathMatch = urlObj.pathname.match(/\/video\/([a-zA-Z0-9]+)/);
      if (pathMatch) {
        videoId = pathMatch[1];
      }

      // Shorts: /shorts/ID
      if (!videoId) {
        pathMatch = urlObj.pathname.match(/\/shorts\/([a-zA-Z0-9]+)/);
        if (pathMatch) {
          videoId = pathMatch[1];
        }
      }

      if (videoId) {
        return `https://rutube.ru/api/video/${videoId}/thumbnail/?redirect=1`;
      }
    }
  } catch (error) {
    console.error('Invalid Rutube URL:', error);
  }

  return null;
}
