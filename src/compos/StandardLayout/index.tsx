import { useState, useEffect } from "react";
import "./style.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ContentProps {
   children: React.ReactNode;
}

interface MediaProps {
   videoUrl?: string;
   photos?: string[];
}

interface StandardLayoutProps {
   children?: React.ReactNode;
}

interface StandardLayoutComponent extends React.FC<StandardLayoutProps> {
   Content: React.FC<ContentProps>;
   Media: React.FC<MediaProps>;
}

const Content: React.FC<ContentProps> = ({ children }) => {
   return <div className="h-full">{children}</div>;
};

const ImageCarousel = ({ photos }: { photos: string[] }) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const [isPaused, setIsPaused] = useState(false);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setIsVisible(true);
   }, []);

   useEffect(() => {
      if (!isPaused) {
         const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % photos.length);
         }, 3000);
         return () => clearInterval(timer);
      }
   }, [isPaused, photos.length]);

   const nextImage = () => {
      setActiveIndex((current) => (current + 1) % photos.length);
   };

   const prevImage = () => {
      setActiveIndex(
         (current) => (current - 1 + photos.length) % photos.length
      );
   };

   return (
      <div
         className={`h-1/2 w-full transition-opacity duration-700 ease-in-out ${
            isVisible ? "opacity-100" : "opacity-0"
         }`}
      >
         <div
            className="w-[calc(100%-12px)] h-[calc(100%-12px)] relative max-h-[calc(100vw*(9/16))]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
         >
            {photos.map((photo, index) => (
               <img
                  key={index}
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500
                     rounded-lg
                     ${
                        activeIndex === index
                           ? "z-10 opacity-100 translate-x-0 translate-y-0 shadow-2xl"
                           : "opacity-40 grayscale translate-x-3 translate-y-3 shadow-lg blur-[1px]"
                     }`}
               />
            ))}
            <button
               onClick={prevImage}
               className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
               <ChevronLeft className="w-6 h-6" />
            </button>

            <button
               onClick={nextImage}
               className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            >
               <ChevronRight className="w-6 h-6" />
            </button>
         </div>
      </div>
   );
};

const Media: React.FC<MediaProps> = ({ videoUrl, photos }) => {
   const hasVideo = Boolean(videoUrl);
   const hasPhotos = Boolean(photos?.length);

   if (!hasVideo && !hasPhotos) {
      return null;
   }

   const getYouTubeEmbedUrl = (url: string) => {
      const videoId = url?.split("v=")[1];
      return `https://www.youtube.com/embed/${videoId}`;
   };

   return (
      <div className="h-full w-[calc(((100vh-200px-100px)/2)*(16/9))] flex flex-col gap-8">
         {hasVideo && (
            <div className="h-1/2 w-full">
               <div className="w-full h-full relative overflow-hidden max-h-[calc(100vw*(9/16))]">
                  <iframe
                     className="absolute top-0 left-0 w-full h-full rounded-lg"
                     src={getYouTubeEmbedUrl(videoUrl!)}
                     title="YouTube video player"
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     allowFullScreen
                  />
               </div>
            </div>
         )}

         {hasPhotos && <ImageCarousel photos={photos!} />}
      </div>
   );
};

const StandardLayout: StandardLayoutComponent = ({ children }) => {
   return (
      <div className="w-full h-full flex flex-row items-start justify-center gap-8 px-8 pb-16">
         {children}
      </div>
   );
};

StandardLayout.Content = Content;
StandardLayout.Media = Media;

export default StandardLayout;
