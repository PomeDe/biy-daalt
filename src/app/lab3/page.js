'use client'
 import React, { useState } from "react";
 import { useRouter } from 'next/navigation'
 
 export default function Home() {
  const router = useRouter()
   const [color, setColor] = useState("black");
   return (
     <div className={`flex flex-col items-center
      h-screen w-screen bg-${color}-800`}>
      <div className="w-1/2 h-10/12 flex flex-row justify-center items-center">
      {color == "red" ? (
         <><button
           className="border bg-red-800 h-1/6"
           onClick={() => setColor("red")}
         >
           Red
         </button>
         <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
         Refresh
         </button></>
       ) : color == "green" ? (
         <><button
           className="border bg-green-800 h-1/6"
           onClick={() => setColor("green")}
         >
           Green
         </button>
         <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
         Refresh
         </button></>
       ):color == "blue" ? (
         <><button
           className="border bg-blue-800 h-1/6"
           onClick={() => setColor("blue")}
         >
           Blue
         </button>
         <button className="border bg-slate-500 h-1/6" onClick={() => setColor("black")}>
         Refresh
         </button></>
       ):(
         <><button
             className="border bg-red-800 h-1/6"
             onClick={() => setColor("red")}
           >
             Red
           </button><button
             className="border bg-green-800 h-1/6"
             onClick={() => setColor("green")}
           >
              Green
             </button><button
               className="border bg-blue-800 h-1/6"
               onClick={() => setColor("blue")}
             >
               Blue
             </button></>
       )}
      </div>
       
       <div className=" w-1/12 h-12 mr-32 bg-blue-500 flex items-center justify-center rounded-2xl hover:cursor-pointer font-semibold text-2xl mt-10 self-start" onClick={() => router.back()}><p className="text-center ">Back</p></div>
     </div>
   );
 }