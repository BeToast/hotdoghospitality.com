import "../style.css";

const BgSky: React.FC<{}> = () => {
   return (
      <div className="bg-container z-10 pointer-events-none">
         <div className="bg-wrapper">
            <div className="bg-top-pattern sky" />
         </div>
      </div>
   );
};

export default BgSky;
