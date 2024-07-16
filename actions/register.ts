"use server"
import {cookies} from 'next/headers'
import {userDataTypes} from '@/types/types'
export default async function registerAction(formData:userDataTypes){
  try{
    let res=await fetch("http://localhost:8000/register",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    })
    let data=await res.json();
    cookies().set('token',data.token)
    return data.error
  }
  catch(e:any){
    console.error({message:e.message})
  }
}
