
import {client} from "@repo/db/clients";


export default async function  Home() {
  const user = await client.user.findFirst();
   
  return (
    <div>
       <h1>Username is {user?.username}</h1>
       <h1>Password id {user?.password}</h1>
    </div>
  );
}
