import fecther from "./fetcher";

export const auth = (mode: 'signin' | 'singup', body: {email:string, password:string}) =>{
    return fecther(`/${mode}`,body)
}