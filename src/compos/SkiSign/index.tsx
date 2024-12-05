import { useState } from "react";
import TrailSign, { Difficulty } from "./TrailSign";

const SkiSign: React.FC = () => {
   const [openSign, setOpenSign] = useState<Difficulty | undefined>(
      "intermediate"
   );

   const handleToggle = (signId: Difficulty) => {
      setOpenSign(signId);
   };

   return (
      <div className="w-[625px] mx-auto space-y-4">
         <TrailSign
            title="Intermediate"
            isOpen={openSign === "intermediate"}
            onToggle={() => handleToggle("intermediate")}
            difficulty="intermediate"
         >
            <p className="quote">
               &ldquo; There's more to do in snow than ski. &rdquo;
            </p>
            <ul>
               <li>4 Artisanal Cheeses</li>
               <li>Grapes</li>
               <li>Dried Fruit</li>
               <li>Crackers</li>
               <li>
                  Hummus{" "}
                  <span className="">
                     w/ Cucumber, Blanched Carrots, Celery, Bell Peppers, Olives
                  </span>
               </li>
               <li>24 hour fermented bagels</li>
               <li>Smoked Salmon Spread</li>
               <li>Herb Spread</li>

               <p className="price">$45 per person</p>
            </ul>
         </TrailSign>

         <TrailSign
            title="Advanced"
            isOpen={openSign === "expert"}
            onToggle={() => handleToggle("expert")}
            difficulty="expert"
         >
            <p className="quote">
               &ldquo; Ski the right or left side but not down the middle!
               &rdquo;
            </p>
            <ul>
               <li>
                  Includes everthing in{" "}
                  <span className="font-europa-medium">
                     <div className="h-[14px] w-[14px] pt-[2px] bg-blue-900 inline-block" />{" "}
                     Intermediate
                  </span>
               </li>
               <li>Chilled Poached Shrimp</li>
               <li>Lemon Wedges</li>
               <li>Cocktail Sauce</li>
               <li>Lemon Chive Aioli</li>
               <li>Terragon Chicken Salad</li>
               <li>Green Bean Quinoa</li>
               <li>Buttermilk Mayonnaise</li>
               <li>Rolls or Butter Lettuce Cups, Both if requested</li>
            </ul>
            <p className="price">$85 per person</p>
         </TrailSign>

         <TrailSign
            title="Double Diamond"
            isOpen={openSign === "double-diamond"}
            onToggle={() => handleToggle("double-diamond")}
            difficulty="double-diamond"
         >
            <p className="quote">
               &ldquo; What the f*ck's is a Chinese Downhill!? &rdquo;
            </p>
            <ul>
               <li>
                  Includes everthing in{" "}
                  <span className="font-europa-medium">
                     <div className="h-[14px] w-[14px] pt-[2px] bg-blue-900 inline-block" />{" "}
                     Intermediate
                  </span>{" "}
                  and{" "}
                  <span className="font-europa-medium">
                     <div className="mx-[2px] mb-[1px] w-3 h-3 inline-block">
                        <div className="h-[12px] w-[12px] bg-black rotate-45" />
                     </div>
                     {"  "}
                     Advanced
                  </span>
               </li>
               <li>Chilled Salmon Medallions</li>
               <li>Dijon Shallot Aioli</li>
               <li>Chilled Sliced Filet Mignon</li>
               <li>Horseradish Cream</li>
               <li>Chimi-churri</li>
               <li>Rolls or Butter Lettuce Cups</li>
            </ul>
            <p className="price">$125 per person</p>
         </TrailSign>
      </div>
   );
};

export default SkiSign;
