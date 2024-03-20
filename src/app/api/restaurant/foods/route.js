import { connectionStr } from "@/app/lib/db";
import { foodSchema } from "@/app/lib/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    let success=false;
    await mongoose.connect(connectionStr, { useNewUrlParser: true });
    const food = new foodSchema(payload);
    const result = await food.save();
    if(result){
        success=true
    }
    return NextResponse.json({ result, success })
}