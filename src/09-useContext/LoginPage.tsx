import { useContext } from "react"
import { UserContext } from "./context/UserContext";

const LoginPage = () => {

  const {user, setUser} = useContext(UserContext);

  return (
    <div>
        <h1>Login Page</h1>

        <pre aria-label="pre">
          {JSON.stringify(user)}
        </pre>

        <button className="btn btn-primary" onClick={() => setUser({id: 123, name: 'Sebas', email: 'sebas@google.com'})}>
          Establecer Usuario
        </button>
    </div>
  )
}

export default LoginPage
