import {React, useState} from "react";




function LoginPage() {
    const [email, setEmail] = useState("");
    const [ password, setPassword] = useState("");

    const onChangeEmail = (event) => {
       
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
       

        setPassword(event.target.value)
    }

    const onSubmitLogin = () => {
        

        console.log(email, password)
    }

    return (
        <div>
            
            <p>LoginPage</p>
            <div>
            <form>
            <input 
            type="email" 
            name="email" 
            placeholder="Insira seu email" 
            value={email}
            onChange={onChangeEmail}
            />
            <input 
            type="password" 
            name="senha" 
            placeholder="Insira a senha" 
            value={password}
            onChange={onChangePassword}
            />  

            <button onSubmit={onSubmitLogin}>Enviar</button> 

            
            </form>
            </div>
        </div>
    )



}

export default LoginPage;