import { useState } from "react";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <h1>Dawg Hot</h1>
         <div className="card bg-green-800 absolute">
            <button onClick={() => setCount((count) => count + 1)}>
               count is {count}
            </button>
            <p className="text-red-600">
               Edit <code>src/App.tsx</code> and save to test HMR
            </p>
         </div>
         <p className="read-the-docs">
            Click on the Vite and React logos to learn more
         </p>
      </>
   );
}

export default App;
