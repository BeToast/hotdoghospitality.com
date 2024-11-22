import React, { useEffect, useRef } from "react";
import { useMediaCache } from "./mediaCache";

interface CachedYouTubeEmbedProps {
   videoUrl: string;
}

export const CachedYouTubeEmbed: React.FC<CachedYouTubeEmbedProps> = ({
   videoUrl,
}) => {
   const iframeRef = useRef<HTMLIFrameElement>(null);
   const { getCachedMedia, setCachedMedia } = useMediaCache();

   // Convert YouTube URL to embed URL
   const getEmbedUrl = (url: string) => {
      const videoId = url.match(
         /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([^"&?\/\s]{11})/
      )?.[1];
      return `https://www.youtube.com/embed/${videoId}`;
   };

   useEffect(() => {
      const embedUrl = getEmbedUrl(videoUrl);
      const cachedIframe = getCachedMedia(embedUrl);

      if (cachedIframe && iframeRef.current) {
         // If we have a cached iframe, clone and use it
         const clonedNode = cachedIframe.cloneNode(true) as HTMLIFrameElement;
         iframeRef.current.parentNode?.replaceChild(
            clonedNode,
            iframeRef.current
         );
      } else if (iframeRef.current) {
         // If no cache exists, cache the new iframe
         setCachedMedia(embedUrl, iframeRef.current);
      }
   }, [videoUrl, getCachedMedia, setCachedMedia]);

   return (
      <iframe
         ref={iframeRef}
         src={getEmbedUrl(videoUrl)}
         width="100%"
         height="500"
         frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
      />
   );
};
