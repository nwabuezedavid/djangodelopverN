"use client"

import { createContext, useContext, useState } from "react";



export const toglexx = createContext(null);



 const Contextnav = ({children}) => {
    const [tog, settog] = useState(false);
    
  return (
    <div className="">

        <toglexx.Provider value={{tog, settog}} >
                {children}
        </toglexx.Provider>
    </div>

  )
}

export default Contextnav



export const useNavto2 = () => {

    const  context =  useContext(toglexx)

 if (context){
    return context
 } 
}
