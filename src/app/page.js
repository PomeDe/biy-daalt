'use client'
import { useRouter } from 'next/navigation'

const data=[{
    id:1,
    name:"Clik Counter",
    image:"/click.png",
        file:"lab1"
},
{
    id:2,
    name:"Color Change",
    image:"/color.png",
        file:"lab3"
},{
    id:3,
    name:"Name Change",
    image:"namechange.png",
        file:"lab2"
},
{
    id:4,
    name:"Json data",
    image:"lab4.png",
    file:"lab4"
}
]
export default function Home() {
    const router = useRouter()
    return(

        <div className="flex items-center  h-screen w-screen bg-slate-500 flex-col space-x-5 space-y-64 bg-no-repeat bg-center bg-cover bg-[url(https://wallpapers.com/images/hd/hacker-background-uxvhaqwmbsp6qoth.jpg)]">
            <h1 className="text-white font-bold text-5xl font-sans mt-5 bg-black">11V B.Anar</h1>
            <div className="flex flex-row  grid-cols-4 gap-24 " 
            >
            {data.map((element)=>(
                          <div
                          key={element.id}
                          className="w-84 h-72 flex flex-col p-5 rounded-lg text-black shadow-xl border-black bg-slate-200 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-400"
                          onClick={()=>router.push(element.file)}
                        >
                          <div
                          className="w-full h-10/12">
              <img
                            src={element.image}
                            className=" w-full h-full" 
                          />
                          </div>
              
                          <div className="text-black ml-2">
                            <p className="text-black">Firstname: {element.name}</p>
                          </div>
                        </div>
            ))}
            </div>
        </div>
    );
}