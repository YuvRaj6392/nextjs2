import client from "@/db"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
 

 try{

  const userBody=await req.json();

  await client.user.create({
    data:userBody
  })

  return NextResponse.json({
   msg:"Account created"
  },{
   status:201
  })

 }catch(err){
  return NextResponse.json({
   msg:"Error getting the details"
  })
 }

}


export async function GET(){

 try{

  const user=await client.user.findUnique({where:{
   id:1
  }});

 return NextResponse.json({
   user
 })

 }catch(err){
  return NextResponse.json({
   msg:"Error getting the details"
  })
 }
 
}
