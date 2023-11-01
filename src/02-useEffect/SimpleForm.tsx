import { useForm } from '../hooks/useForm';

export interface FormState {
  username?: string,
  email?: string,
  password?: string,
}

const initialValue: FormState = {
  username: '',
  email: '',
  password: '',
}

const SimpleForm = () => {
  const {username, email, password, onInputChange, onResetForm} = useForm(initialValue);


  return (
    <div>
      <h1>Formulario Simple</h1>
      <hr />

      <input 
        type="text" 
        className='form-control' 
        placeholder='Username' 
        name='username'
        value={username}
        onChange={onInputChange}
      />
      
      <input 
        type="email" 
        className='form-control mt-2' 
        placeholder='Email' 
        name='email'
        value={email}
        onChange={onInputChange}
      />
      
      <input 
        type="password" 
        className='form-control mt-2' 
        placeholder='Password' 
        name='password'
        value={password}
        onChange={onInputChange}
      />

      <button 
        onClick={onResetForm} 
        className="btn btn-primary mt-2"
      >
        Borrar
      </button>

    </div>
  )
}

export default SimpleForm
