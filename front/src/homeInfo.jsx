import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const HomeInfo = () => {
    const { territory_number } = useParams();
    const [homes, setHomes] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchHomes = async () => {
            const response = await fetch(`http://localhost:3000/app/home/${territory_number}`, {
                method: "GET",
                credentials: "include", // Para enviar cookies
            });

            if (response.ok) {
                const data = await response.json();
                setHomes(data);
            } else {
                const result = await response.json();
                setMessage(result.message);
                if (result.message === "Unauthorized") {
                    navigate("/login");
                }
            }
        };

        fetchHomes();
    }, [territory_number]);

    return (
        <div>
            <h1>Homes in Territory Number: {territory_number}</h1>
            {message && <p>{message}</p>}
            <ul>
                {homes.map(home => (
                    <li key={home.home_id}>
                        <strong>Name:</strong> {home.name} <br />
                        <strong>Age:</strong> {home.age} <br />
                        <strong>Family:</strong> {home.family} <br />
                        <strong>Address:</strong> <a href={`${home.adress}`} target="_blank" 
                            rel="noopener noreferrer">{home.adress}</a> <br />
                    </li>
                ))}
            </ul>
            <Link to="/territories">Back to Territories</Link>
        </div>
    );
};
