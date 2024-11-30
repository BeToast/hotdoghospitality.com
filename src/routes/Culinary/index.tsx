import "./style.css";
import StandardLayout from "../../compos/StandardLayout";
import SkiSigns from "../../compos/SkiSign";

const Culinary: React.FC<{}> = ({}) => {
   const videoUrl = "https://youtu.be/EXVR-_lA8WA";
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

{
   /* <p>
               Intermediate - "I am just having a little fun" Meats/Cheeses,
               Grapes, Dried Fruits, Jams/Crackers Hummus w/ Cucumber, Blanched
               Carrots, Celery, Bell Peppers, Olives Dip (not soy) Bagels- 24
               hour Fermentation, Smoked Salmons & Herb Spreads
            </p>
            <p>
               Expert "Start the right side or both sides but not down the
               middle" Cheeses - Same as above Hummus - Same as above Bagels -
               Same as above Jumbo Chilled Poached Shrimp, Cocktail Sauce, Lemon
               Wedges, Lemon Chive Aioli Parmesan Chicken Salad, Green Bean
               Quinoa, Buttermilk Mayonnaise, Both Rolls Butter or Lettuce Cups,
               Both if requested
            </p>
            <p>
               Double Diamond "What the heck's a cheese board!" Cheeses - Same
               Hummus - Same Bagels - Same Shrimp - Same Chicken Salad - Same
               Chilled Salmon, Medallions, Dijon Shallot Aioli Chilled Sliced
               Filet Mignon, Horseradish Cream, Chimi-chili, Roll Points or
               Butter Lettuce Cups
            </p> */
}
