import { useState } from "react";
import "./style.css";

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

   const getYouTubeEmbedUrl = (url: string) => {
      const videoId = url.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
   };

   return (
      <>
         <div className="w-1/2">
            <div className="media-container">
               <div
                  className={`media-item ${
                     mediaType === "video" ? "active" : ""
                  }`}
               >
                  <iframe
                     width="560"
                     height="315"
                     src={getYouTubeEmbedUrl(videoUrl)}
                     title="YouTube video player"
                     frameBorder="0"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               </div>

               <div
                  className={`media-item ${
                     mediaType === "photo" ? "active" : ""
                  }`}
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
      </>
   );
};

const StandardLayout: StandardLayoutComponent = ({ children }) => {
   return <div className="w-full flex flex-row">{children}</div>;
};

StandardLayout.Content = Content;
StandardLayout.Media = Media;

export default StandardLayout;
