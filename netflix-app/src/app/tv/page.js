'use client'
import UnauthPage from '../../components/unauth-page/index'
import { useSession } from "next-auth/react"

export default function TV (){
    const {data:session} = useSession()
    console.log(session)
    if (session == null) return <UnauthPage/>
    return (
        <div>TV</div>
    )
}