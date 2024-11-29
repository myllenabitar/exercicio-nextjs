
import { cookies } from "next/headers";

export default function Login(){

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        const username = event.currentTarget.username.value;
        const password = event.currentTarget.password.value;
        const response = await fetch(`/api/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username, password})
        });
        (await cookies()).set()
       if(response.ok) window.location.href = "/"; 
    }
   
    return <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário</label>
        <input type="text" id="username" name="username"></input>
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" name="password"></input>
        <button>Login</button>
    </form>
}