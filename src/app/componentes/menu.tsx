import { cookies } from "next/headers"; 
import Link from "next/link";  

type Conta = { 
  autorizado: boolean; 
  usuario: string; 
}; 

export default async function Menu() { 
  let conta: Conta = { 
    autorizado: false, 
    usuario: "", 
  }; 

  const token = (await cookies()).get("token")?.value; 

  if (token) { 
    try { 
      const response = await fetch(`https://api.origamid.online/conta/perfil`, { 
        headers: { 
          Authorization: "Bearer " + token, 
        }, 
        cache: "no-store", // Evitar cache ao buscar dados dinâmicos
      }); 

      if (response.ok) { 
        const data = await response.json(); 
        if (data && typeof data === "object" && "autorizado" in data && "usuario" in data) { 
          conta = data as Conta; 
        } 
      } 
    } catch (error) { 
      console.error("Erro ao buscar dados do perfil:", error); 
    } 
  } 

  return ( 
    <ul className="menu"> 
      <li> 
        <Link href="/">Home</Link> 
      </li> 
      <li> 
        {conta.autorizado ? conta.usuario : <Link href="/login">Login</Link>} 
      </li> 
    </ul> 
  ); 
}
