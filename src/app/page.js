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

        <div className="flex items-center  h-screen w-screen  flex-col space-x-5 space-y-64 bg-no-repeat bg-gradient-to-br from-slate-300 via-gray-500 to-slate-800">
            <div className='flex flex-row w-full h-1/6 items-center justify-evenly' >
            <img src='https://th.bing.com/th/id/R.60549d44ebf9e6fcac9b1b1ec86bc8ad?rik=nFDJeCSIoHfsWA&pid=ImgRaw&r=0&sres=1&sresct=1' className='w-32 h-32 mt-6 rounded-4xl'/>
            <h1 className="text-white font-bold text-5xl font-sans mt-5 ">11V B.Anar</h1>
            <div className='w-16'></div>
            
            </div>
            
            <div className="flex flex-row  grid-cols-4 gap-24 " 
            >
            {data.map((element)=>(
                          <div
                          key={element.id}
                          className="w-84 h-72 flex flex-col p-5 rounded-lg text-black shadow-xl border-black bg-slate-200 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-neutral-500"
                          onClick={()=>router.push(element.file)}
                        >
                          <div
                          className="w-full h-10/12">
              <img
                            src={element.image}
                            className=" w-full h-full" 
                          />
                          </div>
              
                          <div className="text-black ml-2 flex flex-row space-x-3">
                            <p className="text-black">Project name: </p>
                            <p className='text-blue-500 font-bold'>{element.name}</p>
                          </div>
                        </div>
            ))}
            </div>
        </div>
    );
}
