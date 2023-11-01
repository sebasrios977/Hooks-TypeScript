import { createContext } from 'react'; 

export interface Response {
    user?: User,
    setUser?: any,
}

export interface User {
    id: number,
    name: string,
    email: string,
}

const initialValue: Response = {}

export const UserContext = createContext(initialValue);