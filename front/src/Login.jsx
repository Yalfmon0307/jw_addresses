import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (data) => {

        const response = await fetch("http://localhost:3000/app/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            credentials: "include", // Para enviar cookies
        });



        const result = await response.json();

        if ( response.ok ) {
            setMessage(result.message);
            navigate("/territories");
        } else {
            setMessage(result.message);
            reset();
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email:</label>
                    <input 
                        {...register("email", { required: "Email is required" })} 
                        type="email" 
                        placeholder="Email" 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        {...register("password", { required: "Password is required" })} 
                        type="password" 
                        placeholder="Password" 
                    />
                </div>
                <button type="submit">Login</button>
                {message && <p>{message}</p>}
                <p>si no tienes una cuenta puedes <Link to="/register">Register</Link> </p>
            </form>
        </div>
    );
};

