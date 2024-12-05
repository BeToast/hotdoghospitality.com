import StandardLayout from "../../compos/StandardLayout";
import { airports } from "../../staticValues";

const VALLEY_RATE = 80;

const Rides: React.FC<{}> = () => {
   const photos = ["/homeRides.webp"];

   return (
      <StandardLayout>
         <StandardLayout.Content>
            <div className="space-y-12 p-8">
               <div>
                  <h2 className="font-europa-medium text-5xl mb-4">
                     Roaring Fork Valley
                  </h2>
                  <p className="text-3xl font-europa-reg">
                     ${VALLEY_RATE} per ride
                  </p>
               </div>

               <div>
                  <h2 className="font-europa-medium text-5xl">
                     Airport Services
                  </h2>
                  <p className="font-europa-reg text-2xl">
                     all prices are one-way
                  </p>
                  <div className="space-y-4">
                     {airports.map((airport) => (
                        <div
                           key={airport.code}
                           className="flex justify-between items-center py-4 px-6 bg-gray-50"
                        >
                           <span className="text-2xl font-europa-reg">
                              {airport.name} ({airport.code})
                           </span>
                           <span className="text-2xl font-europa-medium">
                              ${airport.fee}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </StandardLayout.Content>
         <StandardLayout.Media photos={photos} />
      </StandardLayout>
   );
};

export default Rides;
