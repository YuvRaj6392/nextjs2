"use server"

import client from "@/db"
import { NextResponse } from "next/server";
import { json } from "stream/consumers";

export async function signup(username:string,password:string){
 

 try{

  await client.user.create({
    data:{
     username:username,
     password:password
    }
  })

  return true

 }catch(err){
 return false
 }

}