import connectDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req){
    try {
        await connectDB()
        const {uid,name,pin} =await req.json()
        const isAccountAlreadyExist = await Account.find({uid,name})
        if(isAccountAlreadyExist){
            return NextResponse.json({
                success:false,
                message:"Please try with a different name"
            }) 
        }

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        })
    }

}