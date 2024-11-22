// mediaCache.tsx
import React, { createContext, useContext, useRef, useCallback } from "react";

interface MediaCache {
   [key: string]: HTMLIFrameElement | null;
}

interface MediaCacheContextType {
   cache: MediaCache;
   getCachedMedia: (url: string) => HTMLIFrameElement | null;
   setCachedMedia: (url: string, element: HTMLIFrameElement) => void;
}

const MediaCacheContext = createContext<MediaCacheContextType | null>(null);

export const MediaCacheProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const cacheRef = useRef<MediaCache>({});

   const getCachedMedia = useCallback((url: string) => {
      return cacheRef.current[url] || null;
   }, []);

   const setCachedMedia = useCallback(
      (url: string, element: HTMLIFrameElement) => {
         cacheRef.current[url] = element;
      },
      []
   );

   return (
      <MediaCacheContext.Provider
         value={{
            cache: cacheRef.current,
            getCachedMedia,
            setCachedMedia,
         }}
      >
         {children}
      </MediaCacheContext.Provider>
   );
};

export const useMediaCache = () => {
   const context = useContext(MediaCacheContext);
   if (!context) {
      throw new Error("useMediaCache must be used within a MediaCacheProvider");
   }
   return context;
};
