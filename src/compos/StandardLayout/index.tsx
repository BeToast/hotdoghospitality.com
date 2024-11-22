// components/StandardLayout.tsx
import { useState } from "react";
import "./style.css";
import { useMediaCache } from "../CachedYouTubeEmbed/mediaCache";

type MediaType = "video" | "photo";

interface ContentProps {
   children: React.ReactNode;
}

interface MediaProps {
   videoUrl: string;
   photos: string[];
}

interface StandardLayoutProps {
   children?: React.ReactNode;
}

// Define the compound component type
interface StandardLayoutComponent extends React.FC<StandardLayoutProps> {
   Content: React.FC<ContentProps>;
   Media: React.FC<MediaProps>;
}

const Content: React.FC<ContentProps> = ({ children }) => {
   return <div className="w-1/2 text-left">{children}</div>;
};

const Media: React.FC<MediaProps> = ({ videoUrl, photos }) => {
   const [mediaType, setMediaType] = useState<MediaType>("video");
   const { getCachedMedia, setCachedMedia } = useMediaCache();

   const getYouTubeEmbedUrl = (url: string) => {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
   };

   const embedUrl = getYouTubeEmbedUrl(videoUrl);
   const cachedIframe = getCachedMedia(embedUrl);

   const handleIframeRef = (node: HTMLIFrameElement | null) => {
      if (node && !cachedIframe) {
         setCachedMedia(embedUrl, node);
      }
   };

   return (
      <div className="w-1/2">
         <div className="media-container">
            <div
               className={`media-item ${mediaType === "video" ? "active" : ""}`}
            >
               {cachedIframe ? (
                  <div
                     dangerouslySetInnerHTML={{
                        __html: cachedIframe.outerHTML,
                     }}
                  />
               ) : (
                  <iframe
                     ref={handleIframeRef}
                     width="560"
                     height="315"
                     src={embedUrl}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               )}
            </div>

            <div
               className={`media-item ${mediaType === "photo" ? "active" : ""}`}
            >
               {photos.map((photo, index) => (
                  <img key={index} src={photo} alt={`Photo ${index + 1}`} />
               ))}
            </div>
         </div>

         <button
            className="toggle-button"
            onClick={() =>
               setMediaType(mediaType === "video" ? "photo" : "video")
            }
         >
            Switch to {mediaType === "video" ? "Photos" : "Video"}
         </button>
      </div>
   );
};

const StandardLayout: StandardLayoutComponent = ({ children }) => {
   return <div className="w-full flex flex-row">{children}</div>;
};

StandardLayout.Content = Content;
StandardLayout.Media = Media;

export default StandardLayout;
