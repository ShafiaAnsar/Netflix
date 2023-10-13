'use client'
const baseUrl = "https://image.tmdb.org/t/p/original";

export default function Banner({medias}){

    const createRandomMedia = medias && medias.length ? 
    medias[Math.floor(Math.random()* medias.length)]
    :null
    console.log(createRandomMedia)
    return <div className="flex flex-col py-16 space-y-2 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pl-[24] lg-pb-[12]">
        <div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
            <Image
            src={`${baseUrl}/${createRandomMedia?.backdrop_path || createRandomMedia?.poster_path}`}
            alt='Banner'
            layout='fill'
            objectFit ='cover'
            />
            <div  className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20 "
            />
        </div>

    </div>

}