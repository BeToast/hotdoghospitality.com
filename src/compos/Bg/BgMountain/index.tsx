import "../style.css";

const BgMountain: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className="bg-container z-30">
         <div className="bg-wrapper z-30">
            <div className="bg-top-pattern mountain" />
            <div className="bg-main-pattern" />
         </div>
         <div className="bg-content z-40">{children}</div>
      </div>
   );
};

export default BgMountain;
