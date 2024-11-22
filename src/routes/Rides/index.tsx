import StandardLayout from "../../compos/StandardLayout";
import "./style.css";

const Rides: React.FC<{}> = ({}) => {
   const videoUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
   const photos = [
      "https://img.rgstatic.com/content/movie/12badddc-f7fb-41e0-998c-db54147d8db1/backdrop-1280.jpg",
   ];
   return (
      <>
         <StandardLayout>
            <StandardLayout.Content>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
               </p>
            </StandardLayout.Content>
            <StandardLayout.Media videoUrl={videoUrl} photos={photos} />
         </StandardLayout>
      </>
   );
};

export default Rides;
