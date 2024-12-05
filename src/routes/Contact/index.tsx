import { useState } from "react";
import Input from "../../compos/ui/Input";
import Textarea from "../../compos/ui/Textarea";
import Calendar from "../../compos/ui/Calendar";
import { airports } from "../../staticValues";

type FlightType = "arrival" | "departure";
type CulinaryOption = "INTERMEDIATE" | "ADVANCED" | "DOUBLE_DIAMOND" | "NONE";

type FlightInfo = {
   date: Date | null;
   time: string;
   airport: string;
   flightNumber: string;
};

type FlightState = Record<FlightType, FlightInfo>;

const CULINARY_OPTIONS: Record<
   CulinaryOption,
   { label: string; price: number; icon: string }
> = {
   INTERMEDIATE: { label: "Intermediate", price: 45, icon: "■" },
   ADVANCED: { label: "Advanced", price: 85, icon: "◆" },
   DOUBLE_DIAMOND: { label: "Double Diamond", price: 125, icon: "◆◆" },
   NONE: { label: "No Culinary", price: 0, icon: "" },
};

const Contact = () => {
   const [contactInfo, setContactInfo] = useState({
      name: "",
      phone: "",
      email: "",
      address: "",
      oversizeBaggage: "",
   });

   const [flightInfo, setFlightInfo] = useState<FlightState>({
      arrival: { date: null, time: "", airport: "", flightNumber: "" },
      departure: { date: null, time: "", airport: "", flightNumber: "" },
   });

   const [dates, setDates] = useState<Record<FlightType, Date | undefined>>({
      arrival: undefined,
      departure: undefined,
   });

   const [culinaryInfo, setCulinaryInfo] = useState<{
      option: CulinaryOption | null;
      peopleCount: number;
      restrictions: string;
   }>({
      option: null,
      peopleCount: 2,
      restrictions: "",
   });

   const [sommelierInfo, setSommelierInfo] = useState({
      selected: false,
      additionalBottles: 0,
      peopleCount: 4,
   });

   const calculateTotals = () => {
      const ridesTotal =
         (airports.find((a) => a.code === flightInfo.arrival.airport)?.fee ||
            0) +
         (airports.find((a) => a.code === flightInfo.departure.airport)?.fee ||
            0);

      const culinaryTotal = culinaryInfo.option
         ? CULINARY_OPTIONS[culinaryInfo.option].price *
           culinaryInfo.peopleCount
         : 0;

      const sommelierTotal = sommelierInfo.selected
         ? 600 + sommelierInfo.additionalBottles * 300
         : 0;

      return {
         rides: ridesTotal,
         culinary: culinaryTotal,
         sommelier: sommelierTotal,
         grand: ridesTotal + culinaryTotal + sommelierTotal,
      };
   };

   return (
      <div className="flex flex-row justify-center">
         <div className="h-full w-[800px] flex flex-col space-y-8 p-6 font-europa-reg">
            {/* Contact Info Section */}
            <section className="space-y-4">
               <h2 className="text-3xl font-europa-medium">Contact Info</h2>
               <div className="grid grid-cols-2 gap-4">
                  <Input
                     placeholder="Name"
                     value={contactInfo.name}
                     onChange={(e) =>
                        setContactInfo((prev) => ({
                           ...prev,
                           name: e.target.value,
                        }))
                     }
                  />
                  <Input
                     placeholder="Phone"
                     value={contactInfo.phone}
                     onChange={(e) =>
                        setContactInfo((prev) => ({
                           ...prev,
                           phone: e.target.value,
                        }))
                     }
                  />
                  <Input
                     placeholder="Email"
                     value={contactInfo.email}
                     onChange={(e) =>
                        setContactInfo((prev) => ({
                           ...prev,
                           email: e.target.value,
                        }))
                     }
                  />
                  <Input
                     placeholder="Address"
                     value={contactInfo.address}
                     onChange={(e) =>
                        setContactInfo((prev) => ({
                           ...prev,
                           address: e.target.value,
                        }))
                     }
                  />
               </div>
               <Textarea
                  placeholder="Oversize Baggage Notes"
                  value={contactInfo.oversizeBaggage}
                  onChange={(e) =>
                     setContactInfo((prev) => ({
                        ...prev,
                        oversizeBaggage: e.target.value,
                     }))
                  }
               />
            </section>

            {/* Flight Info Section */}
            <section className="space-y-4">
               <h2 className="text-3xl font-europa-medium">Flight Info</h2>
               <div className="grid grid-cols-2 gap-8">
                  {["arrival", "departure"].map((type) => (
                     <div key={type} className="space-y-4">
                        <h3 className="text-xl font-europa-medium capitalize">
                           {type}
                        </h3>
                        <Calendar
                           mode="single"
                           selected={dates[type as FlightType]}
                           onSelect={(date) =>
                              setDates((prev) => ({
                                 ...prev,
                                 [type]: date,
                              }))
                           }
                           disabled={{ before: new Date() }}
                        />
                        <Input
                           type="time"
                           value={flightInfo[type as FlightType].time}
                           onChange={(e) =>
                              setFlightInfo((prev) => ({
                                 ...prev,
                                 [type]: {
                                    ...prev[type as FlightType],
                                    time: e.target.value,
                                 },
                              }))
                           }
                        />
                        <select
                           className="w-full p-2 border rounded"
                           value={flightInfo[type as FlightType].airport}
                           onChange={(e) =>
                              setFlightInfo((prev) => ({
                                 ...prev,
                                 [type]: {
                                    ...prev[type as FlightType],
                                    airport: e.target.value,
                                 },
                              }))
                           }
                        >
                           <option value="">Select Airport</option>
                           {airports.map((airport) => (
                              <option key={airport.code} value={airport.code}>
                                 {airport.name} ({airport.code}) - $
                                 {airport.fee}
                              </option>
                           ))}
                        </select>
                        <Input
                           placeholder="Flight Number"
                           value={flightInfo[type as FlightType].flightNumber}
                           onChange={(e) =>
                              setFlightInfo((prev) => ({
                                 ...prev,
                                 [type]: {
                                    ...prev[type as FlightType],
                                    flightNumber: e.target.value,
                                 },
                              }))
                           }
                        />
                     </div>
                  ))}
               </div>
               <div className="text-right text-xl">
                  Rides Total: ${calculateTotals().rides}
               </div>
            </section>

            {/* Culinary Section */}
            <section className="space-y-4">
               <h2 className="text-3xl font-europa-medium">
                  Culinary on Arrival
               </h2>
               <div className="space-y-2">
                  {Object.entries(CULINARY_OPTIONS).map(
                     ([key, { label, price, icon }]) => (
                        <div
                           key={key}
                           onClick={() =>
                              setCulinaryInfo((prev) => ({
                                 ...prev,
                                 option: key as CulinaryOption,
                              }))
                           }
                           className={`p-4 cursor-pointer flex items-center space-x-4 shadow-md ${
                              culinaryInfo.option === key
                                 ? key === "INTERMEDIATE"
                                    ? "bg-blue-900 text-white"
                                    : "bg-black text-white"
                                 : "bg-gray-100"
                           }`}
                        >
                           <span className="text-2xl">{icon}</span>
                           <span className="text-xl">{label}</span>
                           {price > 0 && (
                              <span className="ml-auto">${price}/person</span>
                           )}
                        </div>
                     )
                  )}
               </div>

               {culinaryInfo.option && culinaryInfo.option !== "NONE" && (
                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <button
                           className="px-4 py-2 bg-gray-200"
                           onClick={() =>
                              setCulinaryInfo((prev) => ({
                                 ...prev,
                                 peopleCount: Math.max(2, prev.peopleCount - 2),
                              }))
                           }
                        >
                           -
                        </button>
                        <span>People: {culinaryInfo.peopleCount}</span>
                        <button
                           className="px-4 py-2 bg-gray-200"
                           onClick={() =>
                              setCulinaryInfo((prev) => ({
                                 ...prev,
                                 peopleCount: prev.peopleCount + 2,
                              }))
                           }
                        >
                           +
                        </button>
                     </div>
                     <Textarea
                        placeholder="Dietary Restrictions"
                        value={culinaryInfo.restrictions}
                        onChange={(e) =>
                           setCulinaryInfo((prev) => ({
                              ...prev,
                              restrictions: e.target.value,
                           }))
                        }
                     />
                     <div className="text-right text-xl">
                        Culinary Total: ${calculateTotals().culinary}
                     </div>
                  </div>
               )}
            </section>

            {/* Sommelier Section */}
            <section className="space-y-4">
               <h2 className="text-3xl font-europa-medium">
                  Sommelier Experience
               </h2>
               <div className="space-y-4">
                  <div className="flex space-x-4">
                     <button
                        className={`px-4 py-2 ${
                           sommelierInfo.selected
                              ? "bg-black text-white"
                              : "bg-gray-200"
                        }`}
                        onClick={() =>
                           setSommelierInfo((prev) => ({
                              ...prev,
                              selected: true,
                           }))
                        }
                     >
                        4 Bottle Experience with Charcuterie
                     </button>
                     <button
                        className={`px-4 py-2 ${
                           !sommelierInfo.selected
                              ? "bg-black text-white"
                              : "bg-gray-200"
                        }`}
                        onClick={() =>
                           setSommelierInfo((prev) => ({
                              ...prev,
                              selected: false,
                           }))
                        }
                     >
                        No Sommelier
                     </button>
                  </div>

                  {sommelierInfo.selected && (
                     <div className="space-y-4">
                        <div className="flex items-center justify-between">
                           <button
                              className="px-4 py-2 bg-gray-200"
                              onClick={() =>
                                 setSommelierInfo((prev) => ({
                                    ...prev,
                                    peopleCount: Math.max(
                                       4,
                                       prev.peopleCount - 1
                                    ),
                                 }))
                              }
                           >
                              -
                           </button>
                           <span>People: {sommelierInfo.peopleCount}</span>
                           <button
                              className="px-4 py-2 bg-gray-200"
                              onClick={() =>
                                 setSommelierInfo((prev) => ({
                                    ...prev,
                                    peopleCount: prev.peopleCount + 1,
                                 }))
                              }
                           >
                              +
                           </button>
                        </div>
                        <div className="flex items-center justify-between">
                           <button
                              className="px-4 py-2 bg-gray-200"
                              onClick={() =>
                                 setSommelierInfo((prev) => ({
                                    ...prev,
                                    additionalBottles: Math.max(
                                       0,
                                       prev.additionalBottles - 1
                                    ),
                                 }))
                              }
                           >
                              -
                           </button>
                           <span>
                              Additional 4 Bottles:{" "}
                              {sommelierInfo.additionalBottles}
                           </span>
                           <button
                              className="px-4 py-2 bg-gray-200"
                              onClick={() =>
                                 setSommelierInfo((prev) => ({
                                    ...prev,
                                    additionalBottles:
                                       prev.additionalBottles + 1,
                                 }))
                              }
                           >
                              +
                           </button>
                        </div>
                        <div className="text-right text-xl">
                           Sommelier Total: ${calculateTotals().sommelier}
                        </div>
                     </div>
                  )}
               </div>
            </section>

            {/* Grand Total */}
            <div className="text-right text-2xl font-europa-medium">
               Grand Total: ${calculateTotals().grand}
            </div>

            <button
               className="w-full py-4 bg-black text-white text-xl font-europa-medium"
               onClick={() => {
                  // Email functionality to be implemented
                  console.log("Booking data:", {
                     contactInfo,
                     flightInfo,
                     culinaryInfo,
                     sommelierInfo,
                     totals: calculateTotals(),
                  });
               }}
            >
               Confirm Booking
            </button>
         </div>
      </div>
   );
};

export default Contact;
