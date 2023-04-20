import { createContext, useEffect, useState } from "react";


export let loginContext = createContext();



export function LoginContextProvider({ children }) {


  
  const [userData, setUserData] = useState(null);
  
  function saveUserData() {
    setUserData(localStorage.getItem(`userToken`));
  }

  function logOut() {
    localStorage.removeItem(`userToken`);
    setUserData(null);
  }


  useEffect(() => {
    saveUserData();
  }, [])










  return <loginContext.Provider value={{ userData, logOut, saveUserData }}>
    {children}
  </loginContext.Provider>


}