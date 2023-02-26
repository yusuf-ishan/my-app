import React , {useState} from "react";

export const Register = () => {
    const [Email , setEmail] = useState ('');
    const [Pass , setPass] = useState ('');
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
    }
    return(
    <form>
        <label htmlFor="name">Full Name</label>
       <input value={name} type={"text"} placeholder="Full Name" name="name" />
       <label htmlFor="email">email</label>
    <input value={Email} type={"email"} placeholder="youremail@gmail.com" name="email" /> 
    <label htmlFor="password"></label>
    <input value={Pass} type={"password"} placeholder="********" name="pass" />
    <button type="submit">Log In</button>
</form>
    )
}