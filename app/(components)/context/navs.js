"use client"
import { createContext, useState ,useEffect} from "react";


export const contextxall =  createContext()

const ViewProvider = ({children}) => {
    const [togvidvie, settogvidvie] = useState(false);
    const [islogin, setlog] = useState(false);
   const Logout =()=>{
    sessionStorage.removeItem('userData')
    location.reload()
    
    }
useEffect(() => {
  if (sessionStorage.getItem('userData')){
    setlog(true)
  }

  
}, [islogin])


  return (
<contextxall.Provider value={{
    togvidvie,
    settogvidvie,
    islogin,
setlog,Logout
   
}}>

    <div>{children}</div>
</contextxall.Provider>
  )
}
export default ViewProvider