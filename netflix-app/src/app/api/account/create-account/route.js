import connectDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function POST(req){
    try {
        await connectDB()
        const {uid,name,pin} =await req.json()
        const isAccountAlreadyExist = await Account.find({uid,name})
        const {searchParams} = new URL(req.url)
        const {id} = searchParams.get('id')
        const getAllAccounts = await Account.find({uid:id})
        if(getAllAccounts){
            return NextResponse.json({
                success:true,
                data:getAllAccounts
            })
        }else{
            return NextResponse.json({
                success:false,
                message:'Something went wrong'
            })
        }
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