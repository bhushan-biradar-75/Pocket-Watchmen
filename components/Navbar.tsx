import { checkUser } from "@/lib/checkUser"



export default function Navbar(){
    const user = checkUser();
    return <h1>Bappa Morya re</h1>
} 
