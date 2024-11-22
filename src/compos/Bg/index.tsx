import "./style.css";

const Bg: React.FC<{
   children: React.ReactNode;
}> = ({ children }) => {
   return (
      <div className="bg-container">
         <div className="bg-wrapper">
            <div className="bg-top-pattern" />
            <div className="bg-main-pattern" />
         </div>
         <div className="bg-content">{children}</div>
      </div>
   );
};

export default Bg;
