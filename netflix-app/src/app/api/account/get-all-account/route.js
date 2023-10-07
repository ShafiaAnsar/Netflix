import connectDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET(req){
    try {
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            success:false,
            message:"Something went wrong"
        })
    }

}