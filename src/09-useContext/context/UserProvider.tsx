import { UserContext } from "./UserContext"
import { useState } from 'react';

const UserProvider = ({children}: any) => {

  const [user, setUser] = useState();
  
  return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider
