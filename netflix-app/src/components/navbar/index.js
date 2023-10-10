'use client'

import { useSession } from "next-auth/react"
import { usePathname,useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar(){
    const {data:session} = useSession()
    const [isScrolled,setIsScrolled] = useState(false)
    const router = useRouter ()
    const pathName = usePathname()
    const menuItems = [
        {
            id:'home',
            title:"Home",
            path:'/browse'
        },
        {
            id:'tv',
            title:"TV",
            path:'/tv'
        },
        {
            id:'movies',
            title:"Movies",
            path:'/movies'
        },
        {
            id:'my-list',
            title:"My List",
            path:'/mylist'
        },
    ]
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 0 ) setIsScrolled(true)
            else setIsScrolled(false)
        }
        window.addEventListener('scroll',handleScroll)
        return ()=>{
            window.removeEventListener('scroll' ,handleScroll)
        }
    })
    return <div className="relative">
        <header className={`header ${isScrolled && 'bg-[#141414]'} hover:bg-[#141414]`}>

        </header>
    </div>
}