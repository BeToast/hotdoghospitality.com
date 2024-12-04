import "./style.css";
import StandardLayout from "../../compos/StandardLayout";
import SkiSigns from "../../compos/SkiSign";

const Culinary: React.FC<{}> = ({}) => {
   const videoUrl = "https://www.youtube.com/watch?v=EXVR-_lA8WA";
   const photos = [
      "/intermediateCulinary.webp",
      "/advancedCulinary.webp",
      "/doubleDiamondCulinary.webp",
   ];

   return (
      <StandardLayout>
         <StandardLayout.Content>
            <SkiSigns />
         </StandardLayout.Content>
         <StandardLayout.Media videoUrl={videoUrl} photos={photos} />
      </StandardLayout>
   );
};

export default Culinary;
