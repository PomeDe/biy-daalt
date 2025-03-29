'use client'
import React, { useState } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
      const router = useRouter()
      const [count, SetCount] = useState(0);
    return(

        <div className="flex items-center justify-center h-screen w-screen bg-slate-500 flex-col space-x-5 text-center">
            <div className="w-1/2 h-10/12 flex flex-col justify-center items-center">            <button className="h-10 w-40 bg-amber-500 rounded-2xl hover:cursor-pointer" onClick={() => SetCount(count+1)}>Click</button>
            <p className="mr-5">Click count: {count}</p></div>
            <div className=" w-1/12 h-12 mr-32 bg-blue-500 flex items-center justify-center rounded-2xl hover:cursor-pointer font-semibold text-2xl self-start " onClick={() => router.back()}><p className="text-center ">Back</p></div>
        </div>
    );
}