import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

export const Territories = () => {
    const [territories, setTerritories] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTerritories = async () => {
            const response = await fetch("http://localhost:3000/app/territories", {
                method: "GET",
                credentials: "include", // Para enviar cookies
            });

            if (response.ok) {
                const data = await response.json();
                setTerritories(data);
            } else {
                const result = await response.json();
                setMessage(result.message);
                if (result.message === "Unauthorized") {
                    navigate("/login");
                }
            }
        };

        fetchTerritories();
    }, []);

    const handleClick = (territoryNumber) => {
        console.log(`Selected Territory Number: ${territoryNumber}`); 
        navigate(`/home/${encodeURIComponent(territoryNumber)}`);
    };

    return (
        <div>
            <h1>Territories</h1>
            {message && <p>{message}</p>}
            <ul>
                {territories.map(territory => (
                    <li key={territory.territory_id} onClick={() => handleClick(territory.territory_number)}>
                        (Number: {territory.territory_number}) <strong>{territory.territory_names}</strong> 
                    </li>
                ))}
            </ul>
        </div>
    );
};

