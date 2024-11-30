import { useState } from "react";
import TrailSign, { Difficulty } from "./TrailSign";

const SkiSign: React.FC = () => {
   const [openSign, setOpenSign] = useState<Difficulty | undefined>(
      "intermediate"
   );

   const handleToggle = (signId: Difficulty) => {
      setOpenSign(openSign === signId ? undefined : signId);
   };

   return (
      <div className="max-w-md mx-auto space-y-4">
         <TrailSign
            title="Intermediate"
            isOpen={openSign === "intermediate"}
            onToggle={() => handleToggle("intermediate")}
            difficulty="intermediate"
         >
            <p>I am just having a little fun</p>
            <ul>
               <li>Meats</li>
               <li>Cheeses</li>
               <li>Grapes</li>
               <li>Dried Fruit</li>
               <li>Jam</li>
               <li>Crackers</li>
               <li>
                  Hummus w/ Cucumber, Blanched Carrots, Celery, Bell Peppers,
                  Olives
               </li>
               <li>24 hour fermented bagels</li>
               <li>Smoked Salmon</li>
               <li>Herbs and Spices</li>

               <p>$45 per person</p>
            </ul>
         </TrailSign>

         <TrailSign
            title="Expert"
            isOpen={openSign === "expert"}
            onToggle={() => handleToggle("expert")}
            difficulty="expert"
         >
            <p>
               Start on the right side or the left side but not down the middle!
            </p>
            <p>Includes everthing in Intermediate, plus:</p>
            <ul>
               <li>Chilled Poached Shrimp</li>
               <li>Lemon Wedges</li>
               <li>Cocktail Sauce</li>
               <li>Lemon Chive Aioli</li>
               <li>Parmesan Chicken Salad</li>
               <li>Green Bean Quinoa</li>
               <li>Buttermilk Mayonnaise</li>
               <li>Rolls or Butter Lettuce Cups, Both if requested</li>
            </ul>
         </TrailSign>

         <TrailSign
            title="Double Diamond"
            isOpen={openSign === "double-diamond"}
            onToggle={() => handleToggle("double-diamond")}
            difficulty="double-diamond"
         >
            <p>What the heck's a cheese board!? </p>
            <p>Includes everthing in Intermediate and Expert plus:</p>
            <ul>
               <li>Cheeses</li>
               <li>Medallions</li>
               <li>Dijon Shallot Aioli</li>
               <li>Chilled Sliced Filet Mignon</li>
               <li>Horseradish Cream</li>
               <li>Chimi-churri</li>
               <li>Rolls or Butter Lettuce Cups</li>
            </ul>
         </TrailSign>
      </div>
   );
};

export default SkiSign;
