import StandardLayout from "../../compos/StandardLayout";

const Sommelier: React.FC<{}> = ({}) => {
   const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   const photos = ["/homeSommelier.webp"];

   return (
      <>
         <StandardLayout>
            <StandardLayout.Content>
               <div className="w-[600px] font-europa-reg text-lg">
                  <p className="font-europa-demi text-5xl">
                     Wine Experience & Cheese
                  </p>
                  <p className="mb-4 font-europa-light-ita">
                     A tasting of 4 bottles of wine with cheeze and charcuterie.
                  </p>
                  <p>
                     Guided by a certified Level I Master Sommelier from the
                     Court of Masters in Laguna Niguel.
                  </p>
                  <p>
                     Occasions Now: Ski, Couples, Girls Weekend etc. Enjoy a
                     curated tasting in your accomidation.
                  </p>
               </div>
            </StandardLayout.Content>
            <StandardLayout.Media videoUrl={videoUrl} photos={photos} />
         </StandardLayout>
      </>
   );
};

export default Sommelier;
