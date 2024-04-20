import { connectionStr } from "@/app/lib/db";
import { orderSchema } from "@/app/lib/ordersMode";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function POST(request) {
    const payload = await request.json();
    await mongoose.connect(connectionStr,{useNewUrlParser:true});
    let success=false;
    const orderObj= new orderSchema(payload);
    const result = await orderObj.save();
    if(result){
        success=true
    }
    return NextResponse.json({result,success})
}