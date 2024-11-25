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
            Suitable for skiers who can link turns and stop safely on moderate
            slopes.
         </TrailSign>

         <TrailSign
            title="Expert"
            isOpen={openSign === "expert"}
            onToggle={() => handleToggle("expert")}
            difficulty="expert"
         >
            For advanced skiers comfortable with steep terrain and varied snow
            conditions.
         </TrailSign>

         <TrailSign
            title="Double Diamond"
            isOpen={openSign === "double-diamond"}
            onToggle={() => handleToggle("double-diamond")}
            difficulty="double-diamond"
         >
            Extremely challenging terrain for expert skiers only.
         </TrailSign>
      </div>
   );
};

export default SkiSign;
