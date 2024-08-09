"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "./ui/alert-dialog"
  import {useState,useEffect, useRef} from "react"

import { useToast } from "./ui/use-toast"








  const Login = ({children  }) => {

  const [first, setfirst] = useState(false)
  return (
    <div className="">
    <AlertDialog >
  {children }
  
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>

        <div>
            <center>Account Login</center>
<p className="cursor-pointer capitalize" onClick={()=>setfirst((e)=>!e)}>{first ? <small>New to the Site? <p className='text-xl text-red-500'>register</p> </small>  : <small > Already have an account? <p className='text-xl text-red-500'>Login</p> </small>} </p>
        </div>

      </AlertDialogTitle>
      <AlertDialogDescription>
    {first ? 
   < Loginuser/>:<Logregister/>
  }
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Close</AlertDialogCancel>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
</div>

  )
}



export default Login



export const Loginuser = () => {
  const { toast } = useToast()

  const [input, setinput] = useState({
    "username":'',
    "password":'',
  })
const setdetail =(e)=>{
const {value, name} = e.target
setinput((e)=>
  {

    return {...e,[name]:value}
  }
)


}



const submitted = (ex)=>{
  ex.preventDefault()
  let isNotEmpty = Object.values(input).every(value => value.trim() !== '');
  if (isNotEmpty){

 const inser = new FormData()

   inser.append("username",input.username)
   inser.append("password",input.password)
  
  fetch('/api/log/',{
    method:"PATCH",
    
    body: JSON.stringify(input)

  })
.then((re)=>re.json())
  .then((data)=>{
    
    if (data.data){

toast({
  title: 'success',
  description: 'Logined successfully',
  
})
// function setItemWithExpiration(key, value, expirationMinutes) {
//   const now = new Date();
//   const item = {
//     value: value,
//     expiration: new Date(now.getTime() + expirationMinutes * 60000).getTime(), // Calculate expiration timestamp
//   };
//   sessionStorage.setItem(key, JSON.stringify(item));
// }
// setItemWithExpiration('userData', data.data, 30000)
sessionStorage.setItem('userData', JSON.stringify(data.data));
location.reload()
      localStorage.setItem('user', data.data.uuid)
    }
     if (data.miss){
      toast({
        title: 'error',
        description: "The detail doesn't exist try again",
        
      })
    }
  })
  .catch((e)=>{
    toast({
      title: 'error',
      description:e,
      
    })

  })
}
else{
  toast({
    title: 'error',
    description: "input can't be empty",
    
  })
}
}


 
  
    return (
      <div class="max-w-md w-full p-6 bg-white rounded-lg ">
      <form method="post" onSubmit={submitted}>
          <div class="mb-4">
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" id="username" name="username" onChange={setdetail} class="mt-1 block w-full px-3 py-2 border-gray-300 
              rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <div class="mb-6">
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="password" name="password" onChange={setdetail} class="mt-1 block w-full px-3 py-2 border-gray-300 
              rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
          <button type="submit" 
              class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
              Log In
          </button>
      </form>
  </div>
    
    
      )
}


export const Logregister = () => {
  const { toast } = useToast()

  const [inputx, setinputx] = useState({
    "username":'',
    "email":'',
    "password":'',
    "uuid":crypto.randomUUID(),
  })
const registeruser = (e)=>{
  const {name, value} = e.target
  
  console.log(inputx);
  setinputx((e)=>{
    return {...e,[name]:value}
  })
  
}




const submitted = (ex)=>{
  ex.preventDefault()
  let isNotEmpty = Object.values(inputx).every(value => value.trim() !== '');
  if (isNotEmpty){

 
  
  fetch('/api/log/',{
    method:"POST",
    
    body: JSON.stringify(inputx)

  })
.then((re)=>re.json())
  .then((data)=>{
    console.log(data);
    if (data.data){
location.reload()
toast({
  title: 'success',
  description: 'Logined successfully',
  
})
      localStorage.setItem('user', data.data.uuid)
sessionStorage.setItem('userData', JSON.stringify(data.data));

    }
     if (data.miss){
      toast({
        title: 'error',
        description: data.miss,
        
      })
    }
  })
  .catch((e)=>{
    toast({
      title: 'error',
      description:'server error',
      
    })

  })
}
else{
  toast({
    title: 'error',
    description: "input can't be empty",
    
  })
}
}
    return (
       
      <div class="max-w-md w-full p-6 bg-white rounded-lg ">
        <form  method="post" onSubmit={submitted} >
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" id="username" onChange={registeruser} name="username" class="mt-1 block w-full px-3 py-2 border-gray-300 
                rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" onChange={registeruser} name="email" class="mt-1 block w-full px-3 py-2 border-gray-300 
                rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" id="password" onChange={registeruser}  name="password" class="mt-1 block w-full px-3 py-2 border-gray-300 
                rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
            </div>
            <button type="submit"
                class="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                register
            </button>
        </form>
    </div>
    
      )
}
