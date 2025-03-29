'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
      const [name, setName] = useState("");
          const router = useRouter()
    return(

        <div className="flex items-center justify-center h-screen w-screen bg-slate-500 flex-col space-x-5">
            <div className="flex flex-row items-center justify-center w-1/2 h-10/12">
            <label>Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}  className="h-10 bg-black"/>
            {name == "" ? (
                <>            <p>Hi 11v, Suragch!</p></>
            ):(
                <>            <p>Hi 11v, {name}!</p></>
            )}
            </div>
             <div className=" w-1/12 h-12 mr-32 bg-blue-500 flex items-center justify-center rounded-2xl hover:cursor-pointer font-semibold text-2xl mt-10 self-start" onClick={() => router.back()}><p className="text-center ">Back</p></div>
        </div>
    );
}