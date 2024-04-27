import { connectionStr } from "@/app/lib/db";
import { deliveryPartnersSchema } from "@/app/lib/deliverypartnersMode";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    let success = false;
    await mongoose.connect(connectionStr, { useNewUrlParser:true });
    const result = await deliveryPartnersSchema.findOne({ mobile: payload.mobile, password: payload.password });
    if (result) {
        success = true;
    }
    return NextResponse.json({ result, success })
}