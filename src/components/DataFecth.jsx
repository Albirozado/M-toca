import { useSession } from "next-auth/react"; 

export default async function DataFecth(){
    const {data : session} = useSession() 

    const res = await fetch("http://localhost:3000/api/register/65d27207a766d4d9b886b086")
    const data = await res.json()
    console.log(data)


    return(
        <div>
           <p>hk,gfsbldxvkmbn</p>
        </div>
    )
}