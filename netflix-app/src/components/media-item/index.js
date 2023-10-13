'use client'
import {motion} from 'framer-motion'
import Image from 'next/image'
import { useContext } from 'react';
import {GlobalContext} from '@/context'; 
import {
    PlusIcon,
    ChevronDownIcon,
    CheckIcon,
  } from "@heroicons/react/24/outline";
import { useRouter } from 'next/navigation';
const baseUrl = "https://image.tmdb.org/t/p/w500";

export default function MediaItem({media, title}){
  const {currentMediaInfoIdAndType,setCurrentMediaInfoIdAndType,showDetailsPopup, setShowDetailsPopup} = useContext(GlobalContext)

  const router = useRouter()
    return <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    }}
    >
        <div className='relative cardWrapper h-28 min-w-[180px] cursor-pointer md:h-36  md:min-w-[260px] transform transition duration-500 hover:scale-110 md:z-[999]'>
            <Image
            src={`${baseUrl}${media.backdrop_path || media.poster_path}`}
            alt='Media'
            layout='fill'
            className='rounded sm object-cover hover:rounded-sm md:rounded '
            onClick={()=>router.push(`/watch/${media?.type}/${media?.id}`)}
            />
             <div className='space-x-3 hidden absolute p-2 bottom-0 buttonWrapper '>
            <button  className={`${
              media?.addedToFavorites && !listView && "cursor-not-allowed"
            } cursor-pointer border flex p-2 items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90 border-white   bg-black opacity-75 text-black`}
          >
                {media.addedToFavorites?
                <CheckIcon color='#fff' className='h-7 w-7'/>
                :<PlusIcon color='#fff' className='h-7 w-7'/>
                }
            </button>
            <button  
            onClick={()=>{
              setShowDetailsPopup(true)
            setCurrentMediaInfoIdAndType({
              type:media?.type,
              id:media?.id
            })}}
            className="cursor-pointer p-2 border flex items-center gap-x-2 rounded-full  text-sm font-semibold transition hover:opacity-90  border-white  bg-black opacity-75 "
          >
                <ChevronDownIcon color='#fff' className='h-7 w-7'/>
            </button>
        </div>
        </div>
       
        </motion.div>
}