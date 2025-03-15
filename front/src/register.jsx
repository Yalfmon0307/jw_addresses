import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
    const { register, handleSubmit,reset } = useForm();
    const [message, setMessage] = useState("");

    const onSubmit = async (data) => {
        const response = await fetch("http://localhost:3000/app/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.message === "User registered successfully") {
            setMessage(result.message);
            // Aquí puedes redirigir o realizar otra acción
        } else {
            setMessage(result.message);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Name:</label>
                    <input 
                        {...register("name", { required: "Name is required" })} 
                        type="text" 
                        placeholder="Name" 
                    />
                </div>
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
                <button type="submit">Register</button>
                {message && <p>{message}</p>}
            </form>
        </div>
    );
};

