import { NextResponse } from "next/server";
import { prisma } from "@repo/db/client";


export const GET = async () => {

    try{

        const user =  await prisma.user.findFirst({
            where:{
                name: "someone"
            }
        });
    
    
        if(!user){
        
        await prisma.user.create({
            data:{
                email: "someone@something.com",
                name: "someone"
    
            }
        })
    
        return NextResponse.json({
            message: `db check complete."someone" created.`
        })
    
    
        };
    
        return NextResponse.json({
            message: `db check complete."someone" already exits."`
        })

    }
    catch(e){
        console.log(e);
        return NextResponse.json({
            message: `Something went wrong`
        })
    }


    
}