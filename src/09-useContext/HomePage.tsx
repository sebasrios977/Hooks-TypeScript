import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const HomePage = () => {
  const {user} = useContext(UserContext);
  
  return (
    <div>
        <h1>Home Page {user?.name}</h1>

        <pre aria-label="pre">
          {JSON.stringify(user, null, 3)}
        </pre>
    </div>
  )
}

export default HomePage
