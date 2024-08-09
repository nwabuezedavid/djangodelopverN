import { NextResponse } from "next/server"
import {db} from "@/lib/prisma"
// allget
export async function GET(request) {
 let all = await db.user.findMany({
  select:{
     username:true,
     email:true,
     password:true,
     uuid:true,
  }
 })
 
try {
  
  return NextResponse.json({ data: all}, { status: 200 })

} catch (error) {
  
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })

}
finally {
  await prisma.$disconnect(); // Disconnect Prisma Client when done
}



}
export async function POST(request) {
  const data = await request.json()
  const {username, email} = data
  console.log(data)
  try {
    const  check = await db.user.findFirst({
      where: {
        OR: [
            { username: username },
            { email: email }
        ]
    }
      
    })
    console.log(check);
    if ( check === null ){

      const usercreated = await db.user.create({
        data:data
      })
      
      
      return NextResponse.json({ data: usercreated}, { status: 200 })
    }else{

      return NextResponse.json({ miss: 'username and email  already exist' }, { status: 404 })
    }

} catch (error) {
  console.log(error);
  return NextResponse.json({ error: `'error'${error}` }, { status: 500 })
}
}
export async function PUT(request) {
  const data = await request.json()
  const {searchParams} = new URL(request.url)
  const uuids =  searchParams.get('uuid')
  
  
  try {
    
    if (uuids){

      const usercreated = await db.user.update({
        where:{
          uuid:uuids
        },
        data:data
      })
      
      return NextResponse.json({ data: usercreated}, { status: 200 })
    }else{

      return NextResponse.json({ miss: `'username , email and password '` }, { status: 404 })
    }

} catch (error) {
  
  return NextResponse.json({ error: `'error'${error}` }, { status: 500 })
}
}
export async function DELETE(request) {
  const {searchParams} = new URL(request.url)
  const uuids =  searchParams.get('uuid')
  
  
  try {
    
    if (uuids){

      const usercreated = await db.user.delete({
        where:{
          uuid:uuids
        },
        
      })
      
      return NextResponse.json({ data: usercreated}, { status: 200 })
    }else{

      return NextResponse.json({ miss: `'username , email and password '` }, { status: 404 })
    }

} catch (error) {
  
  return NextResponse.json({ error: `'error'${error}` }, { status: 500 })
}
}
// singleget
export async function PATCH(request){
  const data = await request.json()
  const {searchParams} = new URL(request.url)
  const uuiduse =  searchParams.get('uuid')
console.log(data);
  try {
    
 
  const actualuser = await db.user.findFirst({
    where:{
      OR:[
        
        {username:data.username,password:data.password},
        
      ]
      
    }
  })
  if(actualuser){
    return NextResponse.json({data:actualuser}, {status:200})
  }else{
    return NextResponse.json({miss:'user was not found '}, {status:404})
    
  }
} catch (error) {
  
  return NextResponse.json({error:error}, {status:500})
}
}



// export async function GET(request) {}
 
// export async function HEAD(request) {}
 
// export async function POST(request) {}
 
// export async function PUT(request) {}
 
// export async function DELETE(request) {}
 
// export async function PATCH(request) {}
 
// // If `OPTIONS` is not defined, Next.js will automatically implement `OPTIONS` and  set the appropriate Response `Allow` header depending on the other methods defined in the route handler.
// export async function OPTIONS(request) {}