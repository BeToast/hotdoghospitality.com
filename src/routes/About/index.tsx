import { categories } from "../Home";
import ImageCard from "./ImageCard";

const About = () => {
   return (
      <div className="w-full h-full flex flex-row items-start justify-center relative gap-8 px-8 pb-16">
         <div className="flex flex-col h-full w-[800px]">
            <div className="flex-grow font-europa-light text-2xl">
               <div className="flex items-center gap-4 mb-12 w-full">
                  <img
                     src="/fullHotDogHospitality.svg"
                     alt="Logo"
                     className="h-32"
                  />
               </div>
               {/* <h1 className="text-5xl font-europa-demi mb-6">
                  About Hot Dog Hospitality
               </h1> */}
               <p>
                  At fourteen years old I knew my path. I found my passion at
                  Flanders Fish Market in Flanders CT, I want to enable others
                  to experience the same joy I get from eating quality food. HDH
                  is based on quality, comeraderie, happines, and memories that
                  last a lifetime. My experiences in the Hamptions, Connecticut,
                  Boston, Maui, Korea, Taiwan, Monterey, Indian Wells, and
                  finally Aspen enable me to share outstanding food with you
                  that is untainted. Let the food speak - Chris Mitchum
                  founder/chef
               </p>
            </div>
            <div className="flex flex-row gap-8 justify-start items-center">
               {categories.map((category) => (
                  <ImageCard
                     key={category.id}
                     id={category.id}
                     label={category.label}
                     src={category.src}
                  />
               ))}
            </div>
         </div>
         <div className="h-full w-[calc((100vh-264px)*(979/1500))]">
            <img
               src="/chefie.webp"
               alt="Chef"
               className="w-full h-full object-cover rounded-lg"
            />
         </div>
      </div>
   );
};

export default About;
