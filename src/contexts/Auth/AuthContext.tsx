import {createContext} from "react";
import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null;
    signIn: (Email:string, Senha: string) => Promise<boolean>;
    signOut: () => void;
}



export const AuthContext = createContext<AuthContextType>(null!);