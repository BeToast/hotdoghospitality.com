import StandardLayout from "../../compos/StandardLayout";
import "./style.css";

const Wine: React.FC<{}> = ({}) => {
   const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   const photos = [
      "https://img.rgstatic.com/content/movie/12badddc-f7fb-41e0-998c-db54147d8db1/backdrop-1280.jpg",
   ];

   return (
      <>
         <StandardLayout>
            <StandardLayout.Content>
               <p>
                  Wine Experience & Cheese I Love Wine & passed by Level I
                  Master Sommelier Test at the Masters in Laguna Niguel.
                  Occasions Now: Ski, Couples, Girls World etc. Enjoy a curated
                  tasting in your house. We will taste 4 wines & have some
                  cheeses aged fruit.
               </p>
            </StandardLayout.Content>
            <StandardLayout.Media videoUrl={videoUrl} photos={photos} />
         </StandardLayout>
      </>
   );
};

export default Wine;
