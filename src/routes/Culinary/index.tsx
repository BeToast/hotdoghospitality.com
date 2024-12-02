import "./style.css";
import StandardLayout from "../../compos/StandardLayout";
import SkiSigns from "../../compos/SkiSign";

const Culinary: React.FC<{}> = ({}) => {
   const videoUrl = "https://www.youtube.com/watch?v=EXVR-_lA8WA";
   const photos = [
      "https://img.rgstatic.com/content/movie/12badddc-f7fb-41e0-998c-db54147d8db1/backdrop-1280.jpg",
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
